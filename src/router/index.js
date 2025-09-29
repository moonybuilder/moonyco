import { createRouter, createWebHistory } from 'vue-router'
import App from '@/App.vue'
import TheHotel from '@/components/TheHotel.vue'
import BookNow from '@/components/BookNow.vue'
import ReachUs from '@/components/ReachUs.vue'
import LogIn from '@/components/LogIn.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: App
  },
  {
    path: '/hotel',
    name: 'TheHotel',
    component: TheHotel
  },
  {
    path: '/contact',
    name: 'ReachUs',
    component: ReachUs
  },
  {
    path: '/login',
    name: 'LogIn',
    component: LogIn
  },
  {
    path: '/booking',
    name: 'BookNow',
    component: BookNow
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router