import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('../layouts/DefaultLayout.vue'),
      children: [
        {
          path: '/',
          name: 'home',
          component: () => import('../pages/HomeView.vue'),
        },
        {
          path: '/about',
          name: 'about',
          component: () => import('../pages/DevView.vue'),
        },
        {
          path: '/article',
          name: 'article',
          component: () => import('../pages/DevView.vue'),
        },
        {
          path: '/author',
          name: 'author',
          component: () => import('../pages/DevView.vue'),
        },
        {
          path: '/favorite',
          name: 'favorite',
          component: () => import('../pages/DevView.vue'),
          meta: {
            requiresAuth: true
          }
        },
        {
          path: '/profile',
          name: 'profile',
          component: () => import('../pages/DevView.vue'),
          meta: {
            requiresAuth: true
          }
        },

      ],
    },
    {
      path: '/graph',
      component: () => import('../layouts/GraphLayout.vue'),
      children: [
        {
          path: '/',
          name: 'graph',
          component: () => import('../pages/GraphView.vue'),
        },
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../pages/LoginView.vue'),
    }
  ]
})

export default router
