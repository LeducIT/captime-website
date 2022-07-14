<template>
  <div>
    <section class="py-10 sm:py-16 lg:py-24">
      <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="max-w-2xl mx-auto text-center">
          <h2
            class="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl"
          >
            <span class="text-ruby-500">157</span> people have said how good is
            Captime
          </h2>
        </div>
        <div
          class="grid max-w-xl grid-cols-1 mx-auto mt-8 text-center lg:max-w-full sm:mt-12 lg:mt-20 lg:grid-cols-3 gap-x-6 xl:gap-x-12 gap-y-6"
        >
          <div
            v-for="testimonial in testimonials"
            class="overflow-hidden bg-white rounded-none shadow"
          >
            <div class="h-full px-8 py-12 flex flex-col justify-between">
              <div>
                <div class="relative w-24 h-24 mx-auto">
                  <img
                    class="relative object-cover w-24 h-24 mx-auto rounded-none"
                    :src="testimonial.img"
                    alt="avatar"
                  />
                  <div
                    class="absolute top-0 right-0 flex items-center justify-center bg-ruby rounded-full w-7 h-7"
                  >
                    <svg
                      class="w-4 h-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path
                        d="M20.309 17.708C22.196 15.66 22.006 13.03 22 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292zm-11.007 0C11.19 15.66 10.999 13.03 10.993 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292z"
                      ></path>
                    </svg>
                  </div>
                </div>
                <blockquote class="mt-7">
                  <p class="text-lg text-black">“{{ testimonial.comment }}”</p>
                </blockquote>
              </div>

              <div>
                <p class="text-base font-semibold tex-tblack mt-9">
                  {{ testimonial.name }}
                </p>
                <p class="mt-1 text-base text-gray-600">
                  {{ testimonial.job }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const testimonials = [
  {
    name: "Leslie Alexander",
    img: "https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-1.png",
    job: "CrossFit Addict",
    comment:
      "Most timers for HIIT and EMOM’s seem to be designed by people that don’t workout. This one has been the simplest to use and doesn’t interrupt with annoying advertising.",
  },
  {
    name: "Jacob Jones",
    img: "https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-2.png",
    job: "Sport Coach",
    comment:
      "Great options, automatic countdown from 10sec. Fun, being able to tally rounds or stop the clock with a shout out.",
  },
  {
    name: "Jenny Wilson",
    img: "https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-female.png",
    job: "Graphic Designer",
    comment:
      "The home screen is really cool. The only time with EMOM 4 and EMOM 5 option",
  },
];
</script>
