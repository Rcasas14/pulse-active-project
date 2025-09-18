<template>
  <div
    id="home"
    class="h-full bg-cover bg-center bg-no-repeat relative min-h-screen"
    :style="{
      backgroundImage: `url(${heroImage})`,
      backgroundAttachment: 'fixed',
    }"
  >

  <div class="jimmy-bot">

  </div>

    <section class="hero-section min-h-screen font-plus-jakarta grid place-items-center relative">
      <div class="hero-container w-full flex flex-col justify-center items-center text-center mx-auto">
        <h1 class="font-extrabold text-white text-3xl xs:text-[40px] sm:text-4xl md:text-5xl lg:text-6xl xl:text-[80px] 2xl:text-[82px] leading-tight drop-shadow-lg">Transform Your</h1>
        <h1 class=" font-extrabold text-[#f97316] text-3xl xs:text-[40px] sm:text-4xl md:text-5xl lg:text-6xl xl:text-[80px] 2xl:text-[82px] leading-tight drop-shadow-lg">Body & Mind</h1>
        <p class="description text-center text-white font-semibold text-2xl max-w-[925px]">Join Pulse Active Gym and discover your strongest self with state-of-the-art equipment, expert trainers, and a supportive community.</p>
        <div class="cta-buttons flex flex-row py-4 gap-x-4">
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


</template>

<script>


import { useMotion } from '@/mixins/useMotion.js'

export default {
  name: 'MainPage',
  mixins: [ useMotion ],

  components: {

  },
  data() {
    return {
      heroImage: new URL('@/assets/hero-image.jpg', import.meta.url).href,

    }
  }
}
</script>

<style scoped>
/* Additional responsive background handling */
#home {
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
}

/* Decorative elements responsive positioning */

@media (min-width: 641px) and (max-width: 768px) {
  /* Adjust positioning for tablet sizes */
  .el-absolute:nth-of-type(1) { /* Top Left Asterisk */
    top: 1rem;
    left: 1rem;
  }

  .el-absolute:nth-of-type(2) { /* Top Right Grid Dots */
    top: 1rem;
    right: 1rem;
  }

  .el-absolute:nth-of-type(3) { /* Bottom Left Grid Dots */
    bottom: 8rem;
    left: 1rem;
  }

  .el-absolute:nth-of-type(4) { /* Bottom Right Asterisk */
    bottom: 1rem;
    right: 1rem;
  }
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

/* Fixed button hover effect */
.fixed-btn a:hover {
  background-color: #f5d943;
  transition: all 0.3s ease;
}

/* Add subtle animations to decorative elements */
.el-absolute img[alt*="decorative"] {
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.el-absolute img[alt*="decorative"]:hover {
  transform: scale(1.05);
}
</style>
