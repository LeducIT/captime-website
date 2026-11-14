import { expect, test } from '@playwright/test'
import { readFileSync } from 'node:fs'
import { appStoreCampaignUrl, campaignLocation, campaignRedirectResponse, playStoreCampaignUrl } from '../src/lib/campaign'

const origin = 'https://captime.app'
const iphone = 'Mozilla/5.0 (iPhone; CPU iPhone OS 16_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.0 Mobile/15E148 Safari/604.1'
const macos = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Safari/605.1.15'
const android = 'Mozilla/5.0 (Linux; Android 13; Pixel 7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36'
const desktop = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'

const slashPaths = ['/blog', '/download', '/privacy', '/tos', '/eula', '/disclaimer', '/return', '/blog/amrap']

test.describe('smart app banner', () => {
  test('apple-itunes-app meta is on home, blog, and download', async ({ request }) => {
    for (const path of ['/', '/blog/', '/blog/amrap/', '/download/']) {
      const html = await (await request.get(path)).text()
      expect(html, path).toContain('name="apple-itunes-app"')
      expect(html, path).toContain('content="app-id=1369288585"')
    }
  })
})

test.describe('campaign redirect logic', () => {
  test('resolves store URLs from User-Agent', () => {
    expect(campaignLocation('/go/hero', iphone, origin)).toBe(appStoreCampaignUrl('hero'))
    expect(campaignLocation('/go/hero', macos, origin)).toBe(appStoreCampaignUrl('hero'))
    expect(campaignLocation('/go/blog_cta', android, origin)).toBe(playStoreCampaignUrl('blog_cta'))
    expect(campaignLocation('/go/footer', desktop, origin)).toBe(`${origin}/download/`)
    expect(campaignLocation('/go/hero', desktop, origin)).toBe(`${origin}/download/`)
    expect(campaignLocation('/missing', iphone, origin)).toBeNull()
  })

  test('omits empty App Store pt param', () => {
    expect(appStoreCampaignUrl('hero')).toBe('https://apps.apple.com/app/id1369288585?ct=hero&mt=8')
    expect(appStoreCampaignUrl('hero')).not.toContain('pt=')
    expect(playStoreCampaignUrl('hero')).toBe(
      'https://play.google.com/store/apps/details?id=ee.forgr.captime&referrer=utm_source%3Dcaptime.app%26utm_campaign%3Dhero',
    )
  })

  test('campaign response is 302 with no-store', () => {
    const response = campaignRedirectResponse(new Request(`${origin}/go/hero`, { headers: { 'user-agent': iphone } }))
    expect(response).toBeTruthy()
    expect(response!.status).toBe(302)
    expect(response!.headers.get('Location')).toBe(appStoreCampaignUrl('hero'))
    expect(response!.headers.get('Cache-Control')).toBe('no-store')
  })
})

test.describe('Workers /go/ redirects', () => {
  test('iOS and macOS go to the App Store', async ({ request }) => {
    for (const ua of [iphone, macos]) {
      const response = await request.get('/go/hero', { maxRedirects: 0, headers: { 'user-agent': ua } })
      expect(response.status()).toBe(302)
      expect(response.headers()['location']).toBe(appStoreCampaignUrl('hero'))
      expect(response.headers()['cache-control']).toBe('no-store')
    }
  })

  test('Android goes to Google Play', async ({ request }) => {
    const response = await request.get('/go/blog_cta', { maxRedirects: 0, headers: { 'user-agent': android } })
    expect(response.status()).toBe(302)
    expect(response.headers()['location']).toBe(playStoreCampaignUrl('blog_cta'))
  })

  test('other User-Agents go to /download/', async ({ request }) => {
    const response = await request.get('/go/footer', { maxRedirects: 0, headers: { 'user-agent': desktop } })
    expect(response.status()).toBe(302)
    expect(new URL(response.headers()['location'] || '', 'http://127.0.0.1:4321').pathname).toBe('/download/')
  })
})

test.describe('trailing slash redirects', () => {
  test('_redirects lists directory routes as 301', () => {
    const redirects = readFileSync('public/_redirects', 'utf8')
    for (const path of ['/blog', '/download', '/privacy', '/tos', '/eula', '/disclaimer', '/return'])
      expect(redirects).toContain(`${path} ${path}/ 301`)
    expect(redirects).toContain('/blog/:slug /blog/:slug/ 301')
  })

  test('directory URLs without a slash return 301', async ({ request }) => {
    for (const path of slashPaths) {
      const response = await request.get(path, { maxRedirects: 0 })
      expect(response.status(), path).toBe(301)
      expect(response.headers()['location'], path).toMatch(new RegExp(`${path}/$`))
    }
  })

  test('canonical slash URLs still return 200', async ({ request }) => {
    for (const path of ['/blog/', '/download/', '/privacy/', '/blog/amrap/']) {
      const response = await request.get(path, { maxRedirects: 0 })
      expect(response.status(), path).toBe(200)
    }
  })
})
