export const storePlacements = ['header', 'footer', 'hero', 'blog_cta', 'popup', 'inline', 'qr', 'other'] as const

export type StorePlacement = (typeof storePlacements)[number]

export type StorePlatform = 'ios' | 'android'

export interface StoreClickProps {
  page: string
  placement: StorePlacement
  platform?: StorePlatform
  ct: string
}

const placementByCt: Record<string, StorePlacement> = {
  nav: 'header',
  header: 'header',
  footer: 'footer',
  hero: 'hero',
  blog_cta: 'blog_cta',
  popup: 'popup',
  inline: 'inline',
  download: 'inline',
  qr: 'qr',
}

export function placementForCt(ct: string): StorePlacement {
  return placementByCt[ct] || 'other'
}

function isPlacement(value: string | undefined): value is StorePlacement {
  return !!value && (storePlacements as readonly string[]).includes(value)
}

function isPlatform(value: string | null | undefined): value is StorePlatform {
  return value === 'ios' || value === 'android'
}

function isAppleStore(url: URL): boolean {
  return url.hostname === 'apps.apple.com' || url.hostname === 'itunes.apple.com'
}

function isPlayStore(url: URL): boolean {
  return url.hostname === 'play.google.com' && url.pathname.startsWith('/store/apps/')
}

function platformFromUserAgent(userAgent: string | undefined): StorePlatform | undefined {
  if (!userAgent)
    return undefined
  if (/Android/i.test(userAgent))
    return 'android'
  if (/iPhone|iPad|iPod/i.test(userAgent))
    return 'ios'
  return undefined
}

function ctFromStoreUrl(url: URL): string {
  const ct = url.searchParams.get('ct')
  if (ct)
    return ct
  const referrer = url.searchParams.get('referrer')
  if (!referrer)
    return ''
  return new URLSearchParams(referrer).get('utm_campaign') || ''
}

export interface StoreClickHints {
  placement?: string
  platform?: string
  ct?: string
  userAgent?: string
}

export function storeClickFromHref(href: string, page: string, hints: StoreClickHints = {}): StoreClickProps | null {
  let url: URL
  try {
    url = new URL(href, 'https://captime.app')
  }
  catch {
    return null
  }

  const go = url.pathname.match(/^\/go\/([A-Za-z0-9][A-Za-z0-9_-]*)\/?$/)
  const apple = isAppleStore(url)
  const play = isPlayStore(url)
  if (!go && !apple && !play)
    return null

  const storeParam = url.searchParams.get('store')
  let platform: StorePlatform | undefined
  if (isPlatform(hints.platform))
    platform = hints.platform
  else if (isPlatform(storeParam))
    platform = storeParam
  else if (apple)
    platform = 'ios'
  else if (play)
    platform = 'android'
  else
    platform = platformFromUserAgent(hints.userAgent)

  const ct = hints.ct || (go ? go[1] : ctFromStoreUrl(url))
  const placement = isPlacement(hints.placement) ? hints.placement : placementForCt(ct)
  const props: StoreClickProps = {
    page: page || '/',
    placement,
    ct,
  }
  if (platform)
    props.platform = platform
  return props
}
