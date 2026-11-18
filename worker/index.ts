import { campaignRedirectResponse } from '../src/lib/campaign'
import { sendGoRedirect } from '../src/lib/go-redirect'
import { proxyPostHog, type WorkerContext } from './posthog'

export default {
  async fetch(request: Request, _env: unknown, ctx: WorkerContext): Promise<Response> {
    const url = new URL(request.url)
    if (url.pathname === '/ingest' || url.pathname.startsWith('/ingest/'))
      return proxyPostHog(request, ctx)

    const redirect = campaignRedirectResponse(request)
    if (redirect) {
      if (redirect.status === 302)
        ctx.waitUntil(sendGoRedirect(request, redirect.headers.get('Location') || ''))
      return redirect
    }

    return new Response('Not found', { status: 404 })
  },
}
