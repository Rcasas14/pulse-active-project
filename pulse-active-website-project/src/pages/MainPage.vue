<template>
  <div
    id="home"
    class="h-full bg-cover bg-center bg-no-repeat relative min-h-screen "
    :style="{
      backgroundImage: `url(${heroImage})`,
      backgroundAttachment: 'fixed',
    }"
  >

  <chat-bot-component></chat-bot-component>

    <section class="hero-section min-h-screen font-plus-jakarta grid place-items-center relative px-3">
      <div class="hero-container w-full flex flex-col justify-center items-center text-center mx-auto">
        <h1 v-motion="getScrollSlideUpMotionBounce(330)" class="font-extrabold text-white text-3xl xs:text-[40px] sm:text-4xl text-4xl md:text-5xl lg:text-6xl xl:text-[80px] 2xl:text-[82px] leading-tight drop-shadow-lg">Transform Your</h1>
        <h1 v-motion="getScrollSlideUpMotionBounce(330)" class=" font-extrabold text-[#f97316] text-3xl xs:text-[40px] sm:text-4xl md:text-5xl lg:text-6xl xl:text-[80px] 2xl:text-[82px] leading-tight drop-shadow-lg">Body & Mind</h1>
        <p v-motion="getScrollSlideUpMotionBounce(360)" class="description text-center text-white font-semibold text-md lg:text-2xl max-w-[925px]">Join Pulse Active Gym and discover your strongest self with state-of-the-art equipment, expert trainers, and a supportive community.</p>
        <div v-motion="getScrollSlideUpMotionBounce(350)" class="cta-buttons flex flex-col lg:flex-row py-4 gap-4">
          <button class="px-8 py-2 text-[18px] bg-[#f97316] rounded-full text-sm font-extrabold transition-colors cursor-pointer text-white hover:bg-slate-600">
            Start Your Journey
          </button>
          <button class="px-8 py-2 text-[18px] bg-white rounded-full text-sm font-extrabold transition-colors cursor-pointer text-black hover:bg-gray-100">
            View Classes
          </button>
        </div>
      </div>

    </section>
  </div>
<feature-section></feature-section>
<classes-section></classes-section>
<membership-section></membership-section>
<experts-section></experts-section>
<testimonial-section></testimonial-section>
<contact-form-section></contact-form-section>
<faq-section></faq-section>

</template>

<script>

import FeatureSection from '@/sections/FeatureSection.vue';
import ClassesSection from '@/sections/ClassesSection.vue';
import MembershipSection from '@/sections/MembershipSection.vue';
import ExpertsSection from '@/sections/ExpertsSection.vue';
import TestimonialSection from '@/sections/TestimonialSection.vue';
import ContactFormSection from '@/sections/ContactFormSection.vue';
import FaqSection from '@/sections/FaqSection.vue'

import ChatBotComponent from '@/components/ChatBotComponent.vue';

import { useMotion } from '@/mixins/useMotion.js'

export default {
  name: 'MainPage',
  mixins: [ useMotion ],

  components: {
    FeatureSection,
    ClassesSection,
    MembershipSection,
    ExpertsSection,
    TestimonialSection,
    ContactFormSection,
    FaqSection,
    ChatBotComponent
  },
  data() {
    return {
      heroImage: new URL('@/assets/hero-image.jpg', import.meta.url).href,

    }
  },

}
</script>

<style scoped>
/* Additional responsive background handling */
#home {
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
}


/* Extra small devices (mobile) */
@media (max-width: 374px) {
  #home {
    background-attachment: scroll;
    background-size: cover;
    background-position: center 35%;
  }

  .hero-container {
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
  }
}

/* XS devices - 375px+ */
@media (min-width: 375px) and (max-width: 639px) {
  #home {
    background-attachment: scroll; /* Better performance on mobile */
    background-size: cover;
    background-position: center 25%;
  }

  .hero-container {
    padding-top: 2rem;
    padding-bottom: 2rem;
  }
  .hero-title{
    font-size: 2.5rem;
    margin: .625rem 0;
  }
}

/* SM devices - 640px+ */
@media (min-width: 640px) and (max-width: 767px) {
  #home {
    background-attachment: scroll;
    background-size: cover;
    background-position: center 20%;
  }
}

/* MD devices - 768px+ */
@media (min-width: 768px) and (max-width: 1023px) {
  #home {
    background-attachment: scroll;
    background-size: cover;
    background-position: center center;
  }
  .hero-title{
    margin: 2.125rem 0;
  }

}

/* LG devices and above - 1024px+ */
@media (min-width: 1024px) {
  #home {
    background-attachment: fixed; /* Parallax effect for larger screens */
    background-size: cover;
    background-position: center center;
  }
  .hero-title{
    margin: 2.875rem 0;
  }
}

/* XL devices - 1280px+ */
@media (min-width: 1280px) {
  #home {
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
  }
}

/* Ensure content doesn't get cut off on short screens */
@media (max-height: 600px) {
  .hero-section {
    min-height: 100vh;
    padding: 2rem 0;
  }
}

/* Ultra-wide screens - 4xl+ */
@media (min-width: 1920px) {
  #home {
    background-position: center center;
    background-size: cover;
  }
}

</style>
