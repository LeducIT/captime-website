<script setup lang="ts">
import { computed, ref } from 'vue'
import Blog from '../../components/Blog.vue'
import ModeChip from '../../components/ModeChip.vue'
import { useRuntimeConfig } from '../../config/app'
import { getPostMode, usedModes, type ModeName } from '../../services/modes'

const PAGE_SIZE = 12
const FEATURED_SLUG = 'amrap'

const config = useRuntimeConfig()

const props = defineProps<{
  Content?: Array<{ frontmatter: any }>
}>()

const posts = computed(() => props.Content || [])
const featured = computed(() => posts.value.find((article) => article.frontmatter.slug === FEATURED_SLUG))
const modes = computed(() => usedModes(posts.value.map((article) => article.frontmatter)))
const activeMode = ref<ModeName | ''>('')
const page = ref(1)

const filtered = computed(() => {
  return posts.value.filter((article) => {
    if (featured.value && article.frontmatter.slug === featured.value.frontmatter.slug)
      return false
    if (!activeMode.value)
      return true
    return getPostMode(article.frontmatter) === activeMode.value
  })
})

const pageCount = computed(() => Math.max(1, Math.ceil(filtered.value.length / PAGE_SIZE)))
const pageItems = computed(() => {
  const start = (page.value - 1) * PAGE_SIZE
  return filtered.value.slice(start, start + PAGE_SIZE)
})

function selectMode(mode: ModeName | '') {
  activeMode.value = mode
  page.value = 1
}

function goTo(next: number) {
  page.value = Math.min(pageCount.value, Math.max(1, next))
}
</script>

<template>
  <section class="py-10 sm:py-12 lg:py-20">
    <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
      <div class="max-w-2xl mx-auto text-center">
        <h1 class="text-3xl font-handel font-bold leading-tight text-white sm:text-4xl lg:text-5xl">Latest from the blog</h1>
        <h2 class="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-50">
          {{ config.public.blog_description }}
        </h2>
      </div>

      <article v-if="featured" class="max-w-4xl mx-auto mt-12 border-2 border-white p-6 sm:p-8">
        <p class="text-xs font-handel tracking-[0.25em] uppercase text-ruby-500">Featured WOD guide</p>
        <div class="mt-4 grid gap-6 lg:grid-cols-2 lg:items-center">
          <a :href="`/blog/${featured.frontmatter.slug}/`" class="block overflow-hidden">
            <img
              :src="featured.frontmatter.head_image || '/blog_meta.webp'"
              :alt="featured.frontmatter.head_image_alt || featured.frontmatter.title"
              class="object-cover w-full h-full"
              height="320"
              width="560"
              loading="eager"
              fetchpriority="high"
              decoding="async"
            >
          </a>
          <div class="text-left">
            <ModeChip :label="getPostMode(featured.frontmatter) || featured.frontmatter.tag" />
            <h2 class="mt-4 font-handel text-2xl text-white sm:text-3xl">
              <a :href="`/blog/${featured.frontmatter.slug}/`">{{ featured.frontmatter.title }}</a>
            </h2>
            <p class="mt-3 text-gray-300">
              {{ featured.frontmatter.description }}
            </p>
            <a
              :href="`/blog/${featured.frontmatter.slug}/`"
              class="inline-flex mt-6 items-center justify-center border border-white px-6 py-2 text-lg font-bold text-white rounded-xl hover:bg-white hover:text-black transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              Read the guide
            </a>
          </div>
        </div>
      </article>

      <div v-if="modes.length" class="flex flex-wrap items-center justify-center gap-3 mt-10">
        <button
          type="button"
          class="px-3 py-1 text-xs font-handel tracking-wide uppercase border"
          :class="activeMode ? 'border-white text-white bg-black' : 'border-ruby-500 bg-ruby-500 text-white'"
          @click="selectMode('')"
        >
          All
        </button>
        <button
          v-for="mode in modes"
          :key="mode"
          type="button"
          class="px-3 py-1 text-xs font-handel tracking-wide uppercase border"
          :class="activeMode === mode ? 'border-ruby-500 bg-ruby-500 text-white' : 'border-white text-white bg-black hover:bg-white hover:text-black'"
          @click="selectMode(mode)"
        >
          {{ mode }}
        </button>
      </div>

      <div class="grid max-w-md grid-cols-1 gap-6 mx-auto mt-8 lg:mt-12 lg:grid-cols-3 lg:max-w-full">
        <Blog
          v-for="article in pageItems"
          :key="article.frontmatter.slug"
          :tag="article.frontmatter.tag"
          :link="article.frontmatter.slug"
          :title="article.frontmatter.title"
          :date="article.frontmatter.created_at"
          :image="article.frontmatter.head_image"
          :description="article.frontmatter.head_image_alt || article.frontmatter.description"
        />
      </div>

      <div v-if="pageCount > 1" class="flex items-center justify-center gap-4 mt-10">
        <button
          type="button"
          class="px-4 py-2 text-sm font-bold text-white ring-1 ring-white/40 rounded-xl disabled:opacity-40 hover:bg-white hover:text-black transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
          :disabled="page === 1"
          @click="goTo(page - 1)"
        >
          Prev
        </button>
        <p class="text-sm text-gray-300">
          Page {{ page }} of {{ pageCount }}
        </p>
        <button
          type="button"
          class="px-4 py-2 text-sm font-bold text-white ring-1 ring-white/40 rounded-xl disabled:opacity-40 hover:bg-white hover:text-black transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
          :disabled="page === pageCount"
          @click="goTo(page + 1)"
        >
          Next
        </button>
      </div>
    </div>
  </section>
</template>
