import { posthogApiOriginHost, posthogAssetOriginHost } from '../src/config/posthog'
import { isLoopbackHost } from '../src/lib/go-redirect'
import { ingestTarget } from '../src/lib/ingest'

export interface WorkerContext {
  waitUntil(promise: Promise<unknown>): void
}

function assetCache(): Cache | null {
  const storage = (globalThis as { caches?: { default?: Cache } }).caches
  return storage?.default ?? null
}

async function retrieveAsset(request: Request, pathWithSearch: string, ctx: WorkerContext): Promise<Response> {
  const cache = assetCache()
  if (cache) {
    try {
      const cached = await cache.match(request)
      if (cached)
        return cached
    }
    catch {
      // The Cache API is not required for the proxy to answer.
    }
  }

  const response = await fetch(`https://${posthogAssetOriginHost}${pathWithSearch}`)
  if (cache)
    ctx.waitUntil(cache.put(request, response.clone()).then(() => undefined, () => undefined))
  return response
}

async function forwardRequest(request: Request, pathWithSearch: string): Promise<Response> {
  const ip = request.headers.get('CF-Connecting-IP') || ''
  const originHeaders = new Headers(request.headers)
  originHeaders.delete('cookie')
  originHeaders.delete('host')
  if (!/^Bearer ph[csx]_/.test(originHeaders.get('authorization') ?? ''))
    originHeaders.delete('authorization')
  // Forward the visitor IP so PostHog can attach a location. PostHog drops the IP after that.
  originHeaders.set('X-Forwarded-For', ip)

  const hasBody = request.method !== 'GET' && request.method !== 'HEAD'
  const originRequest = new Request(`https://${posthogApiOriginHost}${pathWithSearch}`, {
    method: request.method,
    headers: originHeaders,
    body: hasBody ? await request.arrayBuffer() : undefined,
    redirect: request.redirect,
  })
  return fetch(originRequest)
}

export async function proxyPostHog(request: Request, ctx: WorkerContext): Promise<Response> {
  const url = new URL(request.url)
  const target = ingestTarget(url)
  if (!target)
    return new Response('Not found', { status: 404 })

  // Local and CI traffic must not write events into the production project.
  if (isLoopbackHost(url.hostname) && request.method !== 'GET' && request.method !== 'HEAD') {
    return new Response('{"status":1}', {
      status: 200,
      headers: { 'content-type': 'application/json; charset=utf-8' },
    })
  }

  if (target.asset)
    return retrieveAsset(request, target.pathWithSearch, ctx)
  return forwardRequest(request, target.pathWithSearch)
}
