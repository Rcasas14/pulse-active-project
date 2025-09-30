<template>
  <section id="trainer" class="experts-section font-plus-jakarta py-16 lg:py-24 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col text-center justify-center items-center gap-y-6 mb-12">
        <h2 class="text-4xl font-bold">Meet Our Expert Trainers</h2>
        <p class="text-slate-700 text-lg">Our certified professionals are here to guide you every step of the way to achieving your fitness goals.</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 relative">
        <div v-for="(coach, index) in coachData"
             :key="index"
             class="experts-card flex flex-col items-center bg-white rounded-[20px] shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-shadow duration-300  overflow-hidden">

          <div class="flex flex-col justify-center items-center w-full p-8 pt-12">
            <!-- Plan Header -->
            <div class="text-center mb-8 flex flex-col justify-center gap-y-4">
              <img :src="index === 0 ? coachImageOne :index === 1 ? coachImageTwo : coachImageThree" alt="" class="w-32 h-32 rounded-full mb-4 object-cover">
              <h3 class="text-2xl font-bold text-black mb-4 ">{{ coach.name }}</h3>
              <p class="coach-data text-[18px] font-semibold text-[#26C5D9]">{{ coach.category }}</p>
              <p class="coach-data text-[16px] text-black">{{ coach.experience }}</p>
              <p class="coach-data text-[16px] text-black">{{ coach.certification }}</p>
            </div>

            <!-- CTA Button -->
            <div class="mt-auto flex justify-center text-center w-full py-2 rounded-[20px] border border-[#26C5D9] font-medium text-[#26C5D9]  transition-all duration-300 hover:opacity-90 bg-white hover:bg-[#26C5D9] hover:text-white mt-2 cursor-pointer">
              <a href="#" class=" ">
                Book Session
              </a>
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
  name: 'ExpertsSection',
  mixins: [useMotion],

  data() {
    return {
      coachImageOne: new URL('@/assets/gym-coach-1.jpg', import.meta.url).href,
      coachImageTwo: new URL('@/assets/gym-coach-2.jpg', import.meta.url).href,
      coachImageThree: new URL('@/assets/gym-coach-3.jpg', import.meta.url).href,
      coachData: [
        {
          name: 'Sarah Johnson',
          category: 'Strength Training',
          experience: '8 years experience',
          certification: 'NASM-CPT',
        },
        {
          name: 'Mike Rodriguez',
          category: 'HIIT & Cardio',
          experience: '6 years experience',
          certification: 'ACSM-CPT',
        },
        {
          name: 'Emma Davis',
          category: 'Yoga & Pilates',
          experience: '10 years experience',
          certification: 'RYT-500',
        },
      ]
    }
  }
}
</script>

<style scoped>


.experts-card .flex-grow {
  flex: 1;
}

@media (max-width: 768px) {
  .experts-card {
    min-height: auto;
  }
}
</style>
