export const heroDemoWidths = [640, 960, 1280, 1600]
export const heroDemoSizes = '(max-width: 768px) 92vw, min(1600px, 90vw)'

export const heroPhotoWidths = [640, 960, 1280, 1920]
export const heroPhotoSizes = '100vw'

export function srcsetFor(name: string, widths: number[], ext: string): string {
  const max = widths[widths.length - 1]
  return widths
    .map((width) => {
      const suffix = width === max ? '' : `-${width}`
      return `/${name}${suffix}.${ext} ${width}w`
    })
    .join(', ')
}

export function decorateContentImages(html: string): string {
  return html.replace(/<img\b([^>]*)>/gi, (_match, attrs: string) => {
    let next = attrs
    if (!/\bloading\s*=/i.test(next))
      next += ' loading="lazy"'
    if (!/\bdecoding\s*=/i.test(next))
      next += ' decoding="async"'
    return `<img${next}>`
  })
}
