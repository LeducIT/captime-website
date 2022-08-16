<script>
export default {
  name: 'Hero',
}
</script>

<template>
  <div class="relative w-full sm:h-screen md:h-full">
    <div class="h-full">
      <div
        aria-hidden="true"
        class="absolute inset-0 w-full h-full bg-opacity-30 backdrop-blur-sm"
      />
      <div class="relative container m-auto px-6 md:px-12 lg:px-6">
        <div
          class="mb-12 pt-6 space-y-16 md:mb-20 md:pt-12 lg:w-8/12 lg:mx-auto"
        >
          <h1
            class="text-white text-center text-3xl font-bold sm:text-4xl md:text-5xl"
          >
            Top Athlete, meet your <span class="text-ruby-500">CrossFit</span> timer.
          </h1>

          <p class="text-white text-center text-lg">
            Captime app offers all workout timers for
            CrossFit and high-intensity interval training workouts.
          </p>

          <div class="flex justify-center mt-8">
            <a
              target="_blank"
              href="http://onelink.to/captime"
              title="Download"
              class="relative items-center justify-center px-6 py-2 text-xl font-bold text-white border border-white rounded-none hover:bg-white hover:text-black transition ease-in-out"
            >
              Smash wods
              <span class="text-2xl font-handel font-bold text-ruby-500">NOW</span>
            </a>
          </div>
        </div>

        <div class="pb-16 flex flex-col items-center justify-center container">
          <img
            src="/app-demo.webp"
            alt="image"
            loading="lazy"
            class="md:px-12 self-center"
          >
        </div>
      </div>
    </div>
  </div>
</template>
