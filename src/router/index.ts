import { createRouter, createWebHistory } from 'vue-router';
import { useAuthStore } from '@/stores';

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
          component: () => import('../pages/ArticleView.vue'),
        },
        {
          path: '/author',
          name: 'author',
          component: () => import('../pages/AuthorView.vue'),
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
          component: () => import('../pages/ProfileView.vue'),
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
          path: '/graph',
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

router.beforeEach(async (to) => {
  if (!to.meta.requiresAuth) return true;

  const authStore = useAuthStore();
  if (!authStore.isAuthenticated && localStorage.getItem('access_token')) {
    await authStore.loadUser();
  }
  if (authStore.isAuthenticated) return true;

  return { name: 'login' };
});

export default router;
