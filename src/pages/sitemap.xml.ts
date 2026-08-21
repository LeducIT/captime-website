import { SitemapStream, streamToPromise } from 'sitemap'
import { loadBlogPosts } from '../services/blog'
import { useRuntimeConfig } from '../config/app'

export async function GET() {
  try {
    const config = useRuntimeConfig()
    const smStream = new SitemapStream({ hostname: config.public.baseUrl })
    smStream.write({ url: '/', changefreq: 'daily', priority: 1 })
    smStream.write({ url: '/blog/', changefreq: 'weekly', priority: 1 })
    const blogs = loadBlogPosts()
    blogs.forEach((article) => {
      smStream.write({
        url: `/blog/${article.frontmatter.slug}/`,
        changefreq: 'weekly',
        priority: 0.5,
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
