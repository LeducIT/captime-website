import { expect, test } from '@playwright/test'
import { blockThirdParty, waitForVisualReady } from './helpers'

test.describe('visual baselines', () => {
  test.describe.configure({ timeout: 60_000 })

  test.beforeEach(async ({ page }) => {
    await blockThirdParty(page)
  })

  test('home', async ({ page }) => {
    await page.goto('/')
    await waitForVisualReady(page)
    await expect(page).toHaveScreenshot('home.png', { fullPage: true })
  })

  test('home hero download cta', async ({ page }) => {
    await page.goto('/')
    await waitForVisualReady(page, { scroll: false })
    const hero = page.locator('h1', { hasText: 'Top Athlete' }).locator('xpath=ancestor::div[contains(@class,"space-y")]')
    await expect(hero).toHaveScreenshot('home-hero-cta.png')
  })

  test('home store badges', async ({ page }) => {
    await page.goto('/')
    await waitForVisualReady(page, { scroll: false })
    const apple = page.getByRole('link', { name: 'Download on the App Store' }).first()
    const row = apple.locator('xpath=ancestor::div[contains(@class,"flex")][1]')
    await expect(row).toHaveScreenshot('store-badges.png')
  })

  test('home call to action download', async ({ page }) => {
    await page.goto('/')
    await waitForVisualReady(page)
    const heading = page.getByRole('heading', { name: 'Smash every workout.' })
    await heading.scrollIntoViewIfNeeded()
    const section = page.locator('section').filter({ has: heading }).first()
    await expect(section).toHaveScreenshot('home-cta.png')
  })

  test('blog index', async ({ page }) => {
    await page.goto('/blog/')
    await waitForVisualReady(page, { scroll: false })
    await expect(page).toHaveScreenshot('blog.png')
  })

  test('blog article amrap', async ({ page }) => {
    await page.goto('/blog/amrap/')
    await waitForVisualReady(page)
    await expect(page).toHaveScreenshot('blog-amrap.png', { fullPage: true })
  })

  test('404', async ({ page }) => {
    await page.goto('/404.html')
    await waitForVisualReady(page, { scroll: false })
    await expect(page).toHaveScreenshot('404.png', { fullPage: true })
  })
})
