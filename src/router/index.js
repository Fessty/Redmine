import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'page_template',
    component: () => import('../Templates/PageTemplate'),
    children: [
      {
        path: '/',
        name: 'dashboard',
        component: () => import('../Components/Dashboard/Dashboard.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../Components/Login/Login.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
