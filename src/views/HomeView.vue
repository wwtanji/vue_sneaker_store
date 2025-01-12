<template>
  <div>
    <SliderComponent />
    <SliderTwoComponent/>
    <CartComponent/>
  </div>
</template>

<script>
// Імпортуємо SliderComponent
import SliderComponent from '@/components/SliderComponent.vue';
import SliderTwoComponent from '@/components/SliderTwoComponent.vue';
import CartComponent from '@/components/CartComponent.vue';
export default {
  components: {
    SliderComponent,  // реєструємо компонент для використання
    SliderTwoComponent,
    CartComponent,
  },
};
</script>

<style scoped>
/* Ваші стилі */
</style>
