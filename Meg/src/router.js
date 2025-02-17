import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Interests from './views/Interests.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/interests', component: Interests }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
