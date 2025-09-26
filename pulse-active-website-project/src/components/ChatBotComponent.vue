<template>

  <div class="chat-head fixed bottom-8 md:bottom-8 md:right-8  sm:bottom-6 sm:right-6 z-[1000]">
    <button class="w-[60px] h-[60px] text-white border-none flex items-center justify-center shadow-[0_4px_20px_rgba(38,197,217,0.3)] bg-[#0088FF] rounded-full transition-all duration-300 ease-in-out hover:scale-110
                    hover:shadow-[0_6px_25px_rgba(38,197,217,0.4)] animate-pulse sm:w-[60px] sm:h-[60px] cursor-pointer"
                    @click="openModal()">
      <img :src="chatBubble" alt="" class="w-5 h-5 text-white">
    </button>
  </div>


  <!-- Chat Bot Modal -->
   <div class="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center"
        v-show="showModal">

          <div class="fixed inset-0 bg-black/70 transition-opacity"></div>

      <!-- Modal content -->
       <div @click.stop class="relative bg-white h-auto rounded-lg  shadow-xl w-[450px]">

        <!-- Modal Header -->
        <div class="header flex items-center justify-between gap-2 mb-4 flex-row w-full bg-[#0088FF] p-4 rounded-tl-lg rounded-tr-lg">
          <div class="w-[45px] h-[45px] bg-[#1a94ff] flex items-center justify-center rounded-full">
            <img :src="chatBubble" class="w-6 h-6" alt="">
          </div>
          <div class="flex-1">
            <p class="text-white font-semibold">Jimmy</p>
            <p class="text-slate-100 text-sm">Virtual Assistant</p>
          </div>
          <div class="close-icon text-white cursor-pointer rounded-sm p-2 hover:text-black hover:bg-slate-100/40 transition-all duration-300 ease-in-out" @click="closeModal">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x-icon lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
          </div>
        </div>

        <!-- Modal Body -->
        <div class="flex-1 bg-gray-50 rounded p-4 max-h-[400px] h-[400px] overflow-y-auto">
          <div class="h-auto flex flex-col gap-y-4">
            <div class="chat-bot-response flex flex-wrap justify-start items-center w-full ">
              <p  v-for="(botMessage, botIndex) in botMessage"
                  :key="botIndex"
                  class="text-black bg-slate-200 text-[14px] lg:max-w-[350px] p-4 rounded-[20px]">{{ botMessage }}</p>
            </div>
            <div class="user-response flex flex-wrap flex-col w-full justify-end items-end gap-y-2 ">
              <p  v-for="(message, chatIndex) in chatMessage"
                  :key="chatIndex"
                  class="text-white text-[14px] lg:max-w-[350px] p-4 rounded-[20px] "
                  :class="message.length ? 'bg-[#0088FF]' : 'bg-transparent'">{{ message }}</p>
            </div>
          </div>
        </div>

        <!-- Modal Footer -->
         <div class="footer flex flex-col items-center justify-between gap2 py-4">
          <div class="flex flex-row gap-x-4 w-full px-4 relative">
            <input
              class="w-full h-[50px] border  rounded-lg px-4 py-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#6155F5] transition-colors"
              type="text"
              v-model="inputValue"
              placeholder="Type Your Message..."
              @keyup.enter="handleSend"
              >
              <div v-if="showError" class="text-red-500 font-semibold text-sm p-2 absolute bottom-2 right-20">
                {{ errorMessage }}
              </div>
            <div class="w-[46px] h-[40px] bg-[#1a94ff] flex items-center justify-center rounded-[20px] pr-[2px] cursor-pointer hover: transition-all duration-300 ease-in-out" @click="handleSend()">
            <img :src="sendIcon" class="w-6 h-6" alt="">
          </div>
          </div>
         </div>

       </div>


    </div>

</template>

<script>
import { useMotion } from '@vueuse/motion';
import axios from 'axios';
//import ref from 'vue';

export default {
  name: 'ChatBotComponent',
  mixins: [useMotion],

  data() {
    return {
      chatBubble: new URL('@/assets/chat-head.svg', import.meta.url).href,
      sendIcon: new URL('@/assets/send-icon.svg', import.meta.url).href,

      showModal : false,
      inputValue: '',
      saveValue: '',

      showBotMessage: false,
      showUserMessage: false,
      showError: false,
      errorMessage: '',
      chatMessage: [],
      botMessage:[],

      isLoading: false,
    }
  },
  methods: {
    toggleChat(){
      console.log('toggle chat clicked!')
    },
    openModal(){
      this.showModal = true
    },
    closeModal(){
      this.showUserMessage = false
      this.showBotMessage = false
      this.showModal = false
      this.showError = false;
      this.errorMessage = '';
      // this.chatMessage.length = 0
    },
    saveAndClose(){
      this.saveValue = this.inputValue
      this.closeModal()
      this.inputValue = ''
    },
    handleEscape(event){
      if(event.key === 'Escape' && this.showModal){
        this.closeModal()
      }
    },
    async handleSend(){
      // Reset error state
      this.showError = false;
      this.errorMessage = '';

    // Validate input
    if (!this.inputValue || this.inputValue.trim() === '') {
      this.showError = true;
      this.errorMessage = 'Required!';
      return;
    }

      const userText = this.inputValue.trim()

      this.chatMessage.push(userText)
      this.inputValue = ''
      console.log(this.chatMessage)

      this.isLoading = true

      try {
        const payload = {text: userText, source: 'vue-client'}

        const response = await axios.post(import.meta.env.VITE_WEBHOOK_LINK_TEST, payload, {
          headers: {"Content-Type": 'application/json'},
          timeout: 3000
        })

        let botReply = ''
        if (typeof response.data === 'string') {
          botReply = response.data
        } else if (response.data.message) {
          botReply = response.data.message
        } else {
          botReply = JSON.stringify(response.data)
        }

        this.botMessage.push(botReply)

      } catch (err) {
        console.error('Webhook error:', err)
        this.botMessage.push('⚠️ Error talking to server: ' + err.message)
      } finally {
        this.isLoading = false
      }

      // return this.userText

  },
  mounted() {
    // Add escape key listener when component mounts
    document.addEventListener('keydown', this.handleEscape);
    //document.addEventListener('keydown', this.handleEnter);
  },
  beforeUnmount() {
    // Clean up event listener when component unmounts
    document.removeEventListener('keydown', this.handleEscape);
    //document.removeEventListener('keydown', this.handleEnter);
    this.chatMessage.length = 0
  }
 }

}
</script>

<style scoped>


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

@keyframes custom-pulse {
  0%, 100% {
    box-shadow: 0 4px 20px rgba(38, 197, 217, 0.3);
  }
  50% {
    box-shadow: 0 4px 20px rgba(38, 197, 217, 0.6);
  }
}

.custom-pulse {
  animation: custom-pulse 2s infinite;
}
</style>
