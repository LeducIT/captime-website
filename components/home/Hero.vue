<template>
  <div class="relative w-full sm:h-screen md:h-full">
    <div class="h-full">
      <div
        aria-hidden="true"
        class="absolute inset-0 w-full h-full bg-opacity-30 backdrop-blur-sm"
      ></div>
      <div class="relative container m-auto px-6 md:px-12 lg:px-6">
        <div
          class="mb-12 pt-6 space-y-16 md:mb-20 md:pt-12 lg:w-8/12 lg:mx-auto"
        >
          <h1
            class="text-white text-center text-3xl font-bold sm:text-4xl md:text-5xl"
          >
            Meet your new <span class="text-ruby">CrossFit</span> timer.
          </h1>

          <p class="text-white text-center text-lg">
            The Captime app offers a variety of workout timers for common
            CrossFit and high-intensity interval training workouts. A
            user-friendly interface enables you to select advanced timers within
            seconds, including HIIT, AMRAP, TABATA, EMOM, and more.
          </p>

          <div class="flex justify-center mt-8">
            <a
              target="_blank"
              href="http://onelink.to/captime"
              title="Download"
              class="relative items-center justify-center px-6 py-2 text-xl font-bold text-white border border-white rounded-none hover:bg-white hover:text-black transition ease-in-out"
            >
              Get
              <span class="text-2xl font-handel font-bold text-ruby"
                >Captime</span
              >
              !
            </a>
          </div>
        </div>

        <div class="pb-16 flex flex-col items-center justify-center container">
          <img
            src="app-demo.png"
            alt="image"
            loading="lazy"
            class="md:px-12 self-center"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Hero",
};
</script>
