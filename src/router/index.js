import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', name: 'home', component: () => import('../views/HomeView.vue') },
  { path: '/login', name: 'login', component: () => import('../views/auth/login') },
  { path: '/register', name: 'register', component: () => import('../views/auth/register') },
  { path: '/about', name: 'about', component: () => import('../views/AboutView.vue') }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
