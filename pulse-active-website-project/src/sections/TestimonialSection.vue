<template>
  <section class="testimonials-section py-16 lg:py-24 font-plus-jakarta bg-slate-100">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header Section (unchanged) -->
      <div v-motion="getScrollSlideUpMotionBounce(230)" class="text-center mb-12 lg:mb-16">
        <h2 v-motion="getScrollSlideUpMotionBounce(330)" class="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-8 leading-tight max-w-4xl mx-auto">
          What Our Members Say
        </h2>

        <p v-motion="getScrollSlideUpMotionBounce(360)" class="text-gray-600 text-lg mb-12 max-w-3xl mx-auto leading-relaxed">
          Real stories from real people who transformed their lives at Pulse Active Gym.
        </p>
      </div>

      <!-- Testimonials Carousel with Auto-play -->
      <div v-motion="getScrollFadeInMotion(800)"
        class="testimonials-carousel overflow-hidden"
        @mouseenter="pauseAutoplay"
        @mouseleave="resumeAutoplay"
      >
        <swiper
          :modules="modules"
          :slides-per-view="1"
          :space-between="24"
          :breakpoints="{
            375: {
              slidesPerView: 1,
              spaceBetween: 16
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 24
            },
          }"
          :autoplay="{
            delay: 1,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
          }"
          :navigation="false"
          :pagination="false"
          :loop="true"
          :centered-slides="false"
          :speed="6000"
          :allow-touch-move="false"
          :free-mode="true"
          :free-mode-momentum="false"
          class="testimonials-swiper"
          @swiper="onSwiper"
          @slide-change="onSlideChange"
        >
          <swiper-slide
            v-for="(testimonial, index) in testimonials"
            :key="index"
          >
            <div class="testimonial-card bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 h-full shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <!-- Star Rating -->
              <div class="flex gap-1 mb-4">
                <img
                  v-for="star in 5"
                  :key="star"
                  :src="starIcon"
                  alt="Star"
                  class="w-5 h-5 text-yellow-400"
                  :style="{ filter: 'brightness(0) saturate(100%) invert(77%) sepia(58%) saturate(348%) hue-rotate(8deg) brightness(108%) contrast(104%)' }"
                >
              </div>

              <!-- Testimonial Text -->
              <blockquote class="text-gray-900 font-semibold text-base sm:text-lg leading-relaxed mb-6">
                "{{ testimonial.text }}"
              </blockquote>

              <!-- User Info -->
              <div class="flex items-center gap-3">

                <div class="flex-1">
                  <div class="flex items-center gap-2">
                    <h4 class="font-bold text-gray-900 text-sm sm:text-base">{{ testimonial.name }}</h4>
                    <img
                      v-if="testimonial.verified"
                      :src="verifiedIcon"
                      alt="Verified"
                      class="w-4 h-4"
                      :style="{ filter: 'brightness(0) saturate(100%) invert(77%) sepia(58%) saturate(348%) hue-rotate(8deg) brightness(108%) contrast(104%)' }"
                    >
                  </div>
                  <p class="text-gray-500 text-xs sm:text-sm">{{ testimonial.role }}</p>
                </div>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { useMotion } from '@/mixins/useMotion.js'

export default {
  name: 'TestimonialsSection',
  mixins: [ useMotion ],
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      swiperInstance: null,
      modules: [Navigation, Pagination, Autoplay],
      // Icons
      starIcon: new URL('@/assets/star-icon.svg', import.meta.url).href,


      // Testimonials data
      testimonials: [
        {
          text: "Pulse Active completely changed my approach to fitness. The trainers are amazing and the community is so supportive!",
          name: "Alice Smith",
          role: "Travel Vlogger",


        },
        {
          text: "I've tried many gyms, but none compare to Pulse Active. The variety of classes and flexible hours fit perfectly with my busy schedule.",
          name: "Lisa Chen",
          role: "Marketing Manager",


        },
        {
          text: "Lost 30 pounds and gained so much confidence. The personal training sessions were a game-changer for me.",
          name: "David Wilson",
          role: "Teacher",


        },
        {
          text: "Finally, a travel platform that gets it. The community vibes are immaculate and the recommendations are always on point.",
          name: "Jordan Taylor",
          role: "Content Creator",


        },
        {
          text: "The booking process is seamless and the destination insights are pure gold. Pulse Active knows exactly what travelers need.",
          name: "Sarah Wilson",
          role: "Digital Nomad",


        }
      ]
    }
  },
  methods: {
    onSwiper(swiper) {
      this.swiperInstance = swiper
    },
    onSlideChange() {
      // Handle slide change if needed
    },
    slideNext() {
      if (this.swiperInstance) {
        this.swiperInstance.slideNext()
      }
    },
    slidePrev() {
      if (this.swiperInstance) {
        this.swiperInstance.slidePrev()
      }
    },
    pauseAutoplay() {
      if (this.swiperInstance?.autoplay) {
        this.swiperInstance.autoplay.stop()
      }
    },
    resumeAutoplay() {
      if (this.swiperInstance?.autoplay) {
        this.swiperInstance.autoplay.start()
      }
    }
  }
}
</script>

<style scoped>

.testimonials-swiper {
  overflow: visible;
  padding-bottom: 2rem;
}

.testimonial-card {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.testimonial-card blockquote {
  flex-grow: 1;
}

.swiper-slide {
  height: auto;
  display: flex;
  flex-direction: column;
}

.testimonial-card {
  flex: 1;
}

/* Enhanced button hover effects */
@media (min-width: 1024px) {
  .testimonials-section button:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(26, 148, 255, 0.2);
  }
}
</style>
