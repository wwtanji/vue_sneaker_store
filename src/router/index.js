import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue') // Динамічний імпорт
    },
    {
      path: '/sneakers',
      name: 'sneakers',
      component: () => import('@/components/CartComponent.vue') // Динамічний імпорт
    },
  ]
})

export default router
