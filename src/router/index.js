import { createRouter, createWebHistory } from 'vue-router'

// Page view files (add about here or other page views)
import HomeView from '../views/HomeView.vue'
import SellProduct from '../views/SellProduct.vue'
import UserProfile from '../views/UserProfile.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/sell',
      name: 'SellProduct',
      component: SellProduct
    },
    {
      path: '/profile',
      name: 'UserProfile',
      component: UserProfile
    },
  ]
})

export default router
