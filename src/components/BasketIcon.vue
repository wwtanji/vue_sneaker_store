<template>
  <nav class="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-6">
      <!-- Для мобільної версії, кнопка меню -->
      <button
        data-collapse-toggle="navbar-multi-level"
        type="button"
        class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="navbar-multi-level"
        aria-expanded="false"
      >
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
      </button>

      <!-- Основне меню без пунктів -->
      <div class="hidden w-full md:flex md:items-center md:justify-between" id="navbar-multi-level">
        <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          <!-- Меню залишено порожнім, немає пунктів -->
        </ul>
      </div>

      <!-- Cart icon справа -->
      <div class="absolute top-6 right-6">
        <router-link
          to="/basket"
          class="flex items-center py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
        >
          <!-- Updated to use the shopping-bag.svg -->
          <img src="/svg/shopping-bag.svg" alt="Shopping Bag" class="w-5 h-5 mr-2" />
          Cart <!-- Changed from Basket to Cart -->
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
// No import needed for BasketIcon, since we're directly using the SVG
</script>

<style scoped>
/* Additional styles if needed */
</style>
