<script setup>
import { ChevronDownIcon } from '@heroicons/vue/24/outline'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'

const faqs = [
  {
    id: 1,
    question: 'Where get the app?',
    answer: 'You can get Captime free on the Apple App Store for iPhone. And in Google Play for Android.',
  },
  {
    id: 2,
    question: 'Where use the app?',
    answer: 'Captime is perfect for workouts at your home gym or garage gym. However the app is also great for workouts outside or at a regular gym.',
  },
  {
    id: 2,
    question: 'What is a WOD?',
    answer: `WOD stands for "Workout of the day" and is a word often used in CrossFit gyms(or boxes as they also are called).

\nMost gyms have a programming where they have different workouts each day, that where workout of the day comes from.

\nFor most athletes a WOD is a single workout regardless if it's the actual workout of the day for the gym. For example Fran, Cindy and Murph are popular WODs.
`,
  },
  {
    id: 3,
    question: 'What is AMRAP, EMOM and TABATA?',
    answer: `There's a few different formats and ways to measure score of a WOD. These are almost always a combination of time, rounds or repitions. Because of that you can understand why a good timer is so useful when doing these types of workouts.

\nAMRAP is an abbreviation for as many rounds(or repitions) as possible. THe workout always have a time cap and the score is the rounds(or repititons) you completed during that time.

\nEMOM stands for every minute on the minute. It means that each minute you must start the movement and complete the prescribed repitions.

\nTABATA is a style of workout where you have a fixed time for work and rest. Usually that is 20 seconds of work followed by 10 seconds of rest, repeated for 4 minutes.

\nFor time is the most basic workout format. You just have to complete the workout and however long it takes is the score.
`,
  },
]
</script>

<template>
  <div class="bg-gray-50">
    <div class="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
      <div class="max-w-3xl mx-auto divide-y-2 divide-gray-200">
        <h2 class="text-center text-3xl font-extrabold text-gray-900 sm:text-4xl">Frequently asked questions</h2>
        <dl class="mt-6 space-y-6 divide-y divide-gray-200">
          <Disclosure v-for="faq in faqs" :key="faq.question" v-slot="{ open }" as="div" class="pt-6">
            <dt class="text-lg">
              <DisclosureButton class="text-left w-full flex justify-between items-start text-gray-400">
                <span class="font-medium text-gray-900">
                  {{ faq.question }}
                </span>
                <span class="ml-6 h-7 flex items-center">
                  <ChevronDownIcon class="h-6 w-6 transform" :class="[open ? '-rotate-180' : 'rotate-0']" aria-hidden="true" />
                </span>
              </DisclosureButton>
            </dt>
            <DisclosurePanel as="dd" class="mt-2 pr-12">
              <p class="text-base text-gray-500 whitespace-pre-wrap">
                {{ faq.answer }}
              </p>
            </DisclosurePanel>
          </Disclosure>
        </dl>
      </div>
    </div>
  </div>
</template>
