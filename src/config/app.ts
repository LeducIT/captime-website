import dayjs from 'dayjs'
import keys from '../../configs.json'
import { appDescription, appName } from '../constants/index'
import { parsePostDate } from '../services/blog'

function getRightKey(branch: string, keyname: 'base_domain'): string {
  if (branch === 'development') return keys[keyname].development
  else if (branch === 'local') return keys[keyname].local
  return keys[keyname].prod
}

const brand = 'Captime'
const blogTitle = `${brand} | CrossFit Timer Blog`
const blogDescription = 'CrossFit timer guides for AMRAP, EMOM, Tabata, For Time, and WOD pacing. Tips to run HIIT and gym workouts with Captime.'

function getUrl(branch = ''): string {
  if (branch === 'local') return `http://${getRightKey(branch, 'base_domain')}`
  else if (branch === 'development') return `https://${getRightKey(branch, 'base_domain')}`
  else return `https://${getRightKey('prod', 'base_domain')}`
}

function getApiUrl(branch = ''): string {
  if (branch === 'local') return `http://api.${getRightKey(branch, 'base_domain')}`
  else if (branch === 'development') return `https:///api.${getRightKey(branch, 'base_domain')}`
  else return `https:///api.${getRightKey('prod', 'base_domain')}`
}

export function baseDomain(branch = '') {
  if (branch) return getRightKey(branch, 'base_domain')
  else return getRightKey('prod', 'base_domain')
}

export function formatTime(s: string) {
  const d = dayjs(parsePostDate(s))
  return d.format('MMMM DD, YYYY')
}

export function useRuntimeConfig() {
  return {
    public: {
      brand,
      blog_title: blogTitle,
      blog_description: blogDescription,
      baseUrl: getUrl(import.meta.env.BRANCH),
      domain: baseDomain(),
      handler: 'captime',
    },
  }
}

const siteUrl = getUrl(import.meta.env.BRANCH)

export const publisherOrg = {
  '@type': 'Organization',
  name: brand,
  url: siteUrl,
  logo: {
    '@type': 'ImageObject',
    url: `${siteUrl}/icon.webp`,
  },
}

export const structuredData = JSON.stringify({
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': `${siteUrl}/#website`,
      url: siteUrl,
      name: appName,
      isPartOf: {
        '@id': `${siteUrl}/#website`,
      },
      publisher: {
        '@id': `${siteUrl}/#organization`,
      },
      datePublished: '2022-01-30T22:51:56+00:00',
      dateModified: new Date().toISOString(),
      description: appDescription,
      breadcrumb: {
        '@id': `${siteUrl}/#breadcrumb`,
      },
      inLanguage: 'en-US',
      potentialAction: [
        {
          '@type': 'ReadAction',
          target: [siteUrl],
        },
      ],
    },
    {
      '@type': 'Organization',
      '@id': `${siteUrl}/#organization`,
      ...publisherOrg,
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${siteUrl}/#breadcrumb`,
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          item: {
            '@type': 'WebPage',
            '@id': siteUrl,
            url: siteUrl,
            name: 'Home',
          },
        },
        {
          '@type': 'ListItem',
          position: 2,
          item: {
            '@type': 'WebPage',
            '@id': `${siteUrl}/blog/`,
            url: `${siteUrl}/blog/`,
            name: 'Blog',
          },
        },
      ],
    },
  ],
})

export function blogIndexStructuredData() {
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        '@id': `${siteUrl}/blog/#webpage`,
        url: `${siteUrl}/blog/`,
        name: blogTitle,
        description: blogDescription,
        isPartOf: {
          '@id': `${siteUrl}/#website`,
        },
        publisher: {
          '@id': `${siteUrl}/#organization`,
        },
        inLanguage: 'en-US',
        breadcrumb: {
          '@id': `${siteUrl}/blog/#breadcrumb`,
        },
      },
      {
        '@type': 'Organization',
        '@id': `${siteUrl}/#organization`,
        ...publisherOrg,
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${siteUrl}/blog/#breadcrumb`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            item: {
              '@type': 'WebPage',
              '@id': siteUrl,
              url: siteUrl,
              name: 'Home',
            },
          },
          {
            '@type': 'ListItem',
            position: 2,
            item: {
              '@type': 'WebPage',
              '@id': `${siteUrl}/blog/`,
              url: `${siteUrl}/blog/`,
              name: 'Blog',
            },
          },
        ],
      },
    ],
  })
}

// Keep the helper exported so existing imports do not break if a page used it.
export { getApiUrl }
