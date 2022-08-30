import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Main',
    component: () => import('@/views/Main.vue')
  },
  {
    path: '/board',
    name: 'Board',
    component: () => import('@/views/Board.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
