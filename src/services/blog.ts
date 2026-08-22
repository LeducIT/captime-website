export interface MyCustomParsedContent {
  slug: string
  title: string
  description: string
  author: string
  author_url: string
  created_at: string
  updated_at: string
  head_image: string
  head_image_alt: string
  tag: string
  published: boolean
  next_blog: string
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
