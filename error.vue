<template>
  <div class="relative w-full sm:h-screen md:h-full">
    <div class="h-full">
      <div
        aria-hidden="true"
        class="absolute inset-0 w-full h-full bg-opacity-30 backdrop-blur-sm"
      ></div>
      <div class="relative container m-auto px-6 md:px-12 lg:px-6">
        <div
          class="mb-12 pt-6 space-y-6 md:mb-20 md:pt-12 lg:w-8/12 lg:mx-auto"
        >
          <h1
            class="text-white text-center text-3xl font-bold sm:text-4xl md:text-5xl"
          >
            It seems that you are lost.
          </h1>

          <p class="text-white text-center text-lg">
            Get back on track to visit our website
          </p>

          <div class="flex justify-center mt-2">
            <a
              href="/"
              title="Home"
              class="relative items-center justify-center px-6 py-2 text-xl font-bold text-white border border-white rounded-none hover:bg-white hover:text-black transition ease-in-out"
            >
              Go back
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead(() => ({
  titleTemplate: "Captime | 404",
}));
</script>
