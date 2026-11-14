<script setup lang="ts">
import { computed } from 'vue'
import Blog from '../../components/Blog.vue'
import ModeChip from '../../components/ModeChip.vue'
import ArticleCta from '../../components/ArticleCta.vue'
import WodWhiteboard from '../../components/WodWhiteboard.vue'
import { formatTime } from '../../config/app'
import { resolveAuthor } from '../../lib/authors'
import { getPostMode, isModeGuide } from '../../services/modes'

const props = defineProps<{
  Content?: any
  toc?: any[]
  slug?: string
  title?: string
  description?: string
  author?: string
  author_url?: string
  author_image?: string
  created_at?: string
  updated_at?: string
  head_image?: string
  head_image_alt?: string
  tag?: string
  published?: boolean
  next_blog?: string
  related?: any
}>()

const mode = computed(() => getPostMode({
  slug: props.slug,
  title: props.title,
  tag: props.tag,
}))

const chip = computed(() => mode.value || (props.tag || '').trim())
const showBoard = computed(() => Boolean(mode.value && isModeGuide(props.slug)))
const imageSrc = computed(() => props.head_image || '/blog_meta.webp')
const authorProfile = computed(() => resolveAuthor(props.author))
const imageAlt = computed(() => props.head_image_alt || props.title || 'Captime blog')
const headings = computed(() => (props.toc || []).filter((item: { depth: number }) => item.depth >= 2))

const parts = computed(() => {
  const html = typeof props.Content === 'string' ? props.Content : ''
  const match = html.match(/<\/h2>/i)
  if (!match || match.index === undefined)
    return { lead: html, rest: '' }
  const splitAt = match.index + match[0].length
  return {
    lead: html.slice(0, splitAt),
    rest: html.slice(splitAt),
  }
})
</script>

<template>
  <main class="text-white">
    <div class="relative mx-auto max-w-[65ch] md:px-4">
      <div class="relative aspect-[4/3] overflow-hidden bg-black md:rounded-lg">
        <img
          class="absolute inset-0 h-full w-full object-cover"
          :src="imageSrc"
          loading="eager"
          fetchpriority="high"
          decoding="async"
          height="486"
          width="864"
          :alt="imageAlt"
          :title="imageAlt"
        >
        <div class="pointer-events-none absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-b from-transparent via-black/80 to-black" />
        <div v-if="chip" class="absolute left-4 top-4 z-1">
          <ModeChip :label="chip" />
        </div>
        <div class="absolute inset-x-0 bottom-0 z-1 px-4 pb-4">
          <h1 class="text-left text-2xl font-handel text-white sm:text-3xl lg:text-4xl">
            {{ title }}
          </h1>
          <p class="mt-2 flex items-center gap-2 text-xs leading-none text-gray-200 sm:text-sm">
            <img
              v-if="authorProfile.image"
              :src="authorProfile.image96 || authorProfile.image"
              alt=""
              width="28"
              height="28"
              class="h-7 w-7 shrink-0 rounded-full object-cover"
              loading="eager"
              decoding="async"
            >
            <span class="min-w-0">
              <span>{{ authorProfile.name || author }}</span>
              <span v-if="created_at"> · {{ formatTime(created_at) }}</span>
            </span>
          </p>
        </div>
      </div>
    </div>

    <div class="mx-auto max-w-6xl px-4 xl:flex xl:items-start xl:gap-10">
      <nav
        v-if="headings.length"
        class="hidden xl:flex flex-col sticky top-24 w-[280px] shrink-0 rounded text-left bg-white/10 p-5"
        aria-label="Table of contents"
      >
        <span class="text-lg border-b pb-1 border-gray-600">Table Of Contents</span>
        <a
          v-for="item in headings"
          :key="item.slug"
          :href="`#${item.slug}`"
          class="truncate block mt-2 text-gray-400 hover:text-gray-200"
          :style="{ paddingLeft: Math.max(0, (item.depth - 2) * 0.75) + 'rem' }"
        >
          {{ item.text }}
        </a>
      </nav>

      <div class="min-w-0 flex-1 max-w-[65ch] mx-auto">
        <p class="py-5 text-left text-gray-200">
          {{ description }}
        </p>

        <WodWhiteboard v-if="showBoard && mode" :mode="mode" />

        <div v-if="headings.length" class="flex flex-col xl:hidden mx-auto rounded text-left">
          <div class="flex flex-col p-4 rounded bg-white/10">
            <span class="text-lg border-b pb-1 border-gray-600">Table Of Contents</span>
            <a
              v-for="item in headings"
              :key="`m-${item.slug}`"
              :href="`#${item.slug}`"
              class="truncate block mt-2 text-gray-400 hover:text-gray-200"
              :style="{ paddingLeft: Math.max(0, item.depth - 2) + 'rem' }"
            >
              {{ item.text }}
            </a>
          </div>
        </div>

        <article v-if="props.Content" class="mx-auto text-left text-white prose max-w-[65ch] pb-4">
          <div v-html="parts.lead" />
          <ArticleCta v-if="parts.rest" :mode="mode" />
          <div v-html="parts.rest" />
          <ArticleCta :mode="mode" />
        </article>
      </div>
    </div>

    <section v-if="related?.length" class="py-12 sm:py-16 lg:py-20">
      <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div class="max-w-xl mx-auto text-center">
          <h2 class="font-handel text-3xl tracking-tight text-white sm:text-4xl">
            More {{ mode || tag || 'WOD' }} reads
          </h2>
          <p class="mt-4 text-base font-normal leading-7 text-gray-400 lg:text-lg">
            Stay on this timer mode. Same clock, next guide.
          </p>
        </div>
        <div class="grid max-w-md grid-cols-1 gap-5 mx-auto mt-12 xl:gap-6 lg:grid-cols-3 lg:max-w-none sm:mt-16">
          <Blog
            v-for="article in related"
            :key="article.frontmatter.slug"
            :tag="article.frontmatter.tag"
            :link="article.frontmatter.slug"
            :title="article.frontmatter.title"
            :date="article.frontmatter.created_at"
            :image="article.frontmatter.head_image"
            :description="article.frontmatter.head_image_alt || article.frontmatter.description"
          />
        </div>
        <div class="mt-12 text-center">
          <a
            href="/blog/"
            class="inline-flex items-center text-sm font-semibold text-white transition-all duration-200 group hover:text-gray-200 hover:underline"
          >
            See all from our blog
            <svg class="w-5 h-5 ml-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  </main>
</template>
