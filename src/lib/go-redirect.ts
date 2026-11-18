import { posthogCaptureUrl, posthogKey } from '../config/posthog'

export interface GoRedirectProperties {
  ct: string
  store: string
  referrer_host?: string
  country?: string
  $ip: null
  $geoip_disable: true
  $process_person_profile: false
}

export interface GoRedirectEvent {
  api_key: string
  event: 'go_redirect'
  distinct_id: string
  timestamp: string
  properties: GoRedirectProperties
}

export function isLoopbackHost(hostname: string): boolean {
  return hostname === 'localhost' || hostname === '127.0.0.1' || hostname === '::1' || hostname === '[::1]'
}

export function referrerHost(referrer: string | null): string | undefined {
  if (!referrer)
    return undefined
  try {
    return new URL(referrer).hostname || undefined
  }
  catch {
    return undefined
  }
}

export function countryFromRequest(request: Request): string | undefined {
  const cf = (request as Request & { cf?: { country?: string } }).cf
  const country = cf?.country?.trim()
  return country || undefined
}

export function storeFromLocation(location: string): string {
  try {
    const url = new URL(location)
    if (url.hostname === 'apps.apple.com' || url.hostname === 'itunes.apple.com')
      return 'ios'
    if (url.hostname === 'play.google.com')
      return 'android'
    const path = url.pathname.replace(/\/+$/, '') || '/'
    if (path === '/download')
      return 'download'
  }
  catch {
    // Fall through to other.
  }
  return 'other'
}

export function buildGoRedirectEvent(request: Request, location: string, ids?: { distinctId?: string, timestamp?: string }): GoRedirectEvent | null {
  const match = new URL(request.url).pathname.match(/^\/go\/([A-Za-z0-9][A-Za-z0-9_-]*)\/?$/)
  if (!match || !location)
    return null

  const referrer = referrerHost(request.headers.get('referer'))
  const country = countryFromRequest(request)
  const properties: GoRedirectProperties = {
    ct: match[1],
    store: storeFromLocation(location),
    $ip: null,
    $geoip_disable: true,
    $process_person_profile: false,
  }
  if (referrer)
    properties.referrer_host = referrer
  if (country)
    properties.country = country

  return {
    api_key: posthogKey,
    event: 'go_redirect',
    distinct_id: ids?.distinctId || crypto.randomUUID(),
    timestamp: ids?.timestamp || new Date().toISOString(),
    properties,
  }
}

export function shouldSendGoRedirect(request: Request): boolean {
  return !isLoopbackHost(new URL(request.url).hostname)
}

export function sendGoRedirect(request: Request, location: string): Promise<void> {
  if (!shouldSendGoRedirect(request))
    return Promise.resolve()

  const event = buildGoRedirectEvent(request, location)
  if (!event)
    return Promise.resolve()

  return fetch(posthogCaptureUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(event),
  }).then(() => undefined, () => undefined)
}
