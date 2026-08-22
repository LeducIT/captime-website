import { SitemapStream, streamToPromise } from 'sitemap'
import { isPublishedPost, loadBlogPosts, parsePostDate } from '../services/blog'
import { useRuntimeConfig } from '../config/app'

export async function GET() {
  try {
    const config = useRuntimeConfig()
    const smStream = new SitemapStream({ hostname: config.public.baseUrl })
    smStream.write({ url: '/', changefreq: 'daily', priority: 1, lastmod: new Date() })
    smStream.write({ url: '/blog/', changefreq: 'weekly', priority: 1, lastmod: new Date() })
    const blogs = loadBlogPosts().filter(isPublishedPost)
    blogs.forEach((article) => {
      const lastmod = parsePostDate(article.frontmatter.updated_at || article.frontmatter.created_at)
      smStream.write({
        url: `/blog/${article.frontmatter.slug}/`,
        changefreq: 'weekly',
        priority: 0.5,
        lastmod,
      })
    })
    smStream.end()
    const sitemap = await streamToPromise(smStream)
    return new Response(sitemap, {
      status: 200,
      headers: {
        'Content-Type': 'text/xml',
      },
    })
  }
  catch (e) {
    console.log(e)
    return new Response(null, {
      status: 404,
      headers: {
        'Content-Type': 'text/html',
      },
    })
  }
}
