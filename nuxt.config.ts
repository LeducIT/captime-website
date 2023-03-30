import { defineNuxtConfig } from 'nuxt/config'
import keys from './configs.json'

const getRightKey = (branch: string, keyname: 'base_domain'): string => {
  if (branch === 'development')
    return keys[keyname].development
  else if (branch === 'local')
    return keys[keyname].local
  return keys[keyname].prod
}

const getUrl = (branch = ''): string => {
  if (branch === 'local')
    return `http://${getRightKey(branch, 'base_domain')}`
  else if (branch === 'development')
    return `https://${getRightKey(branch, 'base_domain')}`
  else
    return `https://${getRightKey('prod', 'base_domain')}`
}

const baseDomain = (branch = '') => {
  if (branch)
    return getRightKey(branch, 'base_domain')
  else
    return getRightKey('prod', 'base_domain')
}
const name = 'Captime - Crossfit WOD Timer'
const description = 'All workout timers for CrossFit and high-intensity interval training. App with intuitive interface enables you to select HIIT, AMRAP, TABATA, EMOM, and more.'
// <script type="application/ld+json" class="yoast-schema-graph">
const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': `${getUrl(process.env.BRANCH)}/#website`,
      'url': getUrl(process.env.BRANCH),
      'name': name,
      'isPartOf': {
        '@id': `${getUrl(process.env.BRANCH)}/#website`,
      },
      'datePublished': '2022-01-30T22:51:56+00:00',
      'dateModified': new Date().toISOString(),
      'description': description,
      'breadcrumb': {
        '@id': `${getUrl(process.env.BRANCH)}/#breadcrumb`,
      },
      'inLanguage': 'en-US',
      'potentialAction': [
        {
          '@type': 'ReadAction',
          'target': [
            getUrl(process.env.BRANCH),
          ],
        },
      ],
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${getUrl(process.env.BRANCH)}#breadcrumb`,
      'itemListElement': [
        {
          '@type': 'ListItem',
          'position': 1,
          'item': {
            '@type': 'WebPage',
            '@id': getUrl(process.env.BRANCH),
            'url': getUrl(process.env.BRANCH),
            'name': 'Home',
          },
        },
        {
          '@type': 'ListItem',
          'position': 2,
          'item': {
            '@type': 'WebPage',
            '@id': `${getUrl(process.env.BRANCH)}/blog`,
            'url': `${getUrl(process.env.BRANCH)}/blog`,
            'name': 'Blog',
          },
        },
      ],
    },
  ],
}
// </script>
// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  ssr: true,
  runtimeConfig: {
    public: {
      baseUrl: getUrl(process.env.BRANCH),
      domain: baseDomain(),
      handler: 'captime',
    },
  },
  modules: [
    '@nuxt/content',
    ['nuxt-jsonld', { disableOptionsAPI: true }],
    '@unocss/nuxt',
  ],
  nitro: {
    preset: 'netlify-edge',
    prerender: {
      routes: ['/sitemap.xml', '/robots.txt'],
    },
  },
  experimental: {
    reactivityTransform: true,
    viteNode: false,
  },
  unocss: {
    preflight: true,
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
      },
      title: name,
      script: [
        {
          'src': 'https://pls.digitalshift-ee.workers.dev/js/script.js',
          'data-api': 'https://pls.digitalshift-ee.workers.dev/api/event',
          'data-domain': 'captime-web.app',
          'async': true,
          'defer': true,
        },
        {
          hid: 'seo-schema-graph',
          type: 'application/ld+json',
          children: JSON.stringify(structuredData),
        },
      ],
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'og:type', property: 'og:type', content: 'website' },
        {
          hid: 'keywords',
          property: 'keywords',
          content: 'crossfit, AMRAP, TABATA, HIIT, EMOM, SALLY, WOD, TIMER, INTERVAL, FOR TIME, FIGHT GONE BAD, ROXANNE',
        },
        {
          hid: 'title',
          name: 'title',
          content: name,
        },
        {
          hid: 'description',
          name: 'description',
          content: description,
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: name,
        },
        { hid: 'theme-color', name: 'theme-color', content: '#ff2222' },
        { hid: 'og:type', property: 'og:type', content: 'website' },
        {
          hid: 'apple-mobile-web-app-title',
          name: 'apple-mobile-web-app-title',
          content: baseDomain(),
        },
        { hid: 'og:locale', property: 'og:locale', content: 'en_EN' },
        {
          hid: 'og:site_name',
          property: 'og:site_name',
          content: baseDomain(),
        },
        {
          hid: 'og:article:author',
          property: 'og:article:author',
          content: 'Martin DONADIEU',
        },
        {
          hid: 'twitter:app:id:iphone',
          property: 'twitter:app:id:iphone',
          content: name,
        },
        {
          hid: 'twitter:app:id:googleplay',
          property: 'twitter:app:id:googleplay',
          content: 'ee.forgr.captime',
        },
        {
          hid: 'twitter:app:name:iphone',
          property: 'twitter:app:name:iphone',
          content: name,
        },
        {
          hid: 'twitter:app:name:googleplay',
          property: 'twitter:app:name:googleplay',
          content: 'ee.forgr.captime',
        },
        {
          hid: 'twitter:creator',
          property: 'twitter:creator',
          content: '@martindonadieu',
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: description,
        },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ],
    },
  },
  build: {
    transpile: ['@headlessui/vue'],
  },
  content: {
    // https://content.nuxtjs.org/api/configuration
  },
  css: [
    '~/assets/css/global.css',
  ],
})
