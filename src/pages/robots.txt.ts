import { robotsTxt } from '../services/seo'

export const prerender = true

export function GET() {
  return new Response(robotsTxt(), {
    status: 200,
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  })
}
