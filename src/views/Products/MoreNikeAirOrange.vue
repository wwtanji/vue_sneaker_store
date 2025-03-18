<template>
  <div class="bg-gray-100">
    <div class="container mx-auto px-4 py-8">
      <div class="flex flex-wrap -mx-4 relative">
        <button
          @click="goBack"
          class="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-600 text-white p-2 rounded-full hover:bg-gray-800 focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <div class="w-full md:w-1/2 px-4 mb-8">
          <transition name="fade" @before-enter="beforeEnter" @enter="enter" @leave="leave">
            <img
              v-if="mainImage"
              :src="mainImage"
              alt="Product"
              class="w-full h-auto rounded-lg shadow-md mb-4"
              id="mainImage"
            />
          </transition>

          <div class="flex gap-4 py-4 justify-center overflow-x-auto">
            <img
              v-for="(image, index) in thumbnailImages"
              :key="index"
              :src="image"
              alt="Thumbnail"
              class="size-16 sm:size-20 object-cover rounded-md cursor-pointer opacity-60 hover:opacity-100 transition duration-300"
              @click="changeImage(image)"
            />
          </div>
        </div>

        <div class="w-full md:w-1/2 px-4">
          <h2 class="text-3xl font-bold mb-2">{{ product.name }}</h2>
          <p class="text-gray-600 mb-4">SKU: AF1JORDANORANGE01</p>
          <div class="mb-4">
            <span class="text-2xl font-bold mr-2">${{ price }}</span>
            <span class="text-gray-500 line-through">$799.99</span>
          </div>
          <div class="flex items-center mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="size-6 text-yellow-500"
            >
              <path
                fill-rule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                clip-rule="evenodd"
              />
            </svg>
            <span class="ml-2 text-gray-600">4.8 (180 reviews)</span>
          </div>
          <p class="text-gray-700 mb-6">
            Step up your sneaker game with the Air Force 1 Air Jordan "Orange-White-Black". A bold
            design that combines the iconic Air Force 1 silhouette with the striking colors of
            Jordan, ensuring you're on top of your sneaker game.
          </p>

          <div class="mb-6">
            <label for="quantity" class="block text-sm font-medium text-gray-700 mb-1"
              >Quantity:</label
            >
            <input
              type="number"
              id="quantity"
              name="quantity"
              min="1"
              v-model.number="quantity"
              class="w-12 text-center rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>

          <div class="flex space-x-4 mb-6">
            <button
              @click="addToCart"
              class="bg-indigo-600 flex gap-2 items-center text-white px-6 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                />
              </svg>
              Add to Cart
            </button>
          </div>

          <div>
            <h3 class="text-lg font-semibold mb-2">Key Features:</h3>
            <ul class="list-disc list-inside text-gray-700">
              <li>Bold orange, white, and black colorway</li>
              <li>Air Jordan-inspired design</li>
              <li>Classic Nike Air Force 1 silhouette</li>
              <li>Comfortable and durable for all-day wear</li>
            </ul>
          </div>

          <transition name="fade-message">
            <div
              v-if="showBasketMessage"
              class="absolute bottom-4 right-4 bg-green-500 text-white px-6 py-2 rounded-lg shadow-lg"
            >
              V košíku
            </div>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mainImage: '/img/jordan.png',
      thumbnailImages: [
        '/img/jordan.png',
        '/img/jordan.png'
      ],
      price: 250,
      quantity: 1,
      product: {
        name: "Air Force 1 Air Jordan 'ORANGE-WHITE-BLACK'",
        price: 250,
        image: '/img/jordan.png'
      },
      showBasketMessage: false
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1)
    },
    changeImage(imageSrc) {
      this.mainImage = imageSrc
    },
    addToCart() {
      const basket = JSON.parse(localStorage.getItem('basket')) || []
      const existingProduct = basket.find((item) => item.name === this.product.name)

      if (existingProduct) {
        existingProduct.quantity += this.quantity
      } else {
        basket.push({
          ...this.product,
          quantity: this.quantity
        })
      }

      localStorage.setItem('basket', JSON.stringify(basket))

      this.showBasketMessage = true
      setTimeout(() => {
        this.showBasketMessage = false
      }, 1000)
    },
    beforeEnter(el) {
      el.style.opacity = 0
    },
    enter(el, done) {
      el.offsetHeight
      el.style.transition = 'opacity 0.5s'
      el.style.opacity = 1
      done()
    },
    leave(el, done) {
      el.style.transition = 'opacity 0.5s'
      el.style.opacity = 0
      done()
    }
  }
}
</script>

<style scoped>
.fade-message-enter-active,
.fade-message-leave-active {
  transition: opacity 0.5s;
}

.fade-message-enter, .fade-message-leave-to{
  opacity: 0;
}

button.absolute {
  position: absolute;
  top: 50%;
  left: -50px;
  transform: translateY(-50%);
}
</style>
