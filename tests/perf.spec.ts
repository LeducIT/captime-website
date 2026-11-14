import { expect, test } from '@playwright/test'
import { readFileSync } from 'node:fs'

test.describe('performance attributes', () => {
  test('home LCP image is eager with high fetch priority', async ({ request }) => {
    const html = await (await request.get('/')).text()
    expect(html).toMatch(/rel="preload"[^>]*as="image"/)
    expect(html).toMatch(/rel="preload"[^>]*href="\/fonts\/Handel_Gothic\.woff2"/)
    expect(html).toMatch(/fetchpriority="high"/)
    expect(html).toMatch(/loading="eager"/)
    expect(html).toMatch(/decoding="async"/)
  })

  test('blog article LCP image is eager with high fetch priority', async ({ request }) => {
    const html = await (await request.get('/blog/amrap/')).text()
    expect(html).toMatch(/rel="preload"[^>]*as="image"/)
    expect(html).toMatch(/fetchpriority="high"/)
    expect(html).toMatch(/loading="eager"/)
  })

  test('service worker precache stays small and skips large images', () => {
    const sw = readFileSync('dist/sw.js', 'utf8')
    expect(sw).not.toMatch(/hero_1/)
    expect(sw).not.toMatch(/app-demo/)
    expect(sw).not.toMatch(/crossfit_games\.webp/)
    expect(sw).toMatch(/icon\.webp/)
    expect(sw).toMatch(/Handel_Gothic\.woff2/)
    const urls = [...sw.matchAll(/url:"([^"]+)"/g)].map((match) => match[1])
    expect(urls.length).toBeGreaterThan(3)
    expect(urls.length).toBeLessThan(40)
  })
})
