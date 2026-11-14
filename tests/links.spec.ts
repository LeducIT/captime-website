import { expect, test } from '@playwright/test'
import { globSync, readFileSync } from 'node:fs'

test.describe('download links', () => {
  test('built files do not contain n.to or onelink.to', () => {
    const files = globSync('dist/**/*.{html,js,xml,txt,json,svg,css}')
    expect(files.length).toBeGreaterThan(0)
    for (const file of files) {
      const text = readFileSync(file, 'utf8')
      expect.soft(text, file).not.toMatch(/n\.to\/captime/i)
      expect.soft(text, file).not.toMatch(/https?:\/\/n\.to\b/i)
      expect.soft(text, file).not.toMatch(/onelink\.to/i)
    }
  })

  test('/download page lists both stores and no n.to', async ({ request }) => {
    const response = await request.get('/download/')
    expect(response.status()).toBe(200)
    const html = await response.text()
    expect(html).toContain('id1369288585?ct=download')
    expect(html).toContain('ee.forgr.captime')
    expect(html).toContain('utm_campaign%3Ddownload')
    expect(html).not.toMatch(/n\.to\/captime/i)
    expect(html).not.toMatch(/https?:\/\/n\.to\b/i)
    expect(html).not.toMatch(/onelink\.to/i)
  })

  test('home CTAs point at /go/ campaign routes', async ({ page }) => {
    await page.goto('/')
    await expect(page.locator('a[href="/go/hero"]')).toHaveCount(2)
    await expect(page.locator('a[href="/go/nav"]').first()).toHaveAttribute('href', '/go/nav')
    await expect(page.locator('a[href="/go/qr"]').first()).toHaveAttribute('href', '/go/qr')
    await expect(page.locator('a[href="/go/cta"]')).toHaveCount(0)
    await expect(page.getByRole('link', { name: 'Download on the App Store' })).toHaveCount(1)
    await expect(page.getByRole('link', { name: 'Get it on Google Play' })).toHaveCount(1)
    const smash = page.getByRole('link', { name: 'Smash wods NOW' })
    await expect(smash).toHaveCount(3)
    await expect(smash.first()).toHaveAttribute('href', '#hero-downloads')
  })

  test('landing Smash button scrolls to the hero store badges', async ({ page }) => {
    await page.goto('/')
    await page.getByRole('heading', { name: 'Train anywhere.' }).scrollIntoViewIfNeeded()
    await page.getByRole('link', { name: 'Smash wods NOW' }).last().click()
    await expect(page.locator('#hero-downloads')).toBeInViewport()
    await expect(page.getByRole('link', { name: 'Download on the App Store' })).toBeInViewport()
  })

  test('reduced motion still lands on the hero store badges', async ({ page }) => {
    await page.emulateMedia({ reducedMotion: 'reduce' })
    await page.goto('/')
    await page.getByRole('heading', { name: 'Train anywhere.' }).scrollIntoViewIfNeeded()
    await page.getByRole('link', { name: 'Smash wods NOW' }).last().click()
    await expect(page.locator('#hero-downloads')).toBeInViewport()
  })

  test('blog CTAs point at /go/blog_cta', async ({ page }) => {
    await page.goto('/blog/amrap/')
    await expect(page.locator('a[href="/go/blog_cta"]').first()).toHaveAttribute('href', '/go/blog_cta')
  })

  test('hero store badges are the same size', async ({ page }) => {
    await page.goto('/')
    const apple = page.getByRole('link', { name: 'Download on the App Store' }).first()
    const play = page.getByRole('link', { name: 'Get it on Google Play' }).first()
    const a = await apple.boundingBox()
    const b = await play.boundingBox()
    expect(a).toBeTruthy()
    expect(b).toBeTruthy()
    expect(a!.width).toBe(b!.width)
    expect(a!.height).toBe(b!.height)
  })
})
