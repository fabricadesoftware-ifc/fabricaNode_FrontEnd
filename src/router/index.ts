import { createRouter, createWebHistory } from 'vue-router'
import LayoutPage from '@/layouts/LayoutPage.vue';
import BlankLayout from '@/layouts/BlankLayout.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            component: LayoutPage,
            children: [
                {
                    path: '/',
                    name: 'home',
                    component: () => import('@/views/HomeView.vue'),
                },
                {
                    path: '/about',
                    name: 'about',
                    component: () => import('@/views/AboutView.vue'),
                }
            ]
        },
        {
            path: '/login',
            component: BlankLayout,
            children: [
                {
                    path: '/login',
                    name: 'login',
                    component: () => import('@/views/LoginView.vue'),
                }
            ]
        },
    ]
})

export default router