<template>
  <div class="p-6">
    <h2 class="text-2xl font-bold mb-4">NIKE AIR FORCE 1</h2>
    <!-- Замінили <a> на <button> -->
    <button @click="showAllProducts" class="text-blue-600 font-semibold mb-6 block bg-transparent border-2 border-blue-600 py-2 px-4 rounded-lg hover:bg-blue-600 hover:text-white transition-all">
      ZOBRAZIT VŠETKO →
    </button>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      <div
        v-for="(product, index) in products"
        :key="index"
        class="border rounded-lg p-4 text-center"
      >
        <img :src="product.image" :alt="product.name" class="w-full h-auto rounded-lg mb-4" />
        <h3 class="text-lg font-semibold mb-2">{{ product.name }}</h3>
        <p class="text-gray-600">{{ product.price }}</p>
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
      products: [
        {
          name: "NIKE AIR FORCE 1 LOW DRAKE X NOCTA \"CERTIFIED LOVER BOY CITRON TINT\"",
          price: "6 499 Kč",
          image: "img/white-sneakers.png", // Використовуйте шляхи з public/img
        },
        {
          name: "NIKE AIR FORCE 1 LOW DRAKE X NOCTA \"CERTIFIED LOVER BOY PALEST PURPLE\"",
          price: "6 499 Kč",
          image: "img/rb_1639.png",
        },
        {
          name: "NIKE AIR FORCE 1 LOW LE \"TRIPLE WHITE\" (GS)",
          price: "od 2 732 Kč",
          image: "img/rb_1650.png",
        },
        {
          name: "NIKE AIR FORCE 1 LOW \"BLACK\"",
          price: "4 399 Kč",
          image: "img/rb_1651_3gen.png",
        },
      ],
    };
  },
  methods: {
    // Обробник для кнопки "ZOBRAZIT VŠETKO"
    showAllProducts() {
      alert('Показати всі продукти');
    },
    // Обробник для кнопки "Buy"
    buyProduct(product) {
      alert(`Ви обрали товар: ${product.name} за ${product.price}`);
    },
  },
};
</script>

<style scoped>
/* Tailwind CSS використовується, додаткові стилі не потрібні */
</style>
