<script setup lang="ts">
import { RouterView } from 'vue-router'
import FooterComponent from './components/FooterComponent.vue'
import HeaderComponent from './components/HeaderComponent.vue'
import BasketIcon from './components/BasketIcon.vue'
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <HeaderComponent />
    <BasketIcon />
    <main class="flex-grow mx-4">
      <RouterView />
    </main>

    <FooterComponent />
  </div>
</template>
