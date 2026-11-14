export interface MyCustomParsedContent {
  slug: string
  title: string
  description: string
  author: string
  author_url?: string
  created_at: string
  updated_at?: string
  head_image: string
  head_image_alt?: string
  tag?: string
  published: boolean
  next_blog?: string
}

export function parsePostDate(value?: string): Date {
  if (!value)
    return new Date(0)
  const normalized = value.trim().replace(' ', 'T')
  const parsed = new Date(normalized)
  return Number.isNaN(parsed.getTime()) ? new Date(0) : parsed
}

export function isPublishedPost(post: { frontmatter: MyCustomParsedContent }): boolean {
  return Boolean(post.frontmatter.published)
}

export interface BlogHeading {
  depth: number
  slug: string
  text: string
}

export interface BlogPostModule {
  frontmatter: MyCustomParsedContent
  compiledContent: () => string | Promise<string>
  getHeadings: () => BlogHeading[]
}

export function loadBlogPosts(): BlogPostModule[] {
  return Object.values(import.meta.glob<BlogPostModule>('../content/blog/**/*.md', { eager: true }))
}
