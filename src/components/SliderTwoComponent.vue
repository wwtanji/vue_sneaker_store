<template>
  <div class="w-full relative">
    <!-- Текст Novinky зліва -->
    <div class="absolute top-4 left-4 text-2xl font-bold text-black">
      Novinky
    </div>

    <swiper
      :centeredSlides="true"
      :loop="true"
      :spaceBetween="30"
      :slidesPerView="slidesPerView"
      :pagination="{
        el: '.swiper-pagination',
        clickable: true
      }"
      class="centered-slide-carousel"
    >
      <swiper-slide v-for="(slide, index) in slides" :key="slide.id">
        <div class="bg-indigo-70 rounded-2xl h-80 flex justify-center items-center relative">
          <!-- Використовуємо тег img для зображення з рамкою -->
          <img
            :src="slide.image"
            :alt="'Slide ' + (index + 1)"
            :id="'slide-' + slide.id"
            class="object-cover w-full h-full rounded-2xl border-2 border-gray-300 transition-all hover:border-blue-700 hover:shadow-lg cursor-pointer"
            @click="onImageClick(index)"
          />
        </div>

        <!-- Додатковий опис під зображенням -->
        <div class="text-center mt-4">
          <h3 class="text-lg font-semibold text-black">{{ slide.title }}</h3>
          <p class="text-sm text-gray-600">{{ slide.description }}</p>
        </div>
      </swiper-slide>

      <!-- Pagination -->
      <div class="swiper-pagination"></div>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper-bundle.css';  // Імпортуємо стилі правильно

export default {
  name: 'SwiperComponent',
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      slides: [
        { id: 1, image: '/img/rb_1652.png' },  // Перше зображення
        { id: 2, image: '/img/rb_1652.png' },  // Друге зображення
        { id: 3, image: '/img/rb_1652.png'},
        { id: 4, image: '/img/rb_1652.png' },
        { id: 5, image: '/img/rb_1652.png' },
        { id: 6, image: '/img/rb_1652.png'},
      ],
    };
  },
  methods: {
    // Дія при натисканні на зображення
    onImageClick(index) {
      alert(`Clicked on image ${index + 1}`);
      // Ви можете замінити alert на свою логіку, наприклад:
      // this.$router.push({ name: 'productDetails', params: { id: this.slides[index].id } });
    }
  },
  computed: {
    slidesPerView() {
      return {
        1920: 4,
        1028: 2,
        990: 1,
      }[window.innerWidth] || 1;
    }
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
  background: #4F46E5;
}

.swiper-pagination-bullet-active {
  background: #4F46E5 !important;
}

img {
  object-fit: cover; /* Забезпечує гарне відображення зображень без деформації */
}

.cursor-pointer {
  cursor: pointer; /* Додаємо стиль для клікабельних зображень */
}

/* Стилі для зображень через ID або класи */
#slide-1 {
  max-height: 70%;
}

#slide-2 {
  max-height: 70%;
}

#slide-3 {
  max-height: 70%;
}

#slide-4 {
  max-height: 70%;
}

#slide-5 {
  max-height: 70%;
}

#slide-6 {
  max-height: 70%;
}
</style>
