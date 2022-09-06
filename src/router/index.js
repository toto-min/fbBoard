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
  },
  {
    path: '/addBoard',
    name: 'Addboard',
    component: () => import('@/views/AddBoard.vue')
  },
  {
    path: '/boardDetail',
    name: 'BoardDetail',
    // props: true,
    component: () => import('@/views/BoardDT.vue')
  },

  {
    path: '/notice',
    name: 'Notice',
    component: () => import('@/views/Notice.vue')
  },

  {
    path: '/add',
    name: 'AddText',
    component: () => import('@/views/Add.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
