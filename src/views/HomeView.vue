<template>
  <div>
    <BasketIcon />
    <SliderComponent />
    <CartComponent />
  </div>
</template>

<script>
import SliderComponent from '@/components/SliderComponent.vue'
import CartComponent from '@/components/CartComponent.vue'
import BasketIcon from '@/components/BasketIcon.vue'

export default {
  components: {
    SliderComponent,
    CartComponent,
    BasketIcon
  }
}
</script>

<style scoped>
/* Ваші стилі */
</style>
