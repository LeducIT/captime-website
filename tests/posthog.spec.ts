import { gunzipSync } from 'node:zlib'
import { expect, test } from '@playwright/test'
import { posthogKey } from '../src/config/posthog'
import { buildGoRedirectEvent, shouldSendGoRedirect } from '../src/lib/go-redirect'
import { ingestTarget } from '../src/lib/ingest'
import { storeClickFromHref } from '../src/lib/store-click'

const iphone = 'Mozilla/5.0 (iPhone; CPU iPhone OS 16_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.0 Mobile/15E148 Safari/604.1'

test.describe('store click properties', () => {
  test('classifies campaign and store links', () => {
    expect(storeClickFromHref('/go/hero?store=ios', '/')).toEqual({
      page: '/',
      placement: 'hero',
      platform: 'ios',
      ct: 'hero',
    })
    expect(storeClickFromHref('/go/blog_cta?store=android', '/blog/amrap/')).toEqual({
      page: '/blog/amrap/',
      placement: 'blog_cta',
      platform: 'android',
      ct: 'blog_cta',
    })
    expect(storeClickFromHref('/go/nav', '/', { userAgent: iphone })).toMatchObject({
      placement: 'header',
      platform: 'ios',
      ct: 'nav',
    })
    expect(storeClickFromHref('/go/qr', '/')).toMatchObject({ placement: 'qr', ct: 'qr' })
    expect(storeClickFromHref('/go/download?store=ios', '/download/')).toMatchObject({
      placement: 'inline',
      platform: 'ios',
      ct: 'download',
    })
    expect(storeClickFromHref('/go/footer', '/')).toMatchObject({ placement: 'footer', ct: 'footer' })
    expect(storeClickFromHref('/go/popup', '/')).toMatchObject({ placement: 'popup', ct: 'popup' })
    expect(storeClickFromHref('/go/unknown-slot', '/')).toMatchObject({ placement: 'other', ct: 'unknown-slot' })
    expect(storeClickFromHref('https://apps.apple.com/app/id1369288585?ct=hero', '/')).toMatchObject({
      placement: 'hero',
      platform: 'ios',
      ct: 'hero',
    })
    expect(storeClickFromHref('https://play.google.com/store/apps/details?id=ee.forgr.captime&referrer=utm_source%3Dcaptime.app%26utm_campaign%3Dblog_cta', '/blog/amrap/')).toMatchObject({
      placement: 'blog_cta',
      platform: 'android',
      ct: 'blog_cta',
    })
    expect(storeClickFromHref('/blog/', '/')).toBeNull()
    expect(storeClickFromHref('mailto:victor@leduc.it', '/')).toBeNull()
  })
})

test.describe('go_redirect capture', () => {
  test('builds a capture payload without the client IP', () => {
    const request = new Request('https://captime.app/go/hero?store=ios', {
      headers: {
        'CF-Connecting-IP': '203.0.113.10',
        'X-Forwarded-For': '203.0.113.10',
        Referer: 'https://news.ycombinator.com/item?id=1',
      },
    })
    Object.assign(request, { cf: { country: 'EE' } })

    const event = buildGoRedirectEvent(request, 'https://apps.apple.com/app/id1369288585?pt=126840438&ct=hero&mt=8', {
      distinctId: '11111111-1111-4111-8111-111111111111',
      timestamp: '2026-11-17T00:00:00.000Z',
    })

    expect(event).toEqual({
      api_key: posthogKey,
      event: 'go_redirect',
      distinct_id: '11111111-1111-4111-8111-111111111111',
      timestamp: '2026-11-17T00:00:00.000Z',
      properties: {
        ct: 'hero',
        store: 'ios',
        referrer_host: 'news.ycombinator.com',
        country: 'EE',
        $ip: null,
        $geoip_disable: true,
        $process_person_profile: false,
      },
    })
    const encoded = JSON.stringify(event)
    expect(encoded).not.toContain('203.0.113.10')
    expect(encoded).not.toContain('item?id=1')
    expect(shouldSendGoRedirect(request)).toBe(true)
    expect(shouldSendGoRedirect(new Request('http://127.0.0.1:4321/go/hero'))).toBe(false)
  })

  test('names the store from the redirect target', () => {
    const play = new Request('https://captime.app/go/blog_cta')
    expect(buildGoRedirectEvent(play, 'https://play.google.com/store/apps/details?id=ee.forgr.captime')?.properties.store).toBe('android')
    const download = new Request('https://captime.app/go/footer')
    expect(buildGoRedirectEvent(download, 'https://captime.app/download/')?.properties).toMatchObject({
      ct: 'footer',
      store: 'download',
    })
    expect(buildGoRedirectEvent(download, 'https://captime.app/download/')?.properties.referrer_host).toBeUndefined()
    expect(buildGoRedirectEvent(download, 'https://captime.app/download/')?.properties.country).toBeUndefined()
  })
})

