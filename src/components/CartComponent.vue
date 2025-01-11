<template>
  <div class="p-6">
    <h2 class="text-2xl font-bold mb-4">NIKE AIR FORCE 1</h2>

    <!-- Кнопки для сортування -->
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

    <!-- Список товарів -->
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      <div
        v-for="(product, index) in products"
        :key="index"
        class="border rounded-lg p-4 text-center"
      >
        <img :src="product.image" :alt="product.name" class="w-full h-auto rounded-lg mb-4" />
        <h3 class="text-lg font-semibold mb-2">{{ product.name }}</h3>
        <p class="text-gray-600">{{ product.price }} Kč</p>
        <!-- Кнопка "Buy" -->
        <button
          @click="buyProduct(product)"
          class="mt-4 py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Buy
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductList",
  data() {
    return {
      // Початковий список товарів
      originalProducts: [
        {
          name: "NIKE AIR FORCE 1 LOW DRAKE X NOCTA \"CERTIFIED LOVER BOY CITRON TINT\"",
          price: 6499,
          image: "img/white-sneakers.png",
        },
        {
          name: "NIKE AIR FORCE 1 LOW DRAKE X NOCTA \"CERTIFIED LOVER BOY PALEST PURPLE\"",
          price: 6499,
          image: "img/rb_1639.png",
        },
        {
          name: "NIKE AIR FORCE 1 LOW LE \"TRIPLE WHITE\" (GS)",
          price: 2732,
          image: "img/rb_1650.png",
        },
        {
          name: "NIKE AIR FORCE 1 LOW \"BLACK\"",
          price: 4399,
          image: "img/rb_1651_3gen.png",
        },
        {
          name: "NIKE AIR FORCE 1 LOW DRAKE X NOCTA \"CERTIFIED LOVER BOY CITRON TINT\"",
          price: 6499,
          image: "img/white-sneakers.png",
        },
        {
          name: "NIKE AIR FORCE 1 LOW DRAKE X NOCTA \"CERTIFIED LOVER BOY PALEST PURPLE\"",
          price: 6499,
          image: "img/rb_1639.png",
        },
        {
          name: "NIKE AIR FORCE 1 LOW LE \"TRIPLE WHITE\" (GS)",
          price: 2732,
          image: "img/rb_1650.png",
        },
        {
          name: "NIKE AIR FORCE 1 LOW \"BLACK\"",
          price: 4399,
          image: "img/rb_1651_3gen.png",
        },
      ],
      products: [],
      sortMode: localStorage.getItem('sortMode') || 'default', // Завантажуємо попереднє сортування з localStorage
    };
  },
  methods: {
    // Сортування за ціною (найдешевші до найдорожчих)
    sortByPriceAsc() {
      this.products = [...this.originalProducts].sort((a, b) => a.price - b.price);
      this.sortMode = 'Najlacnejšie';
      localStorage.setItem('sortMode', this.sortMode); // Зберігаємо вибір у localStorage
    },
    // Сортування за ціною (найдорожчі до найдешевших)
    sortByPriceDesc() {
      this.products = [...this.originalProducts].sort((a, b) => b.price - a.price);
      this.sortMode = 'Najdrahšie';
      localStorage.setItem('sortMode', this.sortMode); // Зберігаємо вибір у localStorage
    },
    // Сортування за алфавітом
    sortByAlphabet() {
      this.products = [...this.originalProducts].sort((a, b) => a.name.localeCompare(b.name));
      this.sortMode = 'Abecedne';
      localStorage.setItem('sortMode', this.sortMode); // Зберігаємо вибір у localStorage
    },
    // Відновлення сортування до початкового стану (без сортування)
    resetSorting() {
      this.products = [...this.originalProducts]; // Скидаємо сортування
      this.sortMode = 'default'; // Встановлюємо стандартний стан
      localStorage.removeItem('sortMode'); // Видаляємо вибір із localStorage
    },
    // Обробник для кнопки "Buy"
    buyProduct(product) {
      alert(`Ви обрали товар: ${product.name} за ${product.price} Kč`);
    },
  },
  created() {
    // Відновлюємо сортування при завантаженні сторінки
    if (this.sortMode === 'Najlacnejšie') {
      this.sortByPriceAsc();
    } else if (this.sortMode === 'Najdrahšie') {
      this.sortByPriceDesc();
    } else if (this.sortMode === 'Abecedne') {
      this.sortByAlphabet();
    } else {
      // Якщо сортування не вибрано або очищено, залишаємо початковий список
      this.products = [...this.originalProducts];
    }
  },
};
</script>

<style scoped>
/* Tailwind CSS використовується, додаткові стилі не потрібні */
</style>
