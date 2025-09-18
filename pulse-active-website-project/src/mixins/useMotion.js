export const useMotion = {
  methods: {
    getSlideUpMotion(delay = 0) {
      return {
        initial: {
          y: 50,
          opacity: 0
        },
        enter: {
          y: 0,
          opacity: 1,
          transition: {
            delay: delay,
            duration: 600,
            ease: "easeOut"
          }
        }
      }
    }
  }
}