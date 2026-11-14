export interface AuthorProfile {
  name: string
  image?: string
  image96?: string
  image192?: string
}

export const victorLeduc: AuthorProfile = {
  name: 'Victor Leduc',
  image: '/victor-leduc.webp',
  image96: '/victor-leduc-96.webp',
  image192: '/victor-leduc-192.webp',
}

const mappedNames = new Set([
  'martin donadieu',
  'victor leduc',
])

export function resolveAuthor(name?: string): AuthorProfile {
  const key = (name || '').trim().toLowerCase()
  if (mappedNames.has(key))
    return victorLeduc
  const trimmed = (name || '').trim()
  return {
    name: trimmed || 'Captime',
  }
}

export function withResolvedAuthor<T extends { author?: string, author_url?: string }>(frontmatter: T): T & {
  author: string
  author_url?: string
  author_image?: string
} {
  const profile = resolveAuthor(frontmatter.author)
  if (!profile.image) {
    return {
      ...frontmatter,
      author: profile.name,
    }
  }
  return {
    ...frontmatter,
    author: profile.name,
    author_url: undefined,
    author_image: profile.image,
  }
}
