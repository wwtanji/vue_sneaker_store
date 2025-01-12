<template>
  <div class="container mx-auto px-4 py-8">
    <div class="flex flex-col md:flex-row md:justify-between md:items-center">
      <h1 class="text-2xl font-bold my-4">Shopping Cart</h1>
      <button class="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded">
        Checkout
      </button>
    </div>
    <div class="mt-8">
      <div
        v-for="(item, index) in cartItems"
        :key="index"
        class="flex flex-col md:flex-row border-b border-gray-400 py-4"
      >
        <div class="flex-shrink-0">
          <img :src="item.image" alt="Product image" class="w-32 h-32 object-cover" />
        </div>
        <div class="mt-4 md:mt-0 md:ml-6">
          <h2 class="text-lg font-bold">{{ item.title }}</h2>
          <p class="mt-2 text-gray-600">{{ item.description }}</p>
          <div class="mt-4 flex items-center">
            <span class="mr-2 text-gray-600">Quantity:</span>
            <div class="flex items-center">
              <button
                @click="decreaseQuantity(index)"
                :disabled="item.quantity <= 1"
                class="bg-gray-200 rounded-l-lg px-2 py-1"
              >
                -
              </button>
              <span class="mx-2 text-gray-600">{{ item.quantity }}</span>
              <button @click="increaseQuantity(index)" class="bg-gray-200 rounded-r-lg px-2 py-1">+</button>
            </div>
            <span class="ml-auto font-bold">{{ formatPrice(item.price) }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="flex justify-end items-center mt-8">
      <span class="text-gray-600 mr-4">Subtotal:</span>
      <span class="text-xl font-bold">{{ formatPrice(subtotal) }}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cartItems: JSON.parse(localStorage.getItem("basket")) || [], // Завантаження збережених товарів
    };
  },
  computed: {
    subtotal() {
      return this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    },
  },
  methods: {
    increaseQuantity(index) {
      this.cartItems[index].quantity++;
      this.updateBasketStorage();
    },
    decreaseQuantity(index) {
      if (this.cartItems[index].quantity > 1) {
        this.cartItems[index].quantity--;
        this.updateBasketStorage();
      }
    },
    formatPrice(price) {
      return `$${price.toFixed(2)}`;
    },
    updateBasketStorage() {
      localStorage.setItem("basket", JSON.stringify(this.cartItems));
    },
  },
  watch: {
    cartItems: {
      handler() {
        this.updateBasketStorage();
      },
      deep: true,
    },
  },
};
</script>

<style scoped>
/* Сюди можна додавати стилі, якщо потрібно */
</style>
