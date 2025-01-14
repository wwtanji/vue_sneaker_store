<template>
  <div class="container mx-auto px-4 py-8">
    <!-- Заголовок (показується тільки якщо є товари в кошику) -->
    <h1 v-if="cartItems.length > 0" class="text-2xl font-bold my-4">Shopping Cart</h1>

    <!-- Текст "Empty", якщо кошик порожній -->
    <div v-else class="flex justify-center items-center h-64">
      <h2 class="text-xl font-bold text-gray-500">Empty</h2>
    </div>

    <!-- Список товарів (відображається тільки якщо є товари) -->
    <div v-if="cartItems.length > 0" class="mt-8">
      <div
        v-for="(item, index) in cartItems"
        :key="index"
        class="flex flex-col md:flex-row border-b border-gray-400 py-4"
      >
        <div class="flex-shrink-0">
          <img :src="item.image" alt="Product image" class="w-32 h-32 object-cover" />
        </div>
        <div class="mt-4 md:mt-0 md:ml-6 flex-1">
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
              <button @click="increaseQuantity(index)" class="bg-gray-200 rounded-r-lg px-2 py-1">
                +
              </button>
            </div>
          </div>
        </div>
        <!-- Кнопка для видалення товару та ціна поруч -->
        <div class="flex items-center mt-4 md:mt-0">
          <span class="text-gray-600 mr-4">{{ formatPrice(item.price) }}</span>
          <button
            @click="removeItem(index)"
            class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          >
            Remove
          </button>
        </div>
      </div>
    </div>

    <!-- Підсумок і кнопка "Pay" -->
    <div v-if="cartItems.length > 0">
      <div class="flex justify-end items-center mt-8">
        <span class="text-gray-600 mr-4">Subtotal:</span>
        <span class="text-xl font-bold">{{ formatPrice(subtotal) }}</span>
      </div>
      <div class="mt-8 flex justify-center">
        <button
          @click="pay"
          class="bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg"
        >
          Pay
        </button>
      </div>
    </div>

    <!-- Анімація успішної оплати -->
    <transition name="fade">
      <div
        v-if="paymentSuccess"
        class="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-green-500 text-white px-6 py-4 rounded-lg shadow-lg text-center"
      >
        <h2 class="text-2xl font-bold">Заплачено!</h2>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cartItems: JSON.parse(localStorage.getItem('basket')) || [],
      paymentSuccess: false
    }
  },
  computed: {
    subtotal() {
      return this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
    }
  },
  methods: {
    increaseQuantity(index) {
      this.cartItems[index].quantity++
      this.updateBasketStorage()
    },
    decreaseQuantity(index) {
      if (this.cartItems[index].quantity > 1) {
        this.cartItems[index].quantity--
        this.updateBasketStorage()
      }
    },
    removeItem(index) {
      this.cartItems.splice(index, 1)
      this.updateBasketStorage()
    },
    pay() {
      this.cartItems = []
      this.updateBasketStorage()
      this.paymentSuccess = true
      setTimeout(() => {
        this.paymentSuccess = false
      }, 3000)
    },
    formatPrice(price) {
      return `$${price.toFixed(2)}`
    },
    updateBasketStorage() {
      localStorage.setItem('basket', JSON.stringify(this.cartItems))
    }
  }
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
