// stores/sliderStore.js
import { defineStore } from 'pinia';

export const useSliderStore = defineStore('slider', {
  state: () => ({
    slides: [
      { src: "/img/white-sneakers.png", alt: "Slide 1" },
      { src: "/img/rb_1639.png", alt: "Slide 2" },
      { src: "/img/rb_1650.png", alt: "Slide 3" },
      { src: "/img/rb_1651_3gen.png", alt: "Slide 4" },
      { src: "/img/jordan.png", alt: "Slide 5" }
    ],
    currentIndex: 0,
  }),
  actions: {
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.slides.length;
    },
    prevSlide() {
      this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
    },
    goToSlide(index) {
      this.currentIndex = index;
    },
    handleClick(index) {
      alert(`You clicked on: ${this.slides[index].alt}`);
    },
  },
});
