<template>
  <section id="contact" class="contact-form-section font-plus-jakarta py-16 lg:py-24 bg-slate-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

        <!-- Left Content -->
        <div class="space-y-8">
          <div>
            <h2 class="text-4xl lg:text-5xl font-bold text-black mb-6">
              Ready to Start Your Fitness Journey?
            </h2>
            <p class="text-slate-600 text-lg leading-relaxed mb-8">
              Join thousands of members who have already transformed their lives. Get in touch with us today and take the first step towards a healthier, stronger you.
            </p>
          </div>

          <!-- Contact Info -->
          <div class="space-y-6">
            <div class="flex items-start space-x-4">
              <div class="flex-shrink-0 w-12 h-12 bg-[#26C5D9] rounded-full flex items-center justify-center">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
              </div>
              <div>
                <h3 class="text-lg font-semibold text-black mb-1">Visit Us</h3>
                <p class="text-slate-600">123 Fitness Street, Active City, AC 12345</p>
              </div>
            </div>

            <div class="flex items-start space-x-4">
              <div class="flex-shrink-0 w-12 h-12 bg-[#26C5D9] rounded-full flex items-center justify-center">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
              </div>
              <div>
                <h3 class="text-lg font-semibold text-black mb-1">Call Us</h3>
                <p class="text-slate-600">(555) 123-PULSE</p>
              </div>
            </div>

            <div class="flex items-start space-x-4">
              <div class="flex-shrink-0 w-12 h-12 bg-[#26C5D9] rounded-full flex items-center justify-center">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              </div>
              <div>
                <h3 class="text-lg font-semibold text-black mb-1">Email Us</h3>
                <p class="text-slate-600">hello@pulseactive.com</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Content - Contact Form -->
        <div class="bg-white rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.08)] p-8 lg:p-10">
          <div class="mb-8">
            <h3 class="text-2xl lg:text-3xl font-bold text-black mb-2">Get Started Today</h3>
          </div>

          <form @submit.prevent="submitForm" class="space-y-6">
            <!-- Full Name -->
            <div>
              <label for="fullName" class="block text-sm font-medium text-black mb-3">
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                v-model="form.fullName"
                placeholder="Enter your full name"
                class="w-full px-4 py-4 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#26C5D9] focus:border-transparent outline-none transition-all duration-300 text-slate-700 placeholder-slate-400"
                required
              />
            </div>

            <!-- Email Address -->
            <div>
              <label for="email" class="block text-sm font-medium text-black mb-3">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                v-model="form.email"
                placeholder="Enter your email"
                class="w-full px-4 py-4 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#26C5D9] focus:border-transparent outline-none transition-all duration-300 text-slate-700 placeholder-slate-400"
                required
              />
            </div>

            <!-- Phone Number -->
            <div>
              <label for="phone" class="block text-sm font-medium text-black mb-3">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                v-model="form.phone"
                placeholder="Enter your phone number"
                class="w-full px-4 py-4 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#26C5D9] focus:border-transparent outline-none transition-all duration-300 text-slate-700 placeholder-slate-400"
                required
              />
            </div>

            <!-- Fitness Goals -->
            <div>
              <label for="fitnessGoals" class="block text-sm font-medium text-black mb-3">
                Fitness Goals
              </label>
              <textarea
                id="fitnessGoals"
                v-model="form.fitnessGoals"
                placeholder="Tell us about your fitness goals"
                rows="4"
                class="w-full px-4 py-4 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#26C5D9] focus:border-transparent outline-none transition-all duration-300 text-slate-700 placeholder-slate-400 resize-none"
                required
              ></textarea>
            </div>

            <!-- Submit Button -->
            <button
              type="submit"
              class="w-full py-4 px-6 bg-[#26C5D9] text-white font-semibold rounded-xl hover:bg-[#20B2C4] transition-all duration-300 transform hover:scale-[1.02] focus:ring-4 focus:ring-[#26C5D9]/30 focus:outline-none"
            >
              Get Free Consultation
            </button>
          </form>
        </div>

      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ContactFormSection',

  data() {
    return {
      form: {
        fullName: '',
        email: '',
        phone: '',
        fitnessGoals: ''
      }
    }
  },

  methods: {
    submitForm() {
      // Handle form submission
      console.log('Form submitted:', this.form);

      // Here you would typically send the data to your backend
      // For now, we'll just show a simple alert
      alert('Thank you for your interest! We\'ll get back to you soon.');

      // Reset form
      this.form = {
        fullName: '',
        email: '',
        phone: '',
        fitnessGoals: ''
      };
    }
  }
}
</script>

<style scoped>
/* Additional custom styles if needed */
.contact-form-section {
  min-height: auto;
}

/* Focus states for better accessibility */
input:focus,
textarea:focus {
  box-shadow: 0 0 0 3px rgba(38, 197, 217, 0.1);
}

/* Mobile responsive adjustments */
@media (max-width: 768px) {
  .contact-form-section {
    padding: 3rem 0;
  }

  .bg-white {
    margin-top: 2rem;
  }
}

@media (max-width: 640px) {
  .contact-form-section {
    padding: 2rem 0;
  }
}
</style>
