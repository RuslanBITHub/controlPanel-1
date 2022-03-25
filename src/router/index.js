import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/index.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/auth',
    name: 'Auth',
    component: () => import('../views/auth/index.vue')
  },
  {
    path: '/client',
    name: 'Client',
    component: () => import('../views/client/index.vue')
  },
  {
    path: '/scripts',
    name: 'Scripts',
    component: () => import('../views/scripts/index.vue')
  },
  {
    path: '/disk',
    name: 'Disk',
    component: () => import('../views/disk/index.vue')
  },
  {
    path: '/notification',
    name: 'Notification',
    component: () => import('../views/notification/index.vue')
  },
  {
    path: '/settings',
    name: 'Settings',
    component: () => import('../views/settings/index.vue')
  },
  {
    path: '/data',
    name: 'Data',
    component: () => import('../views/data/index.vue')
  },
  {
    path: '/cloud',
    name: 'Cloud',
    component: () => import('../views/cloud/index.vue')
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   component: () => import('../views/About.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
