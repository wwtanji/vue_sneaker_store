<template>
  <div>
    <SliderComponent />
    <LittleCartComponent/>
  </div>
</template>

<script>
// Імпортуємо SliderComponent
import SliderComponent from '@/components/SliderComponent.vue';
import LittleCartComponent from '@/components/SliderTwoCompinent.vue';

export default {
  components: {
    SliderComponent,  // реєструємо компонент для використання
    LittleCartComponent,
  },
};
</script>

<style scoped>
/* Ваші стилі */
</style>
