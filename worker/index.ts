import { campaignRedirectResponse } from '../src/lib/campaign'

export default {
  async fetch(request: Request): Promise<Response> {
    const redirect = campaignRedirectResponse(request)
    if (redirect)
      return redirect

    return new Response('Not found', { status: 404 })
  },
}
