import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue' // Додав імпорт для HomeView
import BasketComponent from '@/components/BasketComponent.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: HomeView
    },
    {
      path: '/', // Це кореневий шлях, він вже має працювати для HomeView
      name: 'home1',
      component: HomeView
    },
    {
      path: '/sneakers',
      name: 'sneakers',
      component: () => import('@/components/CartComponent.vue') // Динамічний імпорт
    },
    {
      path: '/basket',
      name: 'basket', // Додано двокрапку
      component: BasketComponent
    }
  ]
})

export default router
