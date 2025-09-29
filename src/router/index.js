import { createRouter, createWebHistory } from 'vue-router'
import App from '@/App.vue'
import Hotel from '@/components/Hotel.vue'
import Booking from '@/components/Booking.vue'
import Contact from '@/components/Contact.vue'
import Login from '@/components/Login.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: App
  },
  {
    path: '/hotel',
    name: 'Hotel',
    component: Hotel
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/booking',
    name: 'Booking',
    component: Booking
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router