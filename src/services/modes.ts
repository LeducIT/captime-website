export const MODE_NAMES = ['AMRAP', 'EMOM', 'Tabata', 'For Time', 'Sally'] as const

export type ModeName = (typeof MODE_NAMES)[number]

export interface ModeLike {
  slug?: string
  title?: string
  tag?: string
}

export const MODE_GUIDE_SLUGS = new Set([
  'amrap',
  'explanation-of-emom-in-crossfit-for-beginners',
  'explanation-of-tabata-in-crossfit-for-beginners',
  'how-to-perform-murph-workout-and-variations-to-try',
])

const WHITEBOARDS: Record<ModeName, { time: string, cue: string }> = {
  AMRAP: { time: '20:00', cue: 'AS MANY ROUNDS AS POSSIBLE' },
  EMOM: { time: '12:00', cue: 'EVERY MINUTE ON THE MINUTE' },
  Tabata: { time: '04:00', cue: '20 ON / 10 OFF  x  8' },
  'For Time': { time: '60:00', cue: 'FOR TIME' },
  Sally: { time: '03:30', cue: 'SALLY UP  /  SALLY DOWN' },
}

export function getPostMode(post: ModeLike): ModeName | '' {
  const tag = (post.tag || '').trim().toLowerCase()
  if (tag === 'amrap')
    return 'AMRAP'
  if (tag === 'emom')
    return 'EMOM'
  if (tag === 'tabata')
    return 'Tabata'
  if (tag === 'for time')
    return 'For Time'
  if (tag === 'sally')
    return 'Sally'

  const hay = `${post.slug || ''} ${post.title || ''}`.toLowerCase()
  if (hay.includes('amrap'))
    return 'AMRAP'
  if (hay.includes('emom'))
    return 'EMOM'
  if (hay.includes('tabata'))
    return 'Tabata'
  if (hay.includes('for-time') || hay.includes('for time') || hay.includes('fortime'))
    return 'For Time'
  if (hay.includes('sally'))
    return 'Sally'
  if (hay.includes('murph'))
    return 'For Time'
  return ''
}

export function getRelatedKey(post: ModeLike): string {
  return getPostMode(post) || (post.tag || '').trim()
}

export function isModeGuide(slug?: string): boolean {
  return !!slug && MODE_GUIDE_SLUGS.has(slug)
}

export function getWhiteboard(mode: ModeName) {
  return WHITEBOARDS[mode]
}

export function modeChipClass(mode: string): string {
  switch (mode) {
    case 'AMRAP':
      return 'bg-ruby-500 text-white border-ruby-500'
    case 'EMOM':
      return 'bg-stoplight-500 text-black border-stoplight-500'
    case 'Tabata':
      return 'bg-cornflower-500 text-black border-cornflower-500'
    case 'For Time':
      return 'bg-white text-black border-white'
    case 'Sally':
      return 'border-stoplight-500 text-stoplight-500 bg-black'
    default:
      return 'bg-white text-black border-white'
  }
}

export function usedModes(posts: ModeLike[]): ModeName[] {
  return MODE_NAMES.filter(mode => posts.some(post => getPostMode(post) === mode))
}
