<script setup lang="ts">
import { openMessenger } from '~~/services/crisp'
const router = useRouter()
router.afterEach((to) => {
  if (to.hash && to.hash.startsWith('#support'))
    openMessenger()
})
router.currentRoute.value.hash.startsWith('#support') && openMessenger()
</script>

<template>
  <footer class="p-4 rounded-none shadow md:px-6 md:py-8">
    <hr class="my-6 border-gray-200 sm:mx-auto lg:my-8">

    <div class="sm:flex sm:items-center sm:justify-between">
      <a href="/" class="flex items-center mb-4 sm:mb-0">
        <img src="/icon.webp" class="mr-3 h-8 border" alt="Captime Logo">
        <span
          class="self-center text-2xl text-white font-handel whitespace-nowrap"
        >Captime</span>
      </a>
      <ul class="flex flex-wrap items-center mb-6 text-sm text-white sm:mb-0">
        <li>
          <a href="/privacy" class="mr-4 hover:underline md:mr-6">Privacy Policy</a>
        </li>
        <li>
          <a href="/tos" class="mr-4 hover:underline md:mr-6">Terms & Conditions</a>
        </li>
        <li>
          <a href="#support" class="mr-4 hover:underline md:mr-6">Support</a>
        </li>
      </ul>
    </div>
    <hr class="my-6 border-gray-200 sm:mx-auto lg:my-8">
    <span class="block text-sm text-white sm:text-center">© 2022 <a href="/" class="hover:underline font-handel">Captime</a>. All
      Rights Reserved.
    </span>
  </footer>
</template>
