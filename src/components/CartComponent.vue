<template>
  <div class="p-6">
    <h2 class="text-2xl font-bold mb-4">NOVYNKY 2025</h2>

    <div class="mb-4 flex space-x-4">
      <button
        @click="sortByPriceAsc"
        class="py-2 px-6 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors w-full sm:w-auto"
      >
        Najlacnejšie
      </button>
      <button
        @click="sortByPriceDesc"
        class="py-2 px-6 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors w-full sm:w-auto"
      >
        Najdrahšie
      </button>
      <button
        @click="sortByAlphabet"
        class="py-2 px-6 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors w-full sm:w-auto"
      >
        Abecedne
      </button>
      <button
        @click="resetSorting"
        class="py-2 px-6 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors w-full sm:w-auto"
      >
        Odporucane
      </button>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      <div
        v-for="(product, index) in products"
        :key="index"
        class="border rounded-lg p-4 flex flex-col text-center h-full"
      >
        <img
          :src="product.image"
          :alt="product.name"
          class="w-full h-auto rounded-lg mb-4 cursor-pointer"
          @click="goToProductPage(index)"
        />
        <h3 class="text-lg font-semibold mb-2">{{ product.name }}</h3>

        <div class="flex justify-between items-center mt-auto">
          <button
            @click="buyProduct(product)"
            class="py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Buy
          </button>
          <p class="text-gray-600">{{ product.price }} $</p>
        </div>
      </div>
    </div>

    <transition name="fade">
      <div
        v-if="showBasketMessage"
        class="fixed inset-0 flex items-center justify-center bg-opacity-50 bg-gray-800"
      >
        <div class="bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg">V košíku</div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'ProductList',
  data() {
    return {
      originalProducts: [
        {
          name: 'NIKE AIR FORCE 1 LOW DRAKE X NOCTA "CERTIFIED LOVER BOY CITRON TINT"',
          price: 170,
          image: 'img/white-sneakers.png'
        },
        {
          name: 'NIKE AIR FORCE 1 LOW DRAKE X NOCTA "CERTIFIED LOVER BOY PALEST PURPLE"',
          price: 200,
          image: 'img/rb_1639.png'
        },
        {
          name: 'NIKE AIR FORCE 1 LOW LE "TRIPLE WHITE" (GS)',
          price: 230,
          image: 'img/rb_1650.png'
        },
        {
          name: 'NIKE AIR FORCE 1 LOW "BLACK"',
          price: 185,
          image: 'img/rb_1651_3gen.png'
        },
        {
          name: 'Air Force 1 Air Jordan "ORANGE-WHITE-BLACK"',
          price: 250,
          image: 'img/jordan.png'
        },
        {
          name: 'JORDAN 2"BLACK"',
          price: 222,
          image: 'img/jordan1.png'
        },
        {
          name: 'NIKE AIR FORCE 1 LOW "BLACK"',
          price: 1000,
          image: 'img/rb_nike1.png'
        },
        {
          name: 'Nike Air Max "BLACK"',
          price: 350,
          image: 'img/jordan4.png'
        }
      ],
      products: [],
      showBasketMessage: false,
      sortMode: localStorage.getItem('sortMode') || 'default'
    }
  },
  methods: {
    goToProductPage(index) {
      this.$router.push(`/product/${index + 1}`)
    },
    sortByPriceAsc() {
      this.products = [...this.originalProducts].sort((a, b) => a.price - b.price)
      this.sortMode = 'Najlacnejšie'
      localStorage.setItem('sortMode', this.sortMode)
    },
    sortByPriceDesc() {
      this.products = [...this.originalProducts].sort((a, b) => b.price - a.price)
      this.sortMode = 'Najdrahšie'
      localStorage.setItem('sortMode', this.sortMode)
    },
    sortByAlphabet() {
      this.products = [...this.originalProducts].sort((a, b) => a.name.localeCompare(b.name))
      this.sortMode = 'Abecedne'
      localStorage.setItem('sortMode', this.sortMode)
    },
    resetSorting() {
      this.products = [...this.originalProducts]
      this.sortMode = 'default'
      localStorage.removeItem('sortMode')
    },
    buyProduct(product) {
      const basket = JSON.parse(localStorage.getItem('basket')) || []
      const existingProduct = basket.find((item) => item.name === product.name)

      if (existingProduct) {
        existingProduct.quantity += 1
      } else {
        basket.push({
          ...product,
          quantity: 1
        })
      }

      localStorage.setItem('basket', JSON.stringify(basket))

      this.showBasketMessage = true
      setTimeout(() => {
        this.showBasketMessage = false
      }, 1000)
    }
  },
  created() {
    if (this.sortMode === 'Najlacnejšie') {
      this.sortByPriceAsc()
    } else if (this.sortMode === 'Najdrahšie') {
      this.sortByPriceDesc()
    } else if (this.sortMode === 'Abecedne') {
      this.sortByAlphabet()
    } else {
      this.products = [...this.originalProducts]
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
