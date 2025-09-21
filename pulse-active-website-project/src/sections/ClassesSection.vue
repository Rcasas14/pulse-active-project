<template>
  <section class="feature-section font-plus-jakarta py-16 lg:py-24 shadow-[0_4px_20px_rgba(0,0,0,0.08)] rounded-0 ">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
    <div class="flex flex-col text-center justify-center items-center gap-y-6">
      <h2 class="text-4xl font-bold "> Classes & Programs</h2>
      <p class="text-slate-700 text-lg "> From high-intensity workouts to mindful yoga sessions, we offer diverse classes for every fitness level.</p>
      <div class="grid grid-cols-3 gap-6">
        <div v-for="(item, index) in classes" :key="index" class="classes-card max-w-xl flex flex-col text-center justify-center items-center bg-white rounded-[20px] shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-shadow duration-300">
          <div class="h-auto flex flex-col w-full relative h-[200px]">

            <div class="item-card-tag absolute top-2 right-2 flex flex-wrap gap-2 z-11">
              <!-- Fixed: Removed v-for loop and display only the first tag -->
              <span class="tag bg-slate-900 text-white py-2 px-4 rounded-[20px] text-[10px]">
                {{ item.tag[index % item.tag.length] }}
              </span>
            </div>

            <img :src="index === 0 ? classImageOne
                 :index === 1 ? classImageTwo
                 :index === 2 ? classImageThree
                 :index === 3 ? classImageFour
                 :index === 4 ? classImageFive
                 : classImageSix"

                 class="absoulte inset-0 bg-cover bg-center transition-opacity duration-300 rounded-tl-[20px] rounded-tr-[20px]" alt="">

            <div class="flex flex-col justify-start text-left w-full py-8 gap-y-2 z-10 p-4">
              <h2 class="item-card-title text-black font-semibold text-[20px]">{{ item.name }}</h2>
              <p class="item-card-desc text-slate-500">{{ item.schedule }}</p>
              <div class="item-card-button text-white flex justify-center text-center w-full py-2 rounded-[20px] text-[14px] mt-2 cursor-pointer" :class="index === 0 || index === 3 ? 'bg-[#0088FF]' :index === 1 || index === 4 ? 'bg-[#FF6B9D]' : 'bg-slate-900'">
                <a href="#">Book Class</a>
              </div>
            </div>
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
  name: 'ClassesSection',
  mixins: [ useMotion ],

  data(){
    return {
      classImageOne: new URL('@/assets/gym-class-1.jpg', import.meta.url).href,
      classImageTwo: new URL('@/assets/gym-class-2.jpg', import.meta.url).href,
      classImageThree: new URL('@/assets/gym-class-3.jpg', import.meta.url).href,
      classImageFour: new URL('@/assets/gym-class-4.jpg', import.meta.url).href,
      classImageFive: new URL('@/assets/gym-class-5.jpg', import.meta.url).href,
      classImageSix: new URL('@/assets/gym-class-6.jpg', import.meta.url).href,

      classes:[
        {
          name: 'HIIT Training',
          schedule: 'Mon, Wed, Fri - 7:00 AM',
          tag: ['Beginner', 'Intermediate', 'All Levels']
        },
        {
          name: 'Yoga Flow',
          schedule: 'Tue, Thu - 6:30 PM',
          tag: ['Beginner', 'Intermediate', 'All Levels']
        },
        {
          name: 'Strength Training',
          schedule: 'Daily - 8:00 AM',
          tag: ['Beginner', 'Intermediate', 'All Levels']
        },
        {
          name: 'Spin Class',
          schedule: 'Mon, Wed - 6:00 PM',
          tag: ['Beginner', 'Intermediate', 'All Levels']
        },
        {
          name: 'Boxing',
          schedule: 'Tue, Thu, Sat - 7:30 PM',
          tag: ['Beginner', 'Intermediate', 'All Levels']
        },
        {
          name: 'Pilates',
          schedule: 'Wed, Fri - 9:00 AM',
          tag: ['Beginner', 'Intermediate', 'All Levels']
        },
      ]
    }
  }
}
</script>

<style scoped>

</style>