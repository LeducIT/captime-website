import { expect, test } from '@playwright/test'
import { existsSync, globSync, lstatSync, readFileSync } from 'node:fs'
import { join } from 'node:path'

const dist = 'dist'
const origin = 'https://captime.app'
const unpublished = [
  'farmer-s-walk-benefits-best-exercise-to-strengthen-your-core-muscles',
  'how-to-perform-murph-workout-and-variations-to-try',
  'regenerate-faster-tips-for-regeneration-in-crossfit',
  'supercompensation-how-to-avoid-overtraining',
]

function readDist(name: string) {
  const path = join(dist, name)
  expect(existsSync(path), path).toBeTruthy()
  expect(lstatSync(path).isFile(), `${path} should be a file`).toBeTruthy()
  return readFileSync(path, 'utf8')
}

function locsFrom(xml: string) {
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1])
}

function distHasPage(pathname: string) {
  const clean = (pathname.replace(/\/$/, '') || '').replace(/^\//, '')
  const candidates = clean ? [join(dist, clean, 'index.html'), join(dist, `${clean}.html`), join(dist, clean)] : [join(dist, 'index.html')]
  return candidates.some((path) => existsSync(path) && lstatSync(path).isFile())
}

test.describe('sitemaps and robots', () => {
  test('sitemap-index.xml is XML and lists child sitemaps', () => {
    const xml = readDist('sitemap-index.xml')
    expect(xml.startsWith('<?xml')).toBeTruthy()
    expect(xml).toContain('<sitemapindex')
    expect(xml).not.toContain('<html')
    expect(locsFrom(xml)).toEqual([`${origin}/sitemap-0.xml`, `${origin}/sitemap-1.xml`])
  })

  test('sitemap.xml is the same sitemap index', () => {
    const index = readDist('sitemap-index.xml')
    const alias = readDist('sitemap.xml')
    expect(alias).toBe(index)
  })

  test('child sitemaps only list canonical 200 pages', () => {
    const pages = readDist('sitemap-0.xml')
    const posts = readDist('sitemap-1.xml')
    expect(pages).toContain('<urlset')
    expect(posts).toContain('<urlset')

    const locs = [...locsFrom(pages), ...locsFrom(posts)]
    expect(locs.length).toBeGreaterThan(10)
    expect(locs.every((loc) => loc.startsWith(`${origin}/`))).toBeTruthy()
    expect(locs.some((loc) => loc.includes('%20') || loc.includes(' '))).toBeFalsy()

    for (const slug of unpublished) expect(locs.some((loc) => loc.includes(slug))).toBeFalsy()

    for (const loc of locs) {
      const path = loc.replace(origin, '') || '/'
      expect.soft(distHasPage(path), loc).toBeTruthy()
    }
  })

  test('robots.txt points at sitemap-index.xml', () => {
    const robots = readDist('robots.txt')
    expect(robots).toContain('User-agent: *')
    expect(robots).toContain(`Sitemap: ${origin}/sitemap-index.xml`)
  })

  test('preview serves sitemaps as XML', async ({ request }) => {
    for (const path of ['/sitemap-index.xml', '/sitemap-0.xml', '/sitemap-1.xml', '/sitemap.xml']) {
      const response = await request.get(path)
      expect(response.status(), path).toBe(200)
      const type = response.headers()['content-type'] || ''
      expect(type, path).toMatch(/xml/)
      const body = await response.text()
      expect(body.startsWith('<?xml'), path).toBeTruthy()
      expect(body, path).not.toContain('<html')
    }
  })
})

test.describe('on-page SEO', () => {
  test('home has canonical, social tags, one H1, lang, and app schema', async ({ page }) => {
    await page.goto('/')
    await expect(page.locator('html')).toHaveAttribute('lang', 'en')
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', `${origin}/`)
    await expect(page.locator('meta[name="description"]')).toHaveAttribute('content', /.+\S/)
    await expect(page.locator('meta[property="og:title"]')).toHaveCount(1)
    await expect(page.locator('meta[property="og:image"]')).toHaveAttribute('content', /^https:\/\//)
    await expect(page.locator('meta[name="twitter:card"]')).toHaveAttribute('content', 'summary_large_image')
    await expect(page.locator('h1')).toHaveCount(1)
    await expect(page.locator('meta[name="apple-itunes-app"]')).toHaveAttribute('content', 'app-id=1369288585')
    const jsonLd = await page.locator('script[type="application/ld+json"]').first().textContent()
    expect(jsonLd).toContain('"SoftwareApplication"')
    expect(jsonLd).toContain('"Organization"')
  })

  test('blog pages use the Captime Blog wordmark', async ({ page }) => {
    await page.goto('/blog/')
    const wordmark = page.locator('header').getByRole('link', { name: 'Captime Blog' })
    await expect(wordmark).toHaveAttribute('href', '/blog/')
    await expect(wordmark).toHaveCSS('font-family', /Handel_Gothic/)
    await expect(page.locator('header').getByRole('link', { name: 'Captime home' })).toHaveAttribute('href', '/')
    await page.goto('/blog/amrap/')
    await expect(page.locator('header').getByRole('link', { name: 'Captime Blog' })).toHaveAttribute('href', '/blog/')
    await expect(page.locator('header').getByRole('link', { name: 'Captime home' })).toHaveAttribute('href', '/')
  })

  test('blog article has canonical, article schema, and one H1', async ({ page }) => {
    await page.goto('/blog/amrap/')
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', `${origin}/blog/amrap/`)
    await expect(page.locator('h1')).toHaveCount(1)
    const jsonLd = await page.locator('script[type="application/ld+json"]').first().textContent()
    expect(jsonLd).toContain('BlogPosting')
    expect(jsonLd).toContain('Article')
  })

  test('mapped posts credit Victor Leduc in byline and JSON-LD', async ({ request }) => {
    const html = await (await request.get('/blog/5-effective-crossfit-workouts-you-can-do-with-captime/')).text()
    expect(html).toContain('Victor Leduc')
    expect(html).toContain('/victor-leduc-96.webp')
    expect(html).not.toContain('Martin Donadieu')
    expect(html).not.toContain('linkedin.com')
    expect(html).not.toContain('github.com/victorleduc')
    expect(html).toContain('"@type":"Person"')
    expect(html).toContain('"name":"Victor Leduc"')
    const jsonLd = html.match(/<script[^>]*type="application\/ld\+json">([^<]+)<\/script>/)?.[1]
    expect(jsonLd).toBeTruthy()
    const graph = JSON.parse(jsonLd!)
    const nodes = Array.isArray(graph) ? graph : graph['@graph'] || [graph]
    const article = nodes.find((node: { '@type'?: string | string[], author?: Record<string, unknown> }) => {
      const type = node['@type']
      return type === 'BlogPosting' || (Array.isArray(type) && type.includes('BlogPosting'))
    })
    const person = article?.author
    expect(person).toMatchObject({ '@type': 'Person', name: 'Victor Leduc' })
    expect(person).not.toHaveProperty('sameAs')
    expect(person).not.toHaveProperty('url')
  })

  test('older posts credit Victor Leduc and keep their dates', async ({ request }) => {
    const cases: Array<[string, string]> = [
      ['/blog/amrap/', 'January 12, 2022'],
      ['/blog/alternative-to/', 'January 13, 2022'],
      ['/blog/regeneration-cool-down-for-after-crossfit-workout/', 'February 02, 2022'],
      ['/blog/explanation-of-tabata-in-crossfit-for-beginners/', 'February 15, 2022'],
      ['/blog/explanation-of-emom-in-crossfit-for-beginners/', 'February 20, 2022'],
      ['/blog/beginners-guide-the-benefits-of-hiit/', 'February 23, 2022'],
      ['/blog/steps-to-getting-ready-for-the-next-crossfit-open/', 'March 09, 2022'],
      ['/blog/top-5-open-2022/', 'March 10, 2022'],
      ['/blog/top-5-open-2023/', 'March 10, 2022'],
      ['/blog/ways-to-improve-your-crossfit-performance/', 'April 03, 2022'],
      ['/blog/crossfit-zone-diet-a-crash-diet-or-an-effective-one/', 'April 10, 2022'],
    ]
    for (const [path, date] of cases) {
      const html = await (await request.get(path)).text()
      expect(html, path).toContain('Victor Leduc')
      expect(html, path).toContain('/victor-leduc-96.webp')
      expect(html, path).toContain(date)
      expect(html, path).not.toContain('Team Captime')
    }
  })

  test('built HTML does not mention Martin Donadieu', () => {
    const htmlFiles = globSync('dist/**/*.html')
    expect(htmlFiles.length).toBeGreaterThan(10)
    for (const file of htmlFiles) {
      const html = readFileSync(file, 'utf8')
      expect.soft(html, file).not.toContain('Martin Donadieu')
    }
  })

  test('legal pages have unique titles and canonicals', async ({ page }) => {
    const titles = new Set<string>()
    for (const path of ['/privacy/', '/tos/', '/eula/', '/disclaimer/', '/return/']) {
      await page.goto(path)
      const title = await page.title()
      expect(title.length).toBeGreaterThan(5)
      expect(titles.has(title), title).toBeFalsy()
      titles.add(title)
      await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', `${origin}${path}`)
      await expect(page.locator('h1')).toHaveCount(1)
      const body = await page.locator('body').innerText()
      expect(body).toContain('victor@leduc.it')
      expect(body).toContain('Leduc IT OÜ')
      expect(body).toContain('Estonia')
      for (const banned of ['14574207', 'Sepapaja', 'RevenueCat', 'Sentry', 'Crisp', 'CapGo', 'PostHog', 'Stripe', 'Plausible', 'workers.dev', 'hello@forgr.ee', 'Digital Shift'])
        expect(body, banned).not.toContain(banned)
    }
  })
})

test.describe('internal links', () => {
  test('built HTML internal hrefs resolve to files or listed redirects', () => {
    const redirects = readFileSync('public/_redirects', 'utf8')
    const redirectSources = new Set(
      redirects
        .split('\n')
        .map((line) => line.trim())
        .filter((line) => line && !line.startsWith('#'))
        .map((line) => line.split(/\s+/)[0]),
    )
    const htmlFiles = globSync('dist/**/*.html')
    expect(htmlFiles.length).toBeGreaterThan(10)

    const missing: string[] = []
    for (const file of htmlFiles) {
      const html = readFileSync(file, 'utf8')
      const hrefs = [...html.matchAll(/\b(?:href|src)="(\/[^"]*)"/g)].map((match) => match[1])
      for (const href of hrefs) {
        const path = href.split('#')[0].split('?')[0]
        if (!path || path.startsWith('//') || path.endsWith('.xml'))
          continue
        if (path.startsWith('/go/'))
          continue
        if (redirectSources.has(path) || distHasPage(path) || existsSync(join(dist, path.replace(/^\//, ''))))
          continue
        missing.push(`${file} -> ${href}`)
      }
    }
    expect(missing, missing.join('\n')).toEqual([])
  })

  test('unpublished post pages are not built', () => {
    for (const slug of unpublished) expect(existsSync(join(dist, 'blog', slug, 'index.html')), slug).toBeFalsy()
  })

  test('_redirects send old URLs to live pages', () => {
    const redirects = readFileSync('public/_redirects', 'utf8')
    const rules = redirects
      .split('\n')
      .map((line) => line.trim())
      .filter((line) => line && !line.startsWith('#'))
      .map((line) => {
        const [source, dest, code] = line.split(/\s+/)
        return { source, dest, code }
      })

    expect(rules.length).toBeGreaterThan(0)
    for (const rule of rules) {
      expect(rule.code).toBe('301')
      if (rule.dest.includes(':') || rule.dest.includes('*'))
        continue
      expect(distHasPage(rule.dest), rule.dest).toBeTruthy()
    }
  })
})
