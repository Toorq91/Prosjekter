import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/homePage.vue'
import About from './views/aboutPage.vue'
import Interests from './views/InterestsPage.vue'
import DiscGolf from './views/discgolfPage.vue'
import TV from './views/tvPage.vue'
import Gaming from './views/gamingPage.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/interests', component: Interests },
  { path: '/discgolf', component: DiscGolf },
  { path: '/tv', component: TV },
  { path: '/gaming', component: Gaming }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
