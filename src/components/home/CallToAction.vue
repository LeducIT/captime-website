<script setup lang="ts">
import CtaButton from '../CtaButton.vue'
import StoreBadges from '../StoreBadges.vue'

const slides = [
  {
    content: "It's time to smash your workout goals and achieve the maximum results using this professional timer app.",
    image: '/hero_1.webp',
    button: 'Get',
  },
  {
    content: 'It makes no difference if you workout at home or in the gym.',
    image: '/hero_3.webp',
    button: 'Download',
  },
  {
    content: 'Captime ensures that your workouts are effective regardless of where you train.',
    image: '/hero_2.webp',
    button: 'Use',
  },
]
</script>

<template>
  <section v-for="(slide, i) in slides" :key="i" class="relative pb-20">
    <img
      class="w-full h-[120vh] sm:h-auto opacity-50 object-cover"
      :src="slide.image"
      height="1200px"
      width="1920px"
      loading="lazy"
      :alt="`Illustration ${slide.content}`"
      :title="`Illustration ${slide.content}`"
    />
    <div class="text-center absolute pt-0 px-0 top-1/3 left-1/3 sm:top-1/2 sm:left-1/2 transform -translate-x-1/4 -translate-y-1/4 sm:-translate-x-1/2 sm:-translate-y-1/2">
      <h2 class="text-3xl font-bold text-white sm:text-4xl xl:text-5xl">
        {{ slide.content }}
      </h2>
      <CtaButton title="Get Captime" class="mt-8">
        {{ slide.button }} <span class="font-handel text-[1.15em]">Captime</span>
      </CtaButton>
      <div class="mt-5">
        <StoreBadges />
      </div>
    </div>
  </section>
</template>
