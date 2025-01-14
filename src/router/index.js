import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue' //
import BasketComponent from '@/components/BasketComponent.vue'

import Autenticita from '@/views/PodStranky/Autenticita.vue'
import OnlinePodpora from '@/views/PodStranky/OnlinePodpora.vue'
import BezpecnaPlatba from '@/views/PodStranky/BezpecnaPlatba.vue'

import MoreNikeAirRed from '@/views/Products/MoreNikeAirRed.vue'
import MoreNikeYellow from '@/views/Products/MoreNikeYellow.vue'
import MoreNikeAirLow from '@/views/Products/MoreNikeAirLow.vue'
import MoreNikeAir from '@/views/Products/MoreNikeAir.vue'
import MoreNikeAirOrange from '@/views/Products/MoreNikeAirOrange.vue'
import MoreNikeAirJordan2 from '@/views/Products/MoreNikeAirJordan2.vue'
import NikeAirForce1LowBlack from '@/views/Products/NikeAirForce1LowBlack.vue'
import MoreNikeAirForceRun from '@/views/Products/MoreNikeAirForceRun.vue'
import NotFoundView from '@/views/NotFoundView.vue'
import SneakersView from '@/views/SneakersView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: HomeView
    },
    {
      path: '/',
      name: 'home1',
      component: HomeView
    },
    {
      path: '/sneakers',
      name: 'sneakers',
      component: SneakersView
    },
    {
      path: '/basket',
      name: 'basket',
      component: BasketComponent
    },
    {
      path: '/product/1',
      name: 'product',
      component: MoreNikeAir
    },
    {
      path: '/product/2',
      name: 'product2',
      component: MoreNikeAirRed
    },
    {
      path: '/product/3',
      name: 'product3',
      component: MoreNikeYellow
    },
    {
      path: '/product/4',
      name: 'product4',
      component: MoreNikeAirLow
    },
    {
      path: '/product/5',
      name: 'product5',
      component: MoreNikeAirOrange
    },
    {
      path: '/product/6',
      name: 'product6',
      component: MoreNikeAirJordan2
    },
    {
      path: '/product/7',
      name: 'product7',
      component: NikeAirForce1LowBlack
    },
    {
      path: '/product/8',
      name: 'product8',
      component: MoreNikeAirForceRun
    },
    {
      path: '/autenticita',
      name: 'autenticita',
      component: Autenticita
    },
    {
      path: '/bezpecna-platba',
      name: 'bezpecna-platba',
      component: BezpecnaPlatba
    },
    {
      path: '/online-podpora',
      name: 'online-podpora',
      component: OnlinePodpora
    },
    {
      path: '/doprava-cr-sr',
      name: 'doprava-cr-sr',
      component: BezpecnaPlatba
    },
    {
      path: '/:pathMatch(.*)*',
      component: NotFoundView
    }
  ]
})

export default router
