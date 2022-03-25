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
    path: '/client/info',
    name: 'Client info',
    component: () => import('../views/client/info/index.vue')
  },
  {
    path: '/client/web',
    name: 'Client web',
    component: () => import('../views/client/web/index.vue')
  },
  {
    path: '/client/userssql',
    name: 'Client users sql',
    component: () => import('../views/client/userssql/index.vue')
  },
  {
    path: '/client/usersrdp',
    name: 'Client users rdp',
    component: () => import('../views/client/usersrdp/index.vue')
  },
  {
    path: '/client/base',
    name: 'Client base',
    component: () => import('../views/client/base/index.vue')
  },
  {
    path: '/client/update',
    name: 'Client update',
    component: () => import('../views/client/update/index.vue')
  },
  {
    path: '/client/interaction',
    name: 'Client interaction',
    component: () => import('../views/client/interaction/index.vue')
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
