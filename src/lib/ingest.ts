import { posthogApiOriginHost, posthogAssetOriginHost } from '../config/posthog'

export interface IngestTarget {
  host: string
  pathWithSearch: string
  asset: boolean
}

export function ingestTarget(url: URL): IngestTarget | null {
  if (url.pathname !== '/ingest' && !url.pathname.startsWith('/ingest/'))
    return null

  const pathname = url.pathname.slice('/ingest'.length) || '/'
  const asset = pathname.startsWith('/static/') || pathname.startsWith('/array/')
  return {
    host: asset ? posthogAssetOriginHost : posthogApiOriginHost,
    pathWithSearch: `${pathname}${url.search}`,
    asset,
  }
}
