<template>
  <div>
    <SliderComponent />
    <CartComponent/>

  </div>
</template>

<script>
// Імпортуємо SliderComponent
import SliderComponent from '@/components/SliderComponent.vue';
import CartComponent from '@/components/CartComponent.vue';

export default {
  components: {
    SliderComponent,  // реєструємо компонент для використання
    CartComponent,
  },
};
</script>

<style scoped>
/* Ваші стилі */
</style>
