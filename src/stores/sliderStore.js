// stores/sliderStore.js
import { defineStore } from 'pinia';  // or 'vuex'

export const useSliderStore = defineStore('slider', {
  state: () => ({
    currentIndex: 0,  // Ensure it's initialized
  }),
  actions: {
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % 5;  // assuming 5 slides
    },
    prevSlide() {
      this.currentIndex = (this.currentIndex - 1 + 5) % 5;  // assuming 5 slides
    },
    goToSlide(index) {
      this.currentIndex = index;
    }
  }
});
