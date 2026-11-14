import { appDescription, appName, appStoreUrl, playStoreUrl } from '../constants'
import { useRuntimeConfig } from '../config/app'
import { isPublishedPost, loadBlogPosts, parsePostDate, type MyCustomParsedContent } from './blog'

export function siteOrigin(): string {
  return useRuntimeConfig().public.baseUrl.replace(/\/$/, '')
}

export function canonicalUrl(path = '/'): string {
  const origin = siteOrigin()
  if (!path || path === '/')
    return `${origin}/`
  const pathname = path.startsWith('/') ? path : `/${path}`
  if (pathname.includes('.') && !pathname.endsWith('/'))
    return `${origin}${pathname}`
  return `${origin}${pathname.endsWith('/') ? pathname : `${pathname}/`}`
}

export function pageMeta(path: string, title: string, description: string, extra: Record<string, unknown> = {}) {
  const canonical = canonicalUrl(path)
  return {
    title,
    description,
    canonical,
    url: canonical,
    ...extra,
  }
}

export function isCanonicalBlogSlug(slug?: string): boolean {
  return typeof slug === 'string' && /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)
}

export function stripLeadingH1(html: string): string {
  return html.replace(/<h1\b[^>]*>[\s\S]*?<\/h1>/i, '').trimStart()
}

export function xmlEscape(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

export interface SitemapUrl {
  path: string
  lastmod?: Date
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'
  priority?: number
}

export function staticIndexablePages(): SitemapUrl[] {
  return [
    { path: '/', changefreq: 'weekly', priority: 1 },
    { path: '/download/', changefreq: 'weekly', priority: 0.8 },
    { path: '/blog/', changefreq: 'weekly', priority: 0.9 },
  ]
}

export function publishedCanonicalPosts() {
  return loadBlogPosts()
    .filter(isPublishedPost)
    .filter(post => isCanonicalBlogSlug(post.frontmatter.slug))
}

export function blogSitemapPages(): SitemapUrl[] {
  return publishedCanonicalPosts().map((article) => {
    const lastmod = parsePostDate(article.frontmatter.updated_at || article.frontmatter.created_at)
    return {
      path: `/blog/${article.frontmatter.slug}/`,
      changefreq: 'weekly' as const,
      priority: 0.5,
      lastmod,
    }
  })
}

function urlsetXml(entries: SitemapUrl[]): string {
  const origin = siteOrigin()
  const urls = entries.map((entry) => {
    const loc = canonicalUrl(entry.path)
    if (!loc.startsWith(origin))
      throw new Error(`Sitemap loc is not on ${origin}: ${loc}`)
    const lastmod = entry.lastmod && !Number.isNaN(entry.lastmod.getTime())
      ? `\n    <lastmod>${entry.lastmod.toISOString()}</lastmod>`
      : ''
    const changefreq = entry.changefreq ? `\n    <changefreq>${entry.changefreq}</changefreq>` : ''
    const priority = typeof entry.priority === 'number' ? `\n    <priority>${entry.priority.toFixed(1)}</priority>` : ''
    return `  <url>\n    <loc>${xmlEscape(loc)}</loc>${lastmod}${changefreq}${priority}\n  </url>`
  })
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join('\n')}\n</urlset>\n`
}

export function sitemapIndexXml(): string {
  const origin = siteOrigin()
  const children = ['/sitemap-0.xml', '/sitemap-1.xml']
  const items = children.map(path => `  <sitemap>\n    <loc>${xmlEscape(`${origin}${path}`)}</loc>\n  </sitemap>`).join('\n')
  return `<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${items}\n</sitemapindex>\n`
}

export function sitemapPagesXml(): string {
  return urlsetXml(staticIndexablePages())
}

export function sitemapPostsXml(): string {
  return urlsetXml(blogSitemapPages())
}

export function robotsTxt(): string {
  return `User-agent: *\nAllow: /\nSitemap: ${siteOrigin()}/sitemap-index.xml\n`
}

export function xmlResponse(body: string): Response {
  return new Response(body, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  })
}

function organizationNode() {
  const origin = siteOrigin()
  return {
    '@type': 'Organization',
    '@id': `${origin}/#organization`,
    name: useRuntimeConfig().public.brand,
    url: origin,
    logo: {
      '@type': 'ImageObject',
      url: `${origin}/icon.webp`,
    },
  }
}

