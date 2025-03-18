<template>
  <div class="flex">
    <div class="w-64 p-4 border border-gray-300 rounded-lg shadow-md mb-4 mr-4">
      <h3 class="text-lg font-bold mb-4">UKRYŤ FILTRE</h3>
      <h4 class="text-lg font-bold mb-4">NOVINKY 2025</h4>

      <div class="mb-6">
        <h5 class="text-md font-semibold mb-2">POHLAVIE</h5>
        <div class="flex flex-col space-y-1">
          <label v-for="(option, index) in genders" :key="index">
            <input
              type="checkbox"
              :value="option.label"
              name="gender"
              v-model="selectedGenders"
              @change="applyFilters"
            />
            {{ option.label }} ({{ option.count }})
          </label>
        </div>
      </div>
    </div>

    <div class="p-6 w-full">
      <h2 class="text-2xl font-bold mb-4">Teniski:)</h2>

      <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        <div
          v-for="(product, index) in filteredProducts"
          :key="index"
          class="border rounded-lg p-4 flex flex-col text-center transform scale-100 h-full"
        >
          <img
            :src="product.image"
            :alt="product.name"
            class="w-full h-auto rounded-lg mb-4 cursor-pointer"
            @click="goToProductPage(index)"
          />
          <h3 class="text-md font-semibold mb-2 truncate">{{ product.name }}</h3>

          <div class="flex justify-between items-center mt-auto text-sm">
            <button
              @click="buyProduct(product)"
              class="py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors w-full sm:w-auto"
            >
              Buy
            </button>
            <p class="text-gray-600 text-lg">{{ product.price }} $</p>
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
      filteredProducts: [],
      showBasketMessage: false,
      selectedGenders: [],
      genders: [
        { label: 'Men', count: 2 },
        { label: 'Women', count: 6 }
      ]
    };
  },
  methods: {
    goToProductPage(index) {
      this.$router.push(`/product/${index + 1}`);
    },
    buyProduct(product) {
      const basket = JSON.parse(localStorage.getItem('basket')) || [];
      const existingProduct = basket.find((item) => item.name === product.name);

      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        basket.push({ ...product, quantity: 1 });
      }

      localStorage.setItem('basket', JSON.stringify(basket));
      this.showBasketMessage = true;
      setTimeout(() => {
        this.showBasketMessage = false;
      }, 1000);
    },
    applyFilters() {
      this.filterByGender();
    },
    filterByGender() {
      if (this.selectedGenders.length === 0) {
        this.filteredProducts = [...this.originalProducts];
      } else {
        this.filteredProducts = this.originalProducts.filter((product) => {
          const isMen =
            this.selectedGenders.includes('Men') &&
            (product.name === 'Air Force 1 Air Jordan "ORANGE-WHITE-BLACK"' ||
              product.name === 'JORDAN 2"BLACK"');
          const isWomen =
            this.selectedGenders.includes('Women') &&
            product.name !== 'Air Force 1 Air Jordan "ORANGE-WHITE-BLACK"' &&
            product.name !== 'JORDAN 2"BLACK"';
          return isMen || isWomen;
        });
      }
    }
  },
  created() {
    this.filteredProducts = [...this.originalProducts]; 
  }
};
</script>
