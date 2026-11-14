import { downloadPath } from '../constants'

export const appleAppId = '1369288585'
export const playAppId = 'ee.forgr.captime'

// TODO: set the Apple App Analytics provider token (pt). Omit the query param while empty.
export const appStoreProviderToken = ''

export const campaignPathPattern = /^\/go\/([A-Za-z0-9][A-Za-z0-9_-]*)\/?$/

export function campaignPath(ct: string, store?: 'ios' | 'android'): string {
  if (!store)
    return `/go/${ct}`
  return `/go/${ct}?store=${store}`
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

export type CampaignStore = 'ios' | 'android' | 'mac' | 'other'

export function storeFromUserAgent(ua: string): CampaignStore {
  if (/Android/i.test(ua))
    return 'android'
  // iPhone UAs include "like Mac OS X". Match those, and iPads that still say iPad, before Macintosh.
  if (/iPhone|iPad|iPod/i.test(ua))
    return 'ios'
  if (/Macintosh|Mac OS X/i.test(ua))
    return 'mac'
  return 'other'
}

function explicitStore(value: string | null): 'ios' | 'android' | null {
  if (value === 'ios' || value === 'android')
    return value
  return null
}

export type CampaignDecision =
  | { action: 'redirect'; location: string }
  | { action: 'touch'; appStore: string; download: string }

export function campaignDecision(target: URL, ua: string): CampaignDecision | null {
  const match = target.pathname.match(campaignPathPattern)
  if (!match)
    return null

  const ct = match[1]
  const explicit = explicitStore(target.searchParams.get('store'))
  const store = explicit || storeFromUserAgent(ua)
  // A Mac UA is also what iPadOS sends. Touch is only visible in the browser, so generic links
  // get a tiny page that sends maxTouchPoints > 1 to the App Store and everyone else to /download/.
  if (!explicit && store === 'mac') {
    return {
      action: 'touch',
      appStore: appStoreCampaignUrl(ct),
      download: new URL(downloadPath, target.origin).toString(),
    }
  }
  if (store === 'android')
    return { action: 'redirect', location: playStoreCampaignUrl(ct) }
  if (store === 'ios')
    return { action: 'redirect', location: appStoreCampaignUrl(ct) }
  return { action: 'redirect', location: new URL(downloadPath, target.origin).toString() }
}

export function campaignLocation(target: URL, ua: string): string | null {
  const decision = campaignDecision(target, ua)
  if (!decision || decision.action !== 'redirect')
    return null
  return decision.location
}

function touchCheckPage(appStore: string, download: string): string {
  const href = download.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="robots" content="noindex">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Download Captime</title>
</head>
<body>
<script>
(function () {
  var appStore = ${JSON.stringify(appStore)};
  var download = ${JSON.stringify(download)};
  if (navigator.maxTouchPoints > 1)
    location.replace(appStore);
  else
    location.replace(download);
})();
</script>
<noscript><a href="${href}">Continue</a></noscript>
</body>
</html>`
}

export function campaignRedirectResponse(request: Request): Response | null {
  const url = new URL(request.url)
  const decision = campaignDecision(url, request.headers.get('user-agent') || '')
  if (!decision)
    return null

  if (decision.action === 'touch') {
    return new Response(touchCheckPage(decision.appStore, decision.download), {
      status: 200,
      headers: {
        'Content-Type': 'text/html; charset=utf-8',
        'Cache-Control': 'no-store',
      },
    })
  }

  return new Response(null, {
    status: 302,
    headers: {
      Location: decision.location,
      'Cache-Control': 'no-store',
    },
  })
}
