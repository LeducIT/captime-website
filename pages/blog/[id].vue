<template>
  <main class="text-center text-white">
    <div class="relative lg:pt-10 pb-4 lg:max-w-1/2 mx-auto">
      <div class="block aspect-w-4 aspect-h-3">
        <img
          class="object-cover w-full h-full lg:rounded-lg"
          :src="data.page.headImage"
          :alt="'blog illustration ' + data.page.title"
        />
      </div>

      <div class="absolute top-4 left-4 lg:top-15 lg:left-10">
        <span
          class="px-4 py-2 text-xs font-semibold tracking-widest text-gray-900 uppercase bg-white rounded-full"
        >
          {{ data.page.tag }}
        </span>
      </div>
    </div>
    <span
      class="block mt-6 text-sm font-semibold tracking-widest text-white uppercase"
    >
      {{ formatTime(data.page.date) }}
    </span>

    <h1 class="py-5 text-3xl lg:text-4xl lg:max-w-1/2 px-4 font-800 mx-auto">
      {{ data.page.title }}
    </h1>
    <p class="py-5 px-4 lg:max-w-1/2 mx-auto text-left">
      {{ data.page.description }}
    </p>
    <article
      class="mx-auto text-left text-white prose text-white pb-4 px-4 lg:max-w-1/2"
    >
      <ContentRenderer :value="data.page" />
    </article>

    <div class="flex justify-center mt-8">
      <a
        target="_blank"
        href="http://onelink.to/captime"
        title="Download"
        class="relative items-center justify-center px-6 py-2 text-xl font-bold text-white border border-white rounded-none hover:bg-white hover:text-black transition ease-in-out"
      >
        Get
        <span class="text-2xl font-handel font-bold text-ruby">Captime</span>
      </a>
    </div>

    <a
      v-if="data.random"
      :href="'/blog/' + data.random.slug"
      class="flex flex-col sm:flex-row py-8 lg:max-w-1/2 mx-auto lg:my-10 bg-true-gray-800 lg:rounded-lg"
    >
      <div class="relative mx-4 flex">
        <div :title="data.random.title" class="block w-full">
          <img
            class="object-cover w-full sm:w-52 h-full rounded-lg"
            :src="data.random.headImage"
            :alt="'blog illustration ' + data.random.title"
          />
        </div>

        <div class="absolute top-2 left-2">
          <span
            class="px-4 py-2 text-tiny font-semibold tracking-widest text-gray-900 uppercase bg-white rounded-full"
          >
            {{ data.random.tag }}
          </span>
        </div>
      </div>
      <div class="px-4 pt-2 sm:pt-0 text-left">
        <p class="text-lg font-bold">
          {{ data.random.title }}
        </p>
        <span
          class="block mt-3 text-sm font-semibold tracking-widest text-white uppercase"
        >
          {{ formatTime(data.random.date) }}
        </span>
        <p class="mt-1">
          {{ data.random.description }}
        </p>
      </div>
    </a>
  </main>
</template>

<script setup lang="ts">
import { createMeta } from "~/services/meta";
import { randomArticle, formatTime } from "~/services/blog";

const route = useRoute();

const { data } = await useAsyncData("articleData", async () => {
  const page = await queryContent("blog")
    .where({ slug: route.params.id })
    .findOne();
  const random = page.next_blog
    ? await queryContent("blog").where({ slug: page.next_blog }).findOne()
    : await randomArticle(page.slug);
  return {
    page: page,
    random: random,
  };
});

useHead(() => ({
  titleTemplate: data.value.page.title || "No title",
  meta: createMeta(
    data.value.page.title || "No title",
    data.value.page.description || "No description",
    data.value.page.author || "Captime"
  ),
}));
</script>
