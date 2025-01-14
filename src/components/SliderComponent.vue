<template>
  <div>
    <!-- Слайдер -->
    <div id="default-carousel" class="relative w-full" data-carousel="slide">
      <!-- Carousel wrapper -->
      <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
        <!-- Item -->
        <div v-for="(slide, index) in sliderStore.slides" :key="index"
          :class="['absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 duration-700 ease-in-out', { hidden: sliderStore.currentIndex !== index }]">
          <div class="flex justify-center items-center h-full">
            <img :src="slide.src"
              :alt="slide.alt"
              :id="'slide-image-' + index"
              class="w-auto max-h-full cursor-pointer"
              @click="handleClick(index)">
          </div>
        </div>
      </div>

      <!-- Slider indicators -->
      <div class="absolute z-30 flex -translate-x-1/2 bottom-8 left-1/2 space-x-3 rtl:space-x-reverse">
        <button v-for="(slide, index) in sliderStore.slides" :key="'indicator-' + index"
          @click="sliderStore.goToSlide(index)"
          :class="['w-3 h-3 rounded-full', { 'bg-gray-800': sliderStore.currentIndex === index, 'bg-gray-300': sliderStore.currentIndex !== index }]"
          type="button" :aria-label="'Slide ' + (index + 1)">
        </button>
      </div>

      <!-- Slider controls -->
      <button @click="sliderStore.prevSlide" type="button"
        class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-3 cursor-pointer group focus:outline-none">
        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-3 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg class="w-3 h-3 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l3 3"/>
          </svg>
          <span class="sr-only">Previous</span>
        </span>
      </button>
      <button @click="sliderStore.nextSlide" type="button"
        class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-3 cursor-pointer group focus:outline-none">
        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-3 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg class="w-3 h-3 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 3-3-3-3"/>
          </svg>
          <span class="sr-only">Next</span>
        </span>
      </button>
    </div>

    <!-- Кнопки під слайдером -->
    <div class="mt-10 flex justify-center space-x-8">
      <a href="/autenticita" class="btn-custom">
        <span>100% Autenticita</span>
      </a>
      <a href="/bezpecna-platba" class="btn-custom">
        <span>Bezpečná platba</span>
      </a>
      <a href="/doprava-cr-sr" class="btn-custom">
        <span>Doprava ČR & SR</span>
      </a>
      <a href="/online-podpora" class="btn-custom">
        <span>Online podpora</span>
      </a>
    </div>
  </div>
</template>

<script>
import { useSliderStore } from '@/stores/sliderStore';

export default {
  data() {
    return {
      sliderStore: useSliderStore(), // Ось тут ми використовуємо Pinia Store в Options API
    };
  },
  methods: {
    // Всі методи залишаються в компоненті як звичайні методи
    nextSlide() {
      this.sliderStore.nextSlide();
    },
    prevSlide() {
      this.sliderStore.prevSlide();
    },
    goToSlide(index) {
      this.sliderStore.goToSlide(index);
    },
    handleClick(index) {
      this.$router.push(`/product/${index + 1}`);
    }
  },
  mounted() {
    // Автоматичне перемикання слайдів кожні 5 секунд
    setInterval(() => {
      this.sliderStore.nextSlide();
    }, 5000); // кожні 5 секунд
  }
};
</script>

<style scoped>
.hidden {
  display: none;
}

img {
  object-fit: cover; /* Забезпечує гарний вигляд зображення в контейнері */
  cursor: pointer; /* Указатель мыши при наведении на изображение */
}

/* Унікальні стилі для кожного зображення */
#slide-image-0 {
  max-width: 15%;
  max-height: 15%;
}

#slide-image-1 {
  max-width: 15%;
  max-height: 15%;
}

#slide-image-2 {
  max-width: 30%;
  max-height: 30%;
}

#slide-image-3 {
  max-width: 15%;
  max-height: 15%;
}

#slide-image-4 {
  max-width: 15%;
  max-height: 15%;
}

#slide-image-5 {
  max-width: 15%;
  max-height: 15%;
}

/* Фон для всієї каруселі */
#default-carousel {
  background-size: cover;
  background-position: center;
}
</style>
