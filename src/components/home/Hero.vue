<script setup lang="ts">
import CtaButton from '../CtaButton.vue'
import StoreBadges from '../StoreBadges.vue'
</script>

<template>
  <div class="relative w-full sm:h-screen md:h-full">
    <div class="h-full">
      <div aria-hidden="true" class="absolute inset-0 w-full h-full bg-opacity-30 backdrop-blur-sm" />
      <div class="relative container m-auto px-6 md:px-12 lg:px-6">
        <div class="mb-8 pt-8 space-y-5 md:mb-10 md:pt-12 md:space-y-6 lg:w-8/12 lg:mx-auto">
          <h1 class="text-white text-center text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            Top Athlete, meet your <span class="text-ruby-500">CrossFit</span> timer.
          </h1>

          <p class="text-gray-400 text-center text-base leading-relaxed sm:text-lg max-w-2xl mx-auto">
            Captime app offers all workout timers for CrossFit and high-intensity interval training workouts.
          </p>

          <div class="flex flex-col items-center justify-center gap-4 pt-1">
            <CtaButton title="Download">
              Smash wods
              <span class="font-handel text-[1.15em] tracking-wide">NOW</span>
            </CtaButton>
            <StoreBadges />
          </div>
        </div>

        <div class="relative pb-16 flex flex-col items-center justify-center container">
          <div
            aria-hidden="true"
            class="pointer-events-none absolute left-1/2 top-1/2 h-[55%] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-ruby-700/20 blur-3xl"
          />
          <img
            src="/app-demo.webp"
            height="712"
            width="1487"
            title="Captime app preview"
            alt="Captime app preview"
            loading="lazy"
            class="relative z-1 md:px-12 self-center"
          />
        </div>
      </div>
    </div>
  </div>
</template>
