import { defineConfig, presetAttributify, presetIcons, presetTypography, presetUno, presetWebFonts, transformerDirectives, transformerVariantGroup } from 'unocss'

const uno = presetUno()
function getColor(name: string, weight: string): string {
  return (uno?.theme?.colors as Record<string, Record<string, string>>)?.[name]?.[weight] || '#fff'
}
export default defineConfig({
  shortcuts: [
    {
      'btn-cta': 'inline-flex items-center justify-center gap-x-1 rounded-xl bg-ruby-700 font-bold text-white no-underline leading-none transition-colors duration-150 hover:bg-ruby-800 active:bg-ruby-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black',
      'btn-cta-md': 'btn-cta h-12 min-h-12 px-7 text-lg sm:h-[52px]',
      'btn-cta-sm': 'btn-cta h-10 min-h-10 px-5 text-sm',
      'store-badge-box': 'inline-flex h-12 w-[160px] shrink-0 items-center justify-center overflow-hidden rounded-[5px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black',
      'store-badge': 'h-12 w-[160px] object-contain object-center',
      'card-dark': 'flex h-full flex-col rounded-2xl bg-[#151515] ring-1 ring-white/10 px-8 py-12 space-y-6 text-center',
    },
  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
    }),
    presetTypography(),
    presetWebFonts({
      provider: 'none',
      fonts: {
        alarm: 'Alarm_Clock',
        handel: 'Handel_Gothic',
      },
    }),
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
  theme: {
    fontSize: {
      tiny: '.4rem',
    },
    typography: {
      DEFAULT: {
        css: {
          maxWidth: '65ch',
          color: 'inherit',
          a: {
            color: 'inherit',
            opacity: 0.75,
            fontWeight: '500',
            textDecoration: 'underline',
            '&:hover': {
              opacity: 1,
              color: getColor('teal', '600') || '#fff',
            },
          },
          b: { color: 'inherit' },
          strong: { color: 'inherit' },
          em: { color: 'inherit' },
          h1: { color: 'inherit' },
          h2: { color: 'inherit' },
          h3: { color: 'inherit' },
          h4: { color: 'inherit' },
          code: { color: 'inherit' },
        },
      },
    },
    screens: {
      vtab: { raw: '(min-height: 361px)' },
      vix: { raw: '(min-height: 812px)' },
      vip10: { raw: '(min-height: 1024px)' },
      vip12: { raw: '(min-height: 1112px)' },
      tab: '361px',
      iv: '402px',
      ise: '667px',
      i8: '736px',
      i8p: '736px',
      ix: '812px',
      ip10: '1024px',
      ip12: '1112px',
      mbp: '1440px',
      '4xl': '1920px',
    },
    colors: {
      ruby: {
        50: '#ff5454',
        100: '#ff4a4a',
        200: '#ff4040',
        300: '#ff3636',
        400: '#ff2c2c',
        500: '#ff2222',
        600: '#f51818',
        700: '#eb0e0e',
        800: '#e10404',
        900: '#d70000',
      },
      mist: {
        50: '#c4c6ce',
        100: '#babcc4',
        200: '#b0b2ba',
        300: '#a6a8b0',
        400: '#9c9ea6',
        500: '#92949c',
        600: '#888a92',
        700: '#7e8088',
        800: '#74767e',
        900: '#6a6c74',
      },
      stoplight: {
        50: '#74ff81',
        100: '#6aff77',
        200: '#60ff6d',
        300: '#56ff63',
        400: '#4cf959',
        500: '#42ef4f',
        600: '#38e545',
        700: '#2edb3b',
        800: '#24d131',
        900: '#1ac727',
      },
      cornflower: {
        50: '#7ccdff',
        100: '#72c3ff',
        200: '#68b9ff',
        300: '#5eafff',
        400: '#54a5ff',
        500: '#4a9bff',
        600: '#4091f5',
        700: '#3687eb',
        800: '#2c7de1',
        900: '#2273d7',
      },
    },
    zIndex: {
      60: '60',
    },
  },
})
