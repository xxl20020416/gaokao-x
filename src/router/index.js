import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/')
  },
  {
    path: '/',
    name: '',
    component: () => import('@/views/layout/'),
    children: [
        {
        path: '',
        name: 'home',
        component: () => import('@/views/home/')
        },
      {
        path: '/zixun',
        name: 'zixun',
        component: () => import('@/views/zixun/')
      },
      {
        path: '/lt',
        name: 'lt',
        component: () => import('@/views/lt/')
      },
      {
        path: '/my',
        name: 'my',
        component: () => import('@/views/my/')
      },
    ]
  }
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
