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
    const response = await request.get('/download')
    expect(response.status()).toBe(200)
    const html = await response.text()
    expect(html).toContain('https://apps.apple.com/us/app/captime-hiit-wod-timer/id1369288585')
    expect(html).toContain('https://play.google.com/store/apps/details?id=ee.forgr.captime')
    expect(html).not.toMatch(/n\.to\/captime/i)
    expect(html).not.toMatch(/https?:\/\/n\.to\b/i)
    expect(html).not.toMatch(/onelink\.to/i)
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
