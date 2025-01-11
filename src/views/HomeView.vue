<template>
  <div>
    <SliderComponent />
    <SliderTwoComponent/>
  </div>
</template>

<script>
// Імпортуємо SliderComponent
import SliderComponent from '@/components/SliderComponent.vue';
import SliderTwoComponent from '@/components/SliderTwoComponent.vue';
export default {
  components: {
    SliderComponent,  // реєструємо компонент для використання
    SliderTwoComponent,
  },
};
</script>

<style scoped>
/* Ваші стилі */
</style>
