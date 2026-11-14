import { downloadPath } from '../constants'

export const appleAppId = '1369288585'
export const playAppId = 'ee.forgr.captime'

// TODO: set the Apple App Analytics provider token (pt). Omit the query param while empty.
export const appStoreProviderToken = ''

export const campaignPathPattern = /^\/go\/([A-Za-z0-9][A-Za-z0-9_-]*)\/?$/

export function campaignPath(ct: string): string {
  return `/go/${ct}`
}

export function appStoreCampaignUrl(ct: string): string {
  const parts = [`ct=${encodeURIComponent(ct)}`, 'mt=8']
  if (appStoreProviderToken)
    parts.unshift(`pt=${encodeURIComponent(appStoreProviderToken)}`)
  return `https://apps.apple.com/app/id${appleAppId}?${parts.join('&')}`
}

export function playStoreCampaignUrl(ct: string): string {
  const referrer = `utm_source=captime.app&utm_campaign=${ct}`
  return `https://play.google.com/store/apps/details?id=${playAppId}&referrer=${encodeURIComponent(referrer)}`
}

export type CampaignStore = 'ios' | 'android' | 'other'

export function storeFromUserAgent(ua: string): CampaignStore {
  if (/Android/i.test(ua))
    return 'android'
  if (/iPhone|iPad|iPod|Macintosh|Mac OS X/i.test(ua))
    return 'ios'
  return 'other'
}

export function campaignLocation(pathname: string, ua: string, origin: string): string | null {
  const match = pathname.match(campaignPathPattern)
  if (!match)
    return null

  const ct = match[1]
  const store = storeFromUserAgent(ua)
  if (store === 'android')
    return playStoreCampaignUrl(ct)
  if (store === 'ios')
    return appStoreCampaignUrl(ct)
  return new URL(downloadPath, origin).toString()
}

export function campaignRedirectResponse(request: Request): Response | null {
  const url = new URL(request.url)
  const location = campaignLocation(url.pathname, request.headers.get('user-agent') || '', url.origin)
  if (!location)
    return null

  return new Response(null, {
    status: 302,
    headers: {
      Location: location,
      'Cache-Control': 'no-store',
    },
  })
}
