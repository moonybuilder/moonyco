import Vue from 'vue'
import Router from 'vue-router'
import App from '@/App.vue'
import TheHotel from '@/components/TheHotel.vue'
import BookNow from '@/components/BookNow.vue'
import ReachUs from '@/components/ReachUs.vue'
import LogIn from '@/components/LogIn.vue'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: '/moonyco/',
  routes: [
    { path: '/', name: 'App', component: App },
    { path: '/hotel', name: 'TheHotel', component: TheHotel },
    { path: '/contact', name: 'ReachUs', component: ReachUs },
    { path: '/login', name: 'LogIn', component: LogIn },
    { path: '/booking', name: 'BookNow', component: BookNow }
  ]
})
