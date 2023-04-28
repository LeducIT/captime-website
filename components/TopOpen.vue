<script setup lang="ts">
import dayjs from 'dayjs'

interface Score {
  ordinal: number
  breakdown: string
  lane: number
  scoreIdentifier: string
  exists: boolean
  workoutresult: string
  mobileScoreDisplay: string
  rank: string
  heat: number
  points: any
  scoreDisplay: string
  location: string
  time: string
  judge: string
  workoutrank: string
}

interface Athlete {
  rank: string
  scores: Score[]
  overallScore: string
  height: string
  link: string
  countryOfOriginName: string
  countryImage: string
  weight: string
  profilePic: string
  gender: string
  age: number
  name: string
  competitorName: string
}
const props = defineProps<{
  limit: number
  skip: number
}>()
const topList = ref<Athlete[]>([])
const today = dayjs().format('MMMM DD, YYYY')
fetch(`https://${import.meta.env.domain}/api/topOpen?limit=${props.limit}&skip=${props.skip}`).then(async (res) => {
  topList.value = await res.json()
})
</script>

<template>
  <section class="py-12 sm:py-16 lg:py-20">
    <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
      <div class="text-center">
        <h2 class="text-2xl font-bold text-gray-900 sm:text-3xl">
          Top Athletes
        </h2>
        <p class="text-gray-500 font-normal text-base mt-2.5">
          Current top 5 - {{ today }}
        </p>
      </div>

      <div class="grid grid-cols-1 gap-5 mt-8 text-center sm:mt-12 sm:grid-cols-2 lg:grid-cols-5 sm:gap-6">
        <div v-for="(athlete, index) in topList" :key="index" class="relative transition-all duration-300 bg-gray-100 rounded-xl hover:shadow-xl hover:bg-white">
          <div class="px-4 py-5 sm:p-6">
            <img class="object-cover !w-24 h-24 mx-auto border border-gray-200 rounded-full" :src="athlete.profilePic" :alt="athlete.name">

            <p class="mt-5 text-base font-bold text-gray-900">
              <a :href="athlete.link" :title="athlete.name" target="_blank">
                {{ athlete.name }}
                <a class="absolute inset-0" aria-hidden="true" />
              </a>
            </p>
            <p class="mt-3 font-medium text-gray-500">
              {{ athlete.height }} - {{ athlete.weight }}
            </p>
            <p class="mt-2 mb-5 font-medium text-gray-500">
              {{ athlete.gender }} - {{ athlete.age }} Years
            </p>
            <p v-for="(score, indexS) in athlete.scores" :key="indexS" class="mt-2 mb-5 font-medium text-gray-500">
              <bold class="font-bold text-gray-900">
                22.{{ score.ordinal }}
              </bold> - {{ score.scoreDisplay }} - Nº{{ score.rank }}
            </p>
            <img class="object-cover absolute top-3 right-5 !w-6 h-auto mx-auto border border-gray-200" :src="athlete.countryImage" :alt="athlete.countryOfOriginName">

            <a
              href="#"
              title=""
              class="px-3 py-2 absolute top-3 left-5 text-xs font-medium text-white transition-all duration-200 bg-yellow-600 border border-transparent rounded hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-900"
              role="button"
            >
              Nº{{ athlete.rank }}
              <span class="absolute inset-0" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>

      <div class="mt-12 text-center">
        <a href="https://games.crossfit.com/leaderboard/open/2022?view=0&division=1&region=0&scaled=0&sort=0" target="_blank" title="To official website" class="inline-flex items-center p-1 -m-1 text-xs font-bold tracking-wide text-gray-400 uppercase transition-all duration-200 rounded hover:text-gray-900 focus:ring-2 focus:text-gray-900 focus:ring-gray-900 focus:ring-offset-2 focus:outline-none" role="button">
          Browse All
          <svg class="w-4 h-4 ml-1.5 -mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </div>
  </section>
</template>
