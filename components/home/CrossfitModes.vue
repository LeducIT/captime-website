<template>
  <section class="relative py-12 overflow-hidden sm:py-16 lg:py-20 xl:py-32">
    <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div class="grid items-center grid-cols-1 xl:grid-cols-2">
        <div
          class="px-8 text-center xl:text-left xl:pr-16 md:max-w-2xl md:mx-auto xl:max-w-none"
        >
          <h2
            class="text-3xl font-bold text-white sm:text-4xl xl:text-5xl font-pj"
          >
            Challenge yourself in the different modes
          </h2>
          <p class="mt-6 text-lg font-normal text-white font-pj">
            The only way to get better is to keep pushing yourself. <br />That's
            why Captime helps you to break the limits.
          </p>
        </div>

        <div
          class="relative mt-8 sm:mt-12 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mt-0"
        >
          <div class="relative space-y-5">
            <div
              class="grid grid-cols-1 place-content-center gap-5 sm:grid-cols-3"
            >
              <a
                href="#"
                v-for="(mode, index) in modes"
                class="relative text-center items-center justify-center px-6 py-2 text-xl font-bold text-white border border-white rounded-none hover:bg-white hover:text-black transition ease-in-out"
              >
                {{ mode }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const modes = ["HIIT", "AMRAP", "EMOM", "SALLY", "TABATA"];
</script>
