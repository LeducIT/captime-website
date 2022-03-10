<script setup lang="ts">
import { useRouter } from 'vue-router'
import type { Frontmatter } from '~/services/blog'
import { randomBlog, stringToDate } from '~/services/blog'

const router = useRouter()

const frontmatter: Frontmatter = router.currentRoute.value.meta.frontmatter as any
const random = randomBlog(router.currentRoute.value.path)
if (!frontmatter.published) {
  useHead({
    meta: [
      { name: 'robots', content: 'noindex, nofollow' },
    ],
  })
}
</script>
<template>
  <main class="text-center text-gray-700 dark:text-gray-200">
    <Header />
    <!-- <div class="relative py-16 overflow-hidden">
      <div class="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
        <div class="relative h-full text-lg max-w-prose mx-auto" aria-hidden="true">
          <svg class="absolute top-12 left-full transform translate-x-32" width="404" height="384" fill="none" viewBox="0 0 404 384">
            <defs>
              <pattern id="74b3fd99-0a6f-4271-bef2-e80eeafdf357" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="404" height="384" fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)" />
          </svg>
          <svg class="absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-32" width="404" height="384" fill="none" viewBox="0 0 404 384">
            <defs>
              <pattern id="f210dbf6-a58d-4871-961e-36d5016a0f49" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="404" height="384" fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)" />
          </svg>
          <svg class="absolute bottom-12 left-full transform translate-x-32" width="404" height="384" fill="none" viewBox="0 0 404 384">
            <defs>
              <pattern id="d3eb07ae-5182-43e6-857d-35c643af9034" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="404" height="384" fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)" />
          </svg>
        </div>
      </div>
    </div> -->
    <div class="relative lg:pt-10 pb-4 lg:max-w-1/2 mx-auto">
      <div class="block aspect-w-4 aspect-h-3">
        <img class="object-cover w-full h-full lg:rounded-lg" :src="frontmatter.head_image" :alt="'blog illustration ' + frontmatter.title">
      </div>

      <div class="absolute top-4 left-4 lg:top-15 lg:left-10">
        <span class="px-4 py-2 text-xs font-semibold tracking-widest text-gray-900 uppercase bg-white rounded-full"> {{ frontmatter.tag }} </span>
      </div>
    </div>
    <span class="block mt-6 text-sm font-semibold tracking-widest text-gray-500 uppercase"> {{ stringToDate(frontmatter.date) }} </span>

    <h1 class="py-5 text-3xl lg:text-4xl lg:max-w-1/2 px-4 font-800 mx-auto">
      {{ frontmatter.title }}
    </h1>
    <p class="py-5 px-4 lg:max-w-1/2 mx-auto text-left">
      {{ frontmatter.description }}
    </p>
    <router-view class="pb-4 px-4 lg:max-w-1/2" />
    <a :href="random.path" class="sm:flex py-8 lg:max-w-1/2 mx-auto lg:my-10 bg-true-gray-800 lg:rounded-lg">
      <div class="relative mx-4 flex-shrink-0">
        <div :title="random.meta.frontmatter.title" class="block aspect-w-4 aspect-h-3">
          <img class="object-cover w-full sm:w-52 h-full rounded-lg" :src="random.meta.frontmatter.head_image" :alt="'blog illustration ' + random.meta.frontmatter.title">
        </div>

        <div class="absolute top-2 left-2">
          <span class="px-4 py-2 text-tiny font-semibold tracking-widest text-gray-900 uppercase bg-white rounded-full"> {{ random.meta.frontmatter.tag }} </span>
        </div>
      </div>
      <div class="px-4 pt-2 sm:pt-0 text-left">
        <p class="text-lg font-bold">
          {{ random.meta.frontmatter.title }}
        </p>
        <span class="block mt-3 text-sm font-semibold tracking-widest text-gray-500 uppercase"> {{ stringToDate(random.meta.frontmatter.date) }} </span>
        <p class="mt-1">
          {{ random.meta.frontmatter.description }}
        </p>
      </div>
    </a>
    <Footer />
  </main>
</template>