test.describe('ingest proxy paths', () => {
  test('routes static and array assets separately from the API', () => {
    expect(ingestTarget(new URL('https://captime.app/ingest/e/?ip=0'))).toEqual({
      host: 'eu.i.posthog.com',
      pathWithSearch: '/e/?ip=0',
      asset: false,
    })
    expect(ingestTarget(new URL('https://captime.app/ingest/i/v0/e/'))).toMatchObject({
      host: 'eu.i.posthog.com',
      pathWithSearch: '/i/v0/e/',
      asset: false,
    })
    expect(ingestTarget(new URL('https://captime.app/ingest/static/array.js'))).toEqual({
      host: 'eu-assets.i.posthog.com',
      pathWithSearch: '/static/array.js',
      asset: true,
    })
    expect(ingestTarget(new URL('https://captime.app/ingest/array/phc_test/config.js'))).toMatchObject({
      host: 'eu-assets.i.posthog.com',
      pathWithSearch: '/array/phc_test/config.js',
      asset: true,
    })
    expect(ingestTarget(new URL('https://captime.app/go/hero'))).toBeNull()
  })

  test('loopback ingest posts are not forwarded', async ({ request }) => {
    const response = await request.post('/ingest/e/', {
      data: JSON.stringify({ event: 'test_event' }),
      headers: { 'content-type': 'application/json' },
    })
    expect(response.status()).toBe(200)
    expect(await response.json()).toEqual({ status: 1 })
  })

  test('serves the PostHog asset script through /ingest/static', async ({ request }) => {
    const response = await request.get('/ingest/static/array.js')
    expect(response.status()).toBe(200)
    const body = await response.text()
    expect(body.length).toBeGreaterThan(1000)
    expect(body.toLowerCase()).toContain('posthog')
  })
})

function decodeBody(buffer: Buffer, url: string): string {
  if (buffer.length === 0)
    return ''
  const compression = new URL(url).searchParams.get('compression') || ''
  const raw = buffer.toString('utf8')
  const dataParam = raw.startsWith('data=') ? new URLSearchParams(raw).get('data') : null
  const payload = dataParam ? Buffer.from(dataParam, 'base64') : buffer
  if (compression.includes('gzip') || (!dataParam && !raw.trimStart().startsWith('{'))) {
    try {
      return gunzipSync(payload).toString('utf8')
    }
    catch {
      // The payload is plain text or plain base64 JSON.
    }
  }
  const text = payload.toString('utf8')
  if (text.startsWith('{') || text.startsWith('['))
    return text
  return raw
}

function storeClickProperties(bodies: string[]): Record<string, unknown>[] {
  const found: Record<string, unknown>[] = []
  const walk = (value: unknown) => {
    if (!value || typeof value !== 'object')
      return
    if (Array.isArray(value)) {
      value.forEach(walk)
      return
    }
    const record = value as Record<string, unknown>
    if (record.event === 'store_click' && record.properties && typeof record.properties === 'object')
      found.push(record.properties as Record<string, unknown>)
    Object.values(record).forEach(walk)
  }
  for (const body of bodies) {
    try {
      walk(JSON.parse(body))
    }
    catch {
      // Ignore non-JSON traffic such as script loads.
    }
  }
  return found
}

