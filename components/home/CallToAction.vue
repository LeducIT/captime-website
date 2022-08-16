<script setup lang="ts">
const slides = [
  {
    content: 'It\'s time to smash your workout goals and achieve the maximum results using this professional timer app.',
    image: 'https://images.unsplash.com/photo-1574680178050-55c6a6a96e0a?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1169&amp;q=80',
    button: 'Get',
  },
  {
    content: 'It makes no difference if you workout at home or in the gym.',
    image: 'https://images.unsplash.com/photo-1599058917212-d750089bc07e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2669&q=80',
    button: 'Download',
  },
  {
    content: 'Captime ensures that your workouts are effective regardless of where you train.',
    image: 'https://images.unsplash.com/photo-1556817411-31ae72fa3ea0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80',
    button: 'Use',
  },
]
</script>

<template>
  <section v-for="(slide, i) in slides" :key="i" class="relative pb-20">
    <img
      class="w-full h-[120vh] sm:h-auto opacity-50 object-cover"
      :src="slide.image"
      alt="Smash workout illusatration"
    >
    <div
      class="text-center absolute pt-0 px-0 top-1/3 left-1/3 sm:top-1/2 sm:left-1/2 transform -translate-x-1/4 -translate-y-1/4 sm:-translate-x-1/2 sm:-translate-y-1/2"
    >
      <h2 class="text-3xl font-bold text-white sm:text-4xl xl:text-5xl">
        {{ slide.content }}
      </h2>
      <a
        title="Get Captime"
        target="_blank"
        href="http://onelink.to/captime"
        class="inline-block mt-8 text-white font-bold text-xl bg-ruby border px-6 py-2 rounded-none hover:bg-white hover:text-ruby-500 transition ease-in-out"
      >{{ slide.button }} <span class="font-handel text-2xl">Captime</span>
      </a>
    </div>
  </section>
</template>
