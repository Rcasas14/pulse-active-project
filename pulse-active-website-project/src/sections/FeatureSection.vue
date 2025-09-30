<template>
  <section class="feature-section font-plus-jakarta py-16 lg:py-24 bg-slate-100 ">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
    <div class="flex flex-col text-center justify-center items-center gap-y-6">
      <h2 class="text-4xl font-bold "> Why Choose Pulse Active?</h2>
      <p class="text-slate-700 text-lg "> We're more than just a gym. We're a community dedicated to helping you achieve your fitness goals with cutting-edge facilities and personalized support.</p>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="(items, index) in features"
        :key="index"
        class="feature-card flex flex-col text-center justify-center items-center p-5 bg-white rounded-[20px] shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-shadow duration-300">
          <div class="item-card h-auto max-w-3xl flex flex-col gap-y-10 my-6">
            <div class="img-cont my-4">
              <img :src="index === 0 ? trophyIcon : index === 1 ? groupsIcon : clockIcon" alt="" class="mx-auto w-15 h-15">
            </div>
            <p class="font-bold text-lg text-black">{{ items.name }}</p>
            <p class="font-normal text-[16px] text-slate-600">{{ items.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  </section>
</template>

<script>
import { useMotion } from '@vueuse/motion';
export default {
  name: 'FeatureSection',
  mixins: [ useMotion ],

  data(){
    return {
      trophyIcon: new URL('@/assets/trophy-icon.svg', import.meta.url).href,
      groupsIcon: new URL('@/assets/trophy-icon.svg', import.meta.url).href,
      clockIcon: new URL('@/assets/trophy-icon.svg', import.meta.url).href,

      features:[
        {
          name: 'Expert Training',
          description: 'Work with certified personal trainers who will design custom workout plans tailored to your goals.'
        },
        {
          name: 'Community Support',
          description: 'Join a welcoming community of fitness enthusiasts who motivate and support each other.'
        },
        {
          name: 'Flexible Hourse',
          description: 'Train on your schedule with 24/7 access to our fully equipped facilities and extended class hours.'
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
