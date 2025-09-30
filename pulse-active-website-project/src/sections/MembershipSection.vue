<template>
  <section id="membership" class="membership-section font-plus-jakarta py-16 lg:py-24 bg-slate-100">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col text-center justify-center items-center gap-y-6 mb-12">
        <h2 class="text-4xl font-bold">Membership Packages</h2>
        <p class="text-slate-700 text-lg">Choose the perfect membership plan that fits your lifestyle and fitness goals.</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 relative">
        <div v-for="(plan, index) in membershipPlans"
             :key="index"
             class="membership-card premium-card standard-card flex flex-col items-center bg-white rounded-[20px] shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-shadow duration-300  overflow-hidden"
             :class="[
                      { 'border-2 border-[#26C5D9]': plan.popular },
                      { '!min-h-[600px]': plan.name === 'Premium' }
                      ]">

          <!-- Most Popular Badge -->
          <div v-if="plan.popular" class="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
            <span class="bg-[#26C5D9] text-white py-2 px-6 rounded-full text-sm font-medium">Most Popular</span>
          </div>

          <div class="flex flex-col h-full p-8 pt-12 w-full">
            <!-- Plan Header -->
            <div class="text-center mb-8">
              <h3 class="text-2xl font-bold text-black mb-4">{{ plan.name }}</h3>
              <div class="flex items-baseline justify-center mb-6">
                <span class="text-4xl font-bold" :class="plan.priceColor">${{ plan.price }}</span>
                <span class="text-slate-600 ml-2">per month</span>
              </div>
            </div>

            <!-- Features List -->
            <div class="flex-grow">
              <ul class="space-y-4 mb-8">
                <li v-for="(feature, featureIndex) in plan.features"
                    :key="featureIndex"
                    class="text-slate-600 text-center">
                  {{ feature }}
                </li>
              </ul>
            </div>

            <!-- CTA Button -->
            <div class="mt-auto ">
              <button class="w-full py-4 rounded-[20px] font-medium text-white transition-all duration-300 hover:opacity-90 cursor-pointer"
                      :class="plan.buttonClass">
                Choose Plan
              </button>
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
  name: 'MembershipSection',
  mixins: [useMotion],

  data() {
    return {
      membershipPlans: [
        {
          name: 'Basic',
          price: '29',
          priceColor: 'text-slate-800',
          popular: false,
          buttonClass: 'bg-slate-800 hover:bg-slate-700',
          features: [
            'Gym Access',
            'Basic Equipment',
            'Locker Room',
            'Mobile App'
          ]
        },
        {
          name: 'Premium',
          price: '59',
          priceColor: 'text-[#26C5D9]',
          popular: true,
          buttonClass: 'bg-[#26C5D9] hover:bg-[#20B2C4]',
          features: [
            'Everything in Basic',
            'Group Classes',
            'Personal Training Session',
            'Nutrition Consultation',
            '24/7 Access'
          ]
        },
        {
          name: 'Elite',
          price: '99',
          priceColor: 'text-[#FF6B9D]',
          popular: false,
          buttonClass: 'bg-[#FF6B9D] hover:bg-[#FF5A8E]',
          features: [
            'Everything in Premium',
            'Unlimited Personal Training',
            'Meal Planning',
            'Recovery Services',
            'Guest Passes'
          ]
        }
      ]
    }
  }
}
</script>

<style scoped>


.membership-card .flex-grow {
  flex: 1;
}

@media (max-width: 768px) {
  .membership-card {
    min-height: auto;
  }
}
</style>