test.describe('PostHog on the page', () => {
  test.use({
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
  })

  test('the script loads and a store click captures store_click', async ({ page }) => {
    const bodies: string[] = []
    const scriptUrls: string[] = []
    await page.route('**/ingest/**', async (route) => {
      const request = route.request()
      if (request.method() === 'GET' || request.method() === 'HEAD') {
        const response = await route.fetch()
        if (request.url().includes('/ingest/static/'))
          scriptUrls.push(`${response.status()} ${request.url()}`)
        await route.fulfill({ response })
        return
      }
      bodies.push(decodeBody(request.postDataBuffer() ?? Buffer.alloc(0), request.url()))
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({ status: 1 }),
      })
    })

    await page.goto('/')
    const html = await page.content()
    expect(html).toContain('pls.digitalshift-ee.workers.dev/js/script.js')

    await expect.poll(() => page.evaluate(() => {
      const client = (window as Window & {
        posthog?: { __loaded?: boolean, config?: { api_host?: string, persistence?: string, cookieless_mode?: string, session_recording?: { maskAllInputs?: boolean } } }
      }).posthog
      return {
        loaded: Boolean(client?.__loaded),
        apiHost: client?.config?.api_host || '',
        persistence: client?.config?.persistence || '',
        cookieless: client?.config?.cookieless_mode || '',
        maskAllInputs: client?.config?.session_recording?.maskAllInputs === true,
      }
    })).toEqual({
      loaded: true,
      apiHost: '/ingest',
      persistence: 'localStorage+cookie',
      cookieless: '',
      maskAllInputs: true,
    })

    await expect.poll(() => scriptUrls.some(url => url.startsWith('200 '))).toBe(true)
    expect(await page.evaluate(() => document.cookie)).toContain('ph_')

    // Playwright sets navigator.webdriver, which PostHog treats as a bot and drops.
    await page.evaluate(() => {
      const client = (window as Window & { posthog?: { set_config: (config: { opt_out_useragent_filter: boolean }) => void } }).posthog
      client?.set_config({ opt_out_useragent_filter: true })
    })
    const badge = page.locator('a[href="/go/hero?store=ios"]')
    await badge.evaluate((anchor) => {
      anchor.addEventListener('click', event => event.preventDefault(), true)
    })
    await badge.click()

    await expect.poll(() => bodies.some(body => body.includes('store_click'))).toBe(true)
    expect(storeClickProperties(bodies).at(-1)).toMatchObject({
      page: '/',
      placement: 'hero',
      platform: 'ios',
      ct: 'hero',
    })
  })

  test('session recording starts and posts snapshots to /ingest/s/', async ({ page }) => {
    test.setTimeout(45_000)
    const ingestUrls: string[] = []
    page.on('request', (request) => {
      const url = request.url()
      if (url.includes('/ingest/'))
        ingestUrls.push(`${request.method()} ${url}`)
    })

    await page.goto('/')
    await expect.poll(() => page.evaluate(() => {
      const client = (window as Window & {
        posthog?: {
          sessionRecordingStarted?: () => boolean
          config?: {
            api_host?: string
            persistence?: string
            cookieless_mode?: string
            person_profiles?: string
            disable_surveys?: boolean
            autocapture?: boolean
            capture_dead_clicks?: boolean
            capture_heatmaps?: boolean
            capture_performance?: boolean | object
            disable_session_recording?: boolean
            session_recording?: { maskAllInputs?: boolean }
          }
        }
      }).posthog
      const performance = client?.config?.capture_performance
      return {
        started: client?.sessionRecordingStarted?.() === true,
        apiHost: client?.config?.api_host || '',
        persistence: client?.config?.persistence || '',
        cookieless: client?.config?.cookieless_mode || '',
        personProfiles: client?.config?.person_profiles || '',
        surveysOff: client?.config?.disable_surveys === true,
        autocapture: client?.config?.autocapture === true,
        deadClicks: client?.config?.capture_dead_clicks === true,
        heatmaps: client?.config?.capture_heatmaps === true,
        performance: performance === true || (typeof performance === 'object' && performance !== null),
        recordingEnabled: client?.config?.disable_session_recording === false,
        maskAllInputs: client?.config?.session_recording?.maskAllInputs === true,
      }
    }), { timeout: 20_000 }).toEqual({
      started: true,
      apiHost: '/ingest',
      persistence: 'localStorage+cookie',
      cookieless: '',
      personProfiles: 'identified_only',
      surveysOff: true,
      autocapture: true,
      deadClicks: true,
      heatmaps: true,
      performance: true,
      recordingEnabled: true,
      maskAllInputs: true,
    })

    // Playwright's userAgentData brand is HeadlessChrome, which PostHog treats as a bot and drops.
    // The init config above is the real one. This only lets the test browser deliver the snapshot.
    await page.evaluate(() => {
      const client = (window as Window & { posthog?: { set_config: (config: { opt_out_useragent_filter: boolean }) => void } }).posthog
      client?.set_config({ opt_out_useragent_filter: true })
    })

    // The project minimum is 3s of recorded activity, measured from event timestamps.
    // Interact after that so the snapshot is old enough to send.
    await page.waitForTimeout(3_500)
    await page.mouse.move(80, 160)
    await page.mouse.move(300, 420, { steps: 12 })
    await page.mouse.wheel(0, 500)
    await page.mouse.click(120, 240)

    await expect.poll(() => ingestUrls.some(url => url.includes('/ingest/s/')), { timeout: 15_000 }).toBe(true)
    const snapshot = ingestUrls.find(url => url.includes('/ingest/s/'))
    console.log(`session replay evidence: sessionRecordingStarted=true ${snapshot}`)
    expect(snapshot?.startsWith('POST ')).toBe(true)
  })
})