function softwareApplicationNode() {
  const origin = siteOrigin()
  return {
    '@type': 'SoftwareApplication',
    '@id': `${origin}/#app`,
    name: 'Captime',
    applicationCategory: 'HealthApplication',
    operatingSystem: 'iOS, Android',
    description: appDescription,
    image: `${origin}/icon.webp`,
    url: `${origin}/`,
    downloadUrl: canonicalUrl('/download/'),
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    author: {
      '@id': `${origin}/#organization`,
    },
    publisher: {
      '@id': `${origin}/#organization`,
    },
    sameAs: [appStoreUrl, playStoreUrl],
  }
}

const homeFaqs = [
  {
    question: 'Where get the app?',
    answer: 'You can get Captime free on the Apple App Store for iPhone. And in Google Play for Android.',
  },
  {
    question: 'Where use the app?',
    answer: 'Captime is perfect for workouts at your home gym or garage gym. However the app is also great for workouts outside or at a regular gym.',
  },
  {
    question: 'What is a WOD?',
    answer: 'WOD stands for Workout of the day and is a word often used in CrossFit gyms. Most gyms program a different workout each day. For most athletes a WOD is a single workout, such as Fran, Cindy, or Murph.',
  },
  {
    question: 'What is AMRAP, EMOM and TABATA?',
    answer: 'AMRAP is as many rounds or repetitions as possible in a time cap. EMOM is every minute on the minute. Tabata is usually 20 seconds of work and 10 seconds of rest, repeated for 4 minutes. For Time means complete the work as fast as you can.',
  },
]

export function homeStructuredData() {
  const origin = siteOrigin()
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${origin}/#website`,
        url: `${origin}/`,
        name: appName,
        description: appDescription,
        inLanguage: 'en',
        publisher: {
          '@id': `${origin}/#organization`,
        },
      },
      {
        '@type': 'WebPage',
        '@id': `${origin}/#webpage`,
        url: `${origin}/`,
        name: 'Captime | CrossFit Timer',
        description: 'The Captime app offers a variety of workout timers for common CrossFit and high-intensity interval training workouts.',
        isPartOf: {
          '@id': `${origin}/#website`,
        },
        about: {
          '@id': `${origin}/#app`,
        },
        publisher: {
          '@id': `${origin}/#organization`,
        },
        inLanguage: 'en',
      },
      organizationNode(),
      softwareApplicationNode(),
      {
        '@type': 'FAQPage',
        '@id': `${origin}/#faq`,
        mainEntity: homeFaqs.map(item => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer,
          },
        })),
      },
    ],
  })
}

export function webPageStructuredData(path: string, title: string, description: string) {
  const origin = siteOrigin()
  const url = canonicalUrl(path)
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${url}#webpage`,
        url,
        name: title,
        description,
        isPartOf: {
          '@id': `${origin}/#website`,
        },
        publisher: {
          '@id': `${origin}/#organization`,
        },
        inLanguage: 'en',
      },
      organizationNode(),
    ],
  })
}

export function articleStructuredData(post: MyCustomParsedContent, image: string) {
  const origin = siteOrigin()
  const canonical = canonicalUrl(`/blog/${post.slug}/`)
  const datePublished = parsePostDate(post.created_at).toISOString()
  const dateModified = parsePostDate(post.updated_at || post.created_at).toISOString()
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['BlogPosting', 'Article'],
        '@id': `${canonical}#article`,
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': canonical,
        },
        headline: post.title,
        description: post.description,
        image: [image],
        datePublished,
        dateModified,
        inLanguage: 'en',
        author: {
          '@type': 'Person',
          name: post.author || 'Captime',
          url: post.author_url || origin,
        },
        publisher: {
          '@id': `${origin}/#organization`,
        },
      },
      organizationNode(),
      {
        '@type': 'BreadcrumbList',
        '@id': `${canonical}#breadcrumb`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: `${origin}/`,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Blog',
            item: canonicalUrl('/blog/'),
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: post.title,
            item: canonical,
          },
        ],
      },
    ],
  })
}

export const defaultStructuredData = () => JSON.stringify({
  '@context': 'https://schema.org',
  '@graph': [organizationNode()],
})
