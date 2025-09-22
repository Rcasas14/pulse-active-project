<template>
  <section class="faq-section font-plus-jakarta py-16 lg:py-24 bg-white">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="text-center mb-12">
        <h2 class="text-4xl lg:text-5xl font-bold text-black mb-6">
          Frequently Asked Questions
        </h2>
        <p class="text-slate-600 text-lg leading-relaxed max-w-3xl mx-auto">
          Got questions? We've got answers! Find quick solutions to common questions about our gym, classes, and membership options.
        </p>
      </div>

      <!-- FAQ Items -->
      <div class="space-y-4">
        <div
          v-for="(faq, index) in faqItems"
          :key="index"
          class="faq-item bg-slate-50 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
        >
          <!-- Question -->
          <button
            @click="toggleFAQ(index)"
            class="w-full px-6 py-6 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-[#26C5D9] focus:ring-inset"
            :class="{ 'bg-slate-100': openItems.includes(index) }"
          >
            <span class="text-lg font-semibold text-black pr-4">{{ faq.question }}</span>
            <div class="flex-shrink-0 ml-4">
              <svg
                class="w-6 h-6 text-[#26C5D9] transform transition-transform duration-300"
                :class="{ 'rotate-180': openItems.includes(index) }"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </div>
          </button>

          <!-- Answer -->
          <div
            v-show="openItems.includes(index)"
            class="px-6 pb-6 pt-0"
          >
            <div class="border-t border-slate-200 pt-4">
              <p class="text-slate-600 leading-relaxed">{{ faq.answer }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Contact CTA -->
      <div class="text-center mt-12">
        <p class="text-slate-600 mb-6">Still have questions? We're here to help!</p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#contact-form"
            class="inline-flex items-center px-6 py-3 bg-[#26C5D9] text-white font-semibold rounded-xl hover:bg-[#20B2C4] transition-all duration-300 transform hover:scale-[1.02] focus:ring-4 focus:ring-[#26C5D9]/30 focus:outline-none"
          >
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-3.582 8-8 8a8.955 8.955 0 01-4.446-1.21L3 21l2.21-5.446A8.955 8.955 0 013 12a8 8 0 018-8c4.418 0 8 3.582 8 8z"></path>
            </svg>
            Contact Us
          </a>
          <a
            href="tel:(555) 123-PULSE"
            class="inline-flex items-center px-6 py-3 border-2 border-[#26C5D9] text-[#26C5D9] font-semibold rounded-xl hover:bg-[#26C5D9] hover:text-white transition-all duration-300 transform hover:scale-[1.02] focus:ring-4 focus:ring-[#26C5D9]/30 focus:outline-none"
          >
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
            </svg>
            Call Us
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'FaqSection',

  data() {
    return {
      openItems: [], // Track which FAQ items are open
      faqItems: [
        {
          question: "What are your gym hours?",
          answer: "We're open Monday-Friday 5:00 AM - 11:00 PM, Saturday 6:00 AM - 10:00 PM, and Sunday 7:00 AM - 9:00 PM. Premium and Elite members get 24/7 access!"
        },
        {
          question: "Do I need to book classes in advance?",
          answer: "Yes, we recommend booking classes in advance through our mobile app or website. This ensures your spot and helps us maintain optimal class sizes for the best experience."
        },
        {
          question: "What should I bring for my first visit?",
          answer: "Bring comfortable workout clothes, athletic shoes, a water bottle, and a towel. We provide lockers and basic amenities. Don't forget to bring a valid ID for membership sign-up!"
        },
        {
          question: "Can I pause or cancel my membership?",
          answer: "Yes! You can pause your membership for up to 3 months or cancel with 30 days notice. Contact our front desk or chat with me for assistance with membership changes."
        },
        {
          question: "Do you offer personal training sessions?",
          answer: "Absolutely! We have certified personal trainers available for one-on-one sessions. Premium members get one session included monthly, and Elite members get unlimited sessions."
        },
        {
          question: "Is there parking available?",
          answer: "Yes, we have free parking available for all members. The parking lot is located right next to our main entrance for your convenience."
        }
      ]
    }
  },

  methods: {
    toggleFAQ(index) {
      const itemIndex = this.openItems.indexOf(index);

      if (itemIndex > -1) {
        // Item is open, close it
        this.openItems.splice(itemIndex, 1);
      } else {
        // Item is closed, open it
        this.openItems.push(index);
      }
    }
  }
}
</script>

<style scoped>
/* FAQ Item transitions */
.faq-item {
  transition: all 0.3s ease;
}

/* Smooth expand/collapse animation */
.faq-answer {
  transition: max-height 0.3s ease-out, opacity 0.3s ease-out;
  overflow: hidden;
}

/* Focus states for better accessibility */
button:focus {
  outline: none;
}

/* Hover effects */
.faq-item:hover {
  transform: translateY(-2px);
}

/* Mobile responsive adjustments */
@media (max-width: 768px) {
  .faq-section {
    padding: 3rem 0;
  }

  .faq-item button {
    padding: 1.25rem 1rem;
  }

  .faq-item .px-6 {
    padding-left: 1rem;
    padding-right: 1rem;
  }

  /* Stack buttons vertically on mobile */
  .flex-col.sm\\:flex-row {
    gap: 0.75rem;
  }

  /* Full width buttons on mobile */
  .flex-col.sm\\:flex-row a {
    width: 100%;
    justify-content: center;
  }
}

@media (max-width: 640px) {
  .faq-section {
    padding: 2rem 0;
  }

  /* Smaller text on mobile */
  .faq-item button span {
    font-size: 1rem;
    line-height: 1.5;
  }

  /* Adjust header spacing */
  .text-center.mb-12 {
    margin-bottom: 2rem;
  }

  .text-center.mt-12 {
    margin-top: 2rem;
  }
}

/* Animation for smooth content reveal */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.faq-item .px-6.pb-6.pt-0 {
  animation: fadeInUp 0.3s ease-out;
}

/* Icon rotation animation */
.transform.transition-transform {
  transition: transform 0.3s ease;
}
</style>