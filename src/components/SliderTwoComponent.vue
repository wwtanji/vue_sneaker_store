<template>
  <div class="w-full relative">
    <div class="swiper multiple-slide-carousel swiper-container relative">
      <div class="swiper-wrapper mb-16">
        <!-- Slide with Image -->
        <div class="swiper-slide">
          <div class="bg-indigo-50 rounded-2xl h-96 flex justify-center items-center">
            <img class="object-cover rounded-2xl w-full h-full" src="/img/rb_nike.png" alt="Sneaker 1" />
          </div>
        </div>
        <div class="swiper-slide">
          <div class="bg-indigo-50 rounded-2xl h-96 flex justify-center items-center">
            <img class="object-cover rounded-2xl w-full h-full" src="/img/rb_nike.png" alt="Sneaker 2" />
          </div>
        </div>
        <div class="swiper-slide">
          <div class="bg-indigo-50 rounded-2xl h-96 flex justify-center items-center">
            <img class="object-cover rounded-2xl w-full h-full" src="/img/rb_nike.png" alt="Sneaker 3" />
          </div>
        </div>
        <div class="swiper-slide">
          <div class="bg-indigo-50 rounded-2xl h-96 flex justify-center items-center">
            <img class="object-cover rounded-2xl w-full h-full" src="/img/rb_nike.png" alt="Sneaker 4" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper';
import 'swiper/css';  // Import Swiper styles in this way should work with Vite

export default {
  mounted() {
    new Swiper('.multiple-slide-carousel', {
      loop: true,
      slidesPerView: 3,
      spaceBetween: 30,  // Space between slides
      navigation: false,
      grabCursor: true,
      simulateTouch: true,
      touchRatio: 1.5,
      breakpoints: {
        1920: {
          slidesPerView: 3,
          spaceBetween: 30,  // Adjusted space for larger screens
        },
        1028: {
          slidesPerView: 2,
          spaceBetween: 20,  // Adjusted space for mid-range screens
        },
        990: {
          slidesPerView: 1,
          spaceBetween: 10,  // Adjusted space for smaller screens
        },
      },
    });
  },
};
</script>

<style scoped>
.swiper-wrapper {
  width: 100%;
  height: max-content !important;
  padding-bottom: 64px !important;
  -webkit-transition-timing-function: linear !important;
  transition-timing-function: linear !important;
  position: relative;
}

.swiper-pagination-bullet {
  background: #4f46e5;
}

.swiper-slide {
  border: 2px solid #4f46e5;  /* Border between slides */
  border-radius: 1rem;  /* Rounded borders */
  display: flex;  /* Ensures the content is centered */
}

.swiper-slide img {
  object-fit: cover; /* Ensures images are cropped appropriately */
  width: 100%;
  height: 100%;
  border-radius: 1rem;
}

/* Ensure the grab cursor is only on the slides, not the spaces between */
.swiper-slide:hover {
  cursor: grab;  /* Grab cursor on hover */
}
</style>
