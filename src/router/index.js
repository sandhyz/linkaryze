import { defineAsyncComponent } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/welcome',
      name: 'Login'
    },
    {
      path: '/',
      name: 'Home',
      padding: true,
      component: defineAsyncComponent(
      () => import('../views/DashboardView.vue'))
    },
    {
      path: '/release',
      name: 'Release',
      padding: true,
      component: defineAsyncComponent(
      () => import('../views/DashboardView.vue'))
    },
    {
      path: '/release/:id',
      name: 'Release - Detail',
      padding: true,
      component: defineAsyncComponent(
      () => import('../views/DashboardView.vue'))
    },
    {
      path: '/artist',
      name: 'Artist',
      padding: true,
      component: defineAsyncComponent(
      () => import('../views/DashboardView.vue'))
    },
    {
      path: '/artist/:id',
      name: 'Artist - Detail',
      padding: true,
      component: defineAsyncComponent(
      () => import('../views/DashboardView.vue'))
    },
  ]
})

router.beforeEach((to, from, next) => {

  document.title = to.name
  next()
})

export default router
