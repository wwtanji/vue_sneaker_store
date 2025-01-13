import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue' // Додав імпорт для HomeView
import BasketComponent from '@/components/BasketComponent.vue'
import CartComponent from '@/components/CartComponent.vue'
import ProductMoreComponent from '@/components/ProductMoreComponent.vue'
import AutenticitaComponent from '@/components/AutenticitaComponent.vue'
import BezpecnaPlatbaComponent from '@/components/BezpecnaPlatbaComponent.vue'
import OnlinePodporaComponent from '@/components/OnlinePodporaComponent.vue'

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
      component: CartComponent // Ви вже імпортували цей компонент без динамічного імпорту
    },
    {
      path: '/basket',
      name: 'basket',
      component: BasketComponent
    },
    {
      path: '/product/1', // Динамічний маршрут для продукту
      name: 'product',
      component: ProductMoreComponent
    },
    {
      path: '/autenticita',
      name: 'autenticita',
      component: AutenticitaComponent
    },
    {
      path: '/bezpecna-platba',
      name: 'bezpecna-platba',
      component: BezpecnaPlatbaComponent
    },
    {
      path: '/online-podpora',
      name: 'online-podpora',
      component: OnlinePodporaComponent
    },
    {
      path: '/doprava-cr-sr',
      name: 'doprava-cr-sr',
      component: BezpecnaPlatbaComponent
    }
  ]
})

export default router
