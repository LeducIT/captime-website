<script setup lang="ts">
interface TocItem {
  id: string
  label: string
}

withDefaults(
  defineProps<{
    title: string
    lede: string
    current: 'privacy' | 'tos' | 'eula' | 'disclaimer' | 'return'
    contactAbout: string
    toc: TocItem[]
    updated?: string
    updatedIso?: string
  }>(),
  {
    updated: 'November 14, 2026',
    updatedIso: '2026-11-14',
  },
)

const docs = [
  { id: 'privacy', href: '/privacy/', label: 'Privacy' },
  { id: 'tos', href: '/tos/', label: 'Terms' },
  { id: 'eula', href: '/eula/', label: 'EULA' },
  { id: 'disclaimer', href: '/disclaimer/', label: 'Disclaimer' },
  { id: 'return', href: '/return/', label: 'Refunds' },
]
</script>

<template>
  <main class="text-white">
    <div class="mx-auto max-w-6xl px-4 pb-16 pt-8 sm:px-6 md:pt-14 lg:px-8" data-legal-root>
      <header class="max-w-3xl">
        <nav class="flex flex-wrap gap-2" aria-label="Legal documents">
          <a
            v-for="doc in docs"
            :key="doc.id"
            :href="doc.href"
            class="rounded-full px-3 py-1 text-sm font-semibold no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            :class="doc.id === current ? 'bg-ruby-700 text-white' : 'bg-white/10 text-gray-300 hover:bg-white/15 hover:text-white'"
            :aria-current="doc.id === current ? 'page' : undefined"
          >
            {{ doc.label }}
          </a>
        </nav>

        <p class="mt-6 text-xs font-handel font-800 uppercase tracking-[0.22em] text-ruby-500">Legal</p>
        <h1 class="mt-3 font-handel text-4xl font-800 leading-none sm:text-5xl">
          {{ title }}
        </h1>
        <p class="mt-5 inline-flex flex-wrap items-center gap-x-2 gap-y-1 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm sm:text-base">
          <span class="font-semibold uppercase tracking-wider text-ruby-400">Last updated</span>
          <time class="font-medium text-white" :datetime="updatedIso">{{ updated }}</time>
        </p>
        <p class="mt-5 max-w-[65ch] text-lg leading-relaxed text-gray-200">
          {{ lede }}
        </p>
      </header>

      <div class="mt-8 xl:mt-10 xl:flex xl:items-start xl:gap-12">
        <nav class="mb-10 rounded-2xl bg-white/10 p-5 xl:sticky xl:top-8 xl:mb-0 xl:w-[260px] xl:shrink-0" aria-label="Table of contents">
          <p class="border-b border-gray-600 pb-2 font-handel text-lg text-white">On this page</p>
          <ol class="mt-3 space-y-2">
            <li v-for="item in toc" :key="item.id">
              <a
                :href="`#${item.id}`"
                class="block text-sm leading-snug text-gray-300 no-underline hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded-sm"
              >
                {{ item.label }}
              </a>
            </li>
          </ol>
        </nav>

        <article class="legal-prose min-w-0 max-w-[65ch] flex-1">
          <slot />

          <h2 id="contact">Contact</h2>
          <p>
            If you have questions about {{ contactAbout }}, or you want to access, correct, or delete personal data, email <a href="mailto:victor@leduc.it">victor@leduc.it</a>.
          </p>
          <p>
            Leduc IT OÜ<br />
            Registry code 14574207<br />
            Harju maakond, Tallinn, Lasnamäe linnaosa, Sepapaja tn 6<br />
            15551, Estonia
          </p>
          <p>
            Registry code and address are taken from the
            <a href="https://ariregister.rik.ee/eng/company/14574207" rel="external nofollow noopener" target="_blank">Estonian e-Business Register</a>.
          </p>
        </article>
      </div>
    </div>
  </main>
</template>
