<template>
  <main class="text-center text-white dark:text-gray-200">
    <div class="relative lg:pt-10 pb-4 lg:max-w-1/2 mx-auto">
      <div class="block aspect-w-4 aspect-h-3">
        <img
          class="object-cover w-full h-full lg:rounded-lg"
          :src="page.headImage"
          :alt="'blog illustration ' + page.title"
        />
      </div>

      <div class="absolute top-4 left-4 lg:top-15 lg:left-10">
        <span
          class="px-4 py-2 text-xs font-semibold tracking-widest text-gray-900 uppercase bg-white rounded-full"
        >
          {{ page.tag }}
        </span>
      </div>
    </div>
    <span
      class="block mt-6 text-sm font-semibold tracking-widest text-white uppercase"
    >
      {{ formatTime(page.date) }}
    </span>

    <h1 class="py-5 text-3xl lg:text-4xl lg:max-w-1/2 px-4 font-800 mx-auto">
      {{ page.title }}
    </h1>
    <p class="py-5 px-4 lg:max-w-1/2 mx-auto text-left">
      {{ page.description }}
    </p>
    <ContentRenderer
      :value="page"
      class="mx-auto text-left text-white prose pb-4 px-4 lg:max-w-1/2"
    />
    <a
      v-if="random"
      :href="'/blog/' + random.slug"
      class="flex flex-col sm:flex-row py-8 lg:max-w-1/2 mx-auto lg:my-10 bg-true-gray-800 lg:rounded-lg"
    >
      <div class="relative mx-4 flex">
        <div :title="random.title" class="block w-full">
          <img
            class="object-cover w-full sm:w-52 h-full rounded-lg"
            :src="random.headImage"
            :alt="'blog illustration ' + random.title"
          />
        </div>

        <div class="absolute top-2 left-2">
          <span
            class="px-4 py-2 text-tiny font-semibold tracking-widest text-gray-900 uppercase bg-white rounded-full"
          >
            {{ random.tag }}
          </span>
        </div>
      </div>
      <div class="px-4 pt-2 sm:pt-0 text-left">
        <p class="text-lg font-bold">
          {{ random.title }}
        </p>
        <span
          class="block mt-3 text-sm font-semibold tracking-widest text-white uppercase"
        >
          {{ formatTime(random.date) }}
        </span>
        <p class="mt-1">
          {{ random.description }}
        </p>
      </div>
    </a>
  </main>
</template>

<script setup lang="ts">
import { createMeta } from "~/services/meta";
import { randomArticle, formatTime } from "~/services/blog";

const config = useRuntimeConfig();
const route = useRoute();

const { data: page } = await useAsyncData("articleData", () =>
  queryContent("blog").where({ slug: route.params.id }).findOne()
);

const random = await randomArticle(page.value.slug);

useHead(() => ({
  titleTemplate: page.value?.title || "No title",
  meta: createMeta(
    page.value?.title || "No title",
    page.value?.description || "No description",
    page.value?.author || "Captime"
  ),
}));
</script>
