<script setup lang="ts">

</script>

<template>
  <section class="overflow-hidden bg-black">
    <div class="flex flex-col lg:flex-row lg:items-stretch lg:max-h-[900px] lg:min-h-[900px]">
      <div class="flex items-center justify-center w-full lg:order-2 lg:w-7/12">
        <div class="h-full px-4 pt-24 pb-16 sm:px-6 lg:px-24 2xl:px-32 lg:pt-40 lg:pb-14">
          <div class="flex flex-col justify-between flex-1 h-full">
            <div>
              <h1 class="text-4xl font-bold text-white sm:text-6xl xl:text-7xl">
                Meet your new timer for CrossFit
              </h1>
              <p class="mt-6 text-base text-white sm:text-xl">
                The Captime app offers a variety of workout timers for common CrossFit and
                high-intensity interval training workouts. A user-friendly interface enables you to
                select advanced timers within seconds, including HIIT, AMRAP, TABATA, EMOM, and more.
              </p>
              <a
                href="#"
                title=""
                class="inline-flex items-center px-6 py-5 text-base font-semibold text-white transition-all duration-200 bg-ruby-500 mt-9 hover:bg-ruby-700 focus:bg-ruby-900"
                role="button"
              >
                Get started for free
              </a>
            </div>
            <div class="mt-8 border-t-2 border-black lg:mt-auto sm:mt-14">
              <div class="pt-8 sm:flex sm:items-center sm:justify-between sm:pt-14">
                <p class="text-base font-semibold text-black">
                  App available on
                </p>
                <div class="flex items-center mt-5 space-x-5 sm:mt-0">
                  <a
                    href="http://onelink.to/captime"
                    title="Apple store download link"
                    class="block transition-all duration-200 border-2 border-white hover:opacity-80 focus:opacity-80"
                    role="button"
                  ><img
                    height="4rem;"
                    class="w-auto rounded h-14 sm:h-16"
                    alt="Apple store download link"
                    src="/app-store-button.webp"
                  ></a><a
                    href="http://onelink.to/captime"
                    title="Google play download link"
                    class="block transition-all duration-200 border-2 border-white hover:opacity-80 focus:opacity-80"
                    role="button"
                  ><img
                    height="4rem;"
                    class="w-auto rounded h-14 sm:h-16"
                    src="/play-store-button.webp"
                    alt="Google play donwload link"
                  ></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="relative w-full overflow-hidden lg:w-5/12 lg:order-1">
        <div class="lg:absolute lg:bottom-0 lg:left-0">
          <img class="w-full" src="/captime_hand.webp" alt="hand holding phone with captime app inside">
        </div>
      </div>
    </div>
  </section>

  <section class="py-10 bg-ruby-600 sm:py-16 lg:py-24 bg-ruby-500">
    <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 text-center sm:grid-cols-2 gap-y-8 lg:grid-cols-3 sm:gap-12">
        <div>
          <div class="flex items-center justify-center w-20 h-20 mx-auto bg-blue-100 rounded-full">
            <i-carbon-time class="text-red-500 text-4xl" />
          </div>
          <h3 class="mt-8 text-lg font-semibold text-black">
            Six-In-One Timer
          </h3>
          <p class="mt-4 text-sm text-gray-200">
            Captime includes templates for common training formats. Alternatively, you can use the
            custom timer to create one interval at a time if the templates do not meet your needs.
          </p>
        </div>
        <div>
          <div class="flex items-center justify-center w-20 h-20 mx-auto bg-blue-200 rounded-full">
            <i-carbon-video class="text-red-500 text-4xl" />
          </div>
          <h3 class="mt-8 text-lg font-semibold text-black">
            Video Mode
          </h3>
          <p class="mt-4 text-sm text-gray-200">
            This is the first and only timer app with a video recording feature. Which enables you to
            record videos for your CrossFit competitions and challenges.
          </p>
        </div>
        <div>
          <div class="flex items-center justify-center w-20 h-20 mx-auto bg-green-100 rounded-full">
            <i-carbon-voice-activate class="text-red-500 text-4xl" />
          </div>
          <h3 class="mt-8 text-lg font-semibold text-black">
            Voice Recognition
          </h3>
          <p class="mt-4 text-sm text-gray-200">
            Management of timers without using your hands. You can stop the timer by shouting "TIME"
            or "STOP" when you finish your workout.
          </p>
        </div>
      </div>
    </div>
  </section>

  <section class="relative">
    <img
      style="height: 100vh;"
      class="w-full opacity-50 object-cover"
      src="https://images.unsplash.com/photo-1574680178050-55c6a6a96e0a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
      alt="Smash workout illusatration"
    >
    <div
      class="text-center absolute pt-10 md:pt-0 px-2 md:px-0 top-0 left-0 md:top-1/2 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2"
    >
      <h2 class="text-3xl font-bold text-white sm:text-4xl xl:text-5xl">
        It's time to smash your workout goals and achieve the maximum results using this professional
        timer app. It makes no difference if you work out at home or in the gym. Captime ensures that
        your workouts are effective regardless of where you train.
      </h2>
      <a class="inline-block mt-8 bg-ruby-500 text-white px-6 py-5 font-bold">Get Captime</a>
    </div>
  </section>

  <!-- Testimonials -->
  <section>
    <Testimonials />
  </section>
</template>

<route lang="yaml">
meta:
  layout: home
</route>
