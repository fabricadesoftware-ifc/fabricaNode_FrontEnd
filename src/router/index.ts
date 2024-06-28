import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../pages/HomeView.vue')
    },
    {
      path: '/graph',
      name: 'graph',
      component: () => import('../pages/GraphView.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../pages/AboutView.vue')
    },
    {
      path: '/article',
      name: 'article',
      component: () => import('../pages/ArticleView.vue')
    },
    {
      path: '/author',
      name: 'author',
      component: () => import('../pages/AuthorView.vue')
    },
    {
      path: '/favorite',
      name: 'favorite',
      component: () => import('../pages/FavoriteView.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('../pages/ProfileView.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../pages/LoginView.vue')
    }
  ]
})

export default router
