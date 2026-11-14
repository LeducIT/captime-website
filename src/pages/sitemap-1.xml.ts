import { sitemapPostsXml, xmlResponse } from '../services/seo'

export const prerender = true

export function GET() {
  return xmlResponse(sitemapPostsXml())
}
