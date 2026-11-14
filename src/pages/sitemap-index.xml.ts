import { sitemapIndexXml, xmlResponse } from '../services/seo'

export const prerender = true

export function GET() {
  return xmlResponse(sitemapIndexXml())
}
