import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('../views/HomeView.vue'),
        },
        {
            path: '/one-btn',
            name: 'one-btn',
            component: () => import('../views/AboutView.vue'),
        },
        {
            path: '/min-max',
            name: 'min-max',
            component: () => import('../views/MinMaxView.vue'),
        },
    ],
});

export default router;
