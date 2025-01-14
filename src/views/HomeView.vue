<template>
  <div>
    <BasketIcon />
    <SliderComponent />
    <CartComponent />
  </div>
</template>

<script>
// Імпортуємо SliderComponent
import SliderComponent from '@/components/SliderComponent.vue'
import CartComponent from '@/components/CartComponent.vue'
import BasketIcon from '@/components/BasketIcon.vue'

export default {
  components: {
    SliderComponent, // реєструємо компонент для використання
    CartComponent,
    BasketIcon
  }
}
</script>

<style scoped>
/* Ваші стилі */
</style>
