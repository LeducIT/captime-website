<script setup lang="ts">
const features = [
  {
    icon: '/clock.webp',
    title: 'Six-in-one Timer',
    description: 'Captime includes templates for common training formats. You can also use the custom timer to create one interval at a time if you want.',
  },
  {
    icon: '/camera-light.webp',
    title: 'Video Mode',
    description: 'This is the first and only timer app with a video recording feature. Which enables you to record videos for your CrossFit competitions and challenges.',
  },
  {
    icon: '/voice-recognition-light.webp',
    title: 'Voice Recognition',
    description: 'Management of timers without using your hands. You can stop the timer by shouting "TIME" or "STOP" when you finish your workout.',
  },
]
</script>

<template>
  <div class="relative backdrop-blur-lg bg-black/30 pt-6 pb-8 md:pt-8 md:pb-16">
    <h2 class="text-white text-center text-2xl font-bold sm:text-3xl md:text-4xl mb-6">The features you always needed</h2>
    <h3 class="text-gray-400 text-center text-lg pb-8 max-w-3xl mx-auto px-6">
      The intuitive interface enables you to select advanced timers within seconds, including HIIT, AMRAP, TABATA, EMOM, and more.
    </h3>
    <div class="relative container m-auto px-6 md:px-12">
      <div class="grid lg:grid-cols-3 gap-6 md:w-8/12 md:mx-auto lg:w-full">
        <div v-for="feature in features" :key="feature.title" class="card-dark">
          <img
            height="80"
            width="80"
            class="mx-auto w-20"
            :src="feature.icon"
            :alt="`Illustration ${feature.title}`"
            :title="`Illustration ${feature.title}`"
            loading="lazy"
            decoding="async"
          />
          <h3 class="text-2xl font-semibold text-white">
            {{ feature.title }}
          </h3>
          <p class="text-gray-400 flex-1">
            {{ feature.description }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
