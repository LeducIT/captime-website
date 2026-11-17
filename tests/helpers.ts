import type { Page } from '@playwright/test'

const blockedHosts = [
  'pls.digitalshift-ee.workers.dev',
  'client.crisp.chat',
  'app.chatwoot.com',
  'js.crisp.chat',
  'eu.i.posthog.com',
  'eu-assets.i.posthog.com',
  'eu.posthog.com',
  'us.i.posthog.com',
  'us-assets.i.posthog.com',
  'us.posthog.com',
]

export async function blockThirdParty(page: Page) {
  await page.route('**/*', (route) => {
    const url = new URL(route.request().url())
    if (url.pathname === '/ingest' || url.pathname.startsWith('/ingest/'))
      return route.abort()
    if (blockedHosts.some(blocked => hostMatches(url.hostname, blocked)))
      return route.abort()
    return route.continue()
  })
}

function hostMatches(hostname: string, blocked: string) {
  return hostname === blocked || hostname.endsWith(`.${blocked}`)
}

async function waitForImages(page: Page, timeoutMs = 4000) {
  await page.evaluate(async (timeout) => {
    const images = Array.from(document.images)
    await Promise.all(
      images.map((img) => {
        if (img.complete)
          return Promise.resolve()
        return Promise.race([
          new Promise<void>((resolve) => {
            img.addEventListener('load', () => resolve(), { once: true })
            img.addEventListener('error', () => resolve(), { once: true })
          }),
          new Promise<void>((resolve) => setTimeout(resolve, timeout)),
        ])
      }),
    )
  }, timeoutMs)
}

export async function waitForVisualReady(page: Page, options?: { scroll?: boolean }) {
  const scroll = options?.scroll ?? true
  await page.waitForLoadState('domcontentloaded')
  await page.evaluate(() => document.fonts.ready)

  if (scroll) {
    const height = await page.evaluate(() => Math.max(document.body.scrollHeight, document.documentElement.scrollHeight))
    const viewport = page.viewportSize()?.height ?? 800
    for (let y = 0; y < height; y += viewport) {
      await page.evaluate((top) => window.scrollTo(0, top), y)
      await page.waitForTimeout(150)
    }
    await page.evaluate(() => window.scrollTo(0, 0))
    await page.waitForTimeout(200)
  }

  await waitForImages(page)
  await page.evaluate(() => document.fonts.ready)
}
