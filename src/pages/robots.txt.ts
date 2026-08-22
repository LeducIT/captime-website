import { useRuntimeConfig } from '../config/app'

export function GET() {
  try {
    const config = useRuntimeConfig()
    const data = `User-agent: *\nAllow: /\nSitemap: ${config.public.baseUrl}/sitemap.xml\n`
    return new Response(data, {
      status: 200,
      headers: {
        'Content-Type': 'text/plain',
      },
    })
  }
  catch (e) {
    console.error(e)
    return new Response(null, {
      status: 500,
      headers: {
        'Content-Type': 'text/plain',
      },
    })
  }
}
