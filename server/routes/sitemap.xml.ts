import { SitemapStream, streamToPromise } from 'sitemap'
import { serverQueryContent } from '#content/server'

export default defineEventHandler(async (event) => {
  try {
    const config = useRuntimeConfig()
    const smStream = new SitemapStream({ hostname: config.baseUrl })

    smStream.write({ url: '/', changefreq: 'daily', priority: 1 })

    smStream.write({ url: '/blog', changefreq: 'daily', priority: 1 })

    const blogs = await serverQueryContent(event).where({ published: true }).find()

    blogs.forEach((article: any) => {
      smStream.write({
        url: `/blog/${article.slug}`,
        changefreq: 'daily',
        priority: 0.5,
      })
    })
    smStream.end()
    const data = await streamToPromise(smStream)
    event.res.setHeader('Content-Type', 'application/xml')
    return data.toString()
  }
  catch (e) {
    console.error(e)
    event.res.statusCode = 500
    return {}
  }
})
