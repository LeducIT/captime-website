import { existsSync, lstatSync, readFileSync, renameSync, rmSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const dist = join(dirname(fileURLToPath(import.meta.url)), '..', 'dist')

const files = [
  'sitemap.xml',
  'sitemap-index.xml',
  'sitemap-0.xml',
  'sitemap-1.xml',
  'robots.txt',
]

function flatten(name) {
  const path = join(dist, name)
  if (!existsSync(path))
    throw new Error(`Missing SEO file after build: dist/${name}`)

  const stat = lstatSync(path)
  if (stat.isDirectory()) {
    const index = join(path, 'index.html')
    if (!existsSync(index))
      throw new Error(`SEO path dist/${name} is a directory without index.html`)
    const tmp = `${path}.tmp`
    renameSync(index, tmp)
    rmSync(path, { recursive: true, force: true })
    renameSync(tmp, path)
  }
}

for (const name of files)
  flatten(name)

const indexXml = readFileSync(join(dist, 'sitemap-index.xml'), 'utf8')
const pagesXml = readFileSync(join(dist, 'sitemap-0.xml'), 'utf8')
const postsXml = readFileSync(join(dist, 'sitemap-1.xml'), 'utf8')
const sitemapXml = readFileSync(join(dist, 'sitemap.xml'), 'utf8')
const robots = readFileSync(join(dist, 'robots.txt'), 'utf8')

if (!indexXml.includes('<sitemapindex') || !sitemapXml.includes('<sitemapindex'))
  throw new Error('sitemap-index.xml / sitemap.xml must be a sitemap index')
if (!pagesXml.includes('<urlset') || !postsXml.includes('<urlset'))
  throw new Error('Child sitemaps must be urlset documents')
if (indexXml.includes('<html') || pagesXml.includes('<html') || postsXml.includes('<html'))
  throw new Error('Sitemap files were emitted as HTML')
if (!robots.includes('Sitemap: https://captime.app/sitemap-index.xml'))
  throw new Error('robots.txt must point at https://captime.app/sitemap-index.xml')

console.log('Flattened sitemap-index.xml, child sitemaps, and robots.txt')
