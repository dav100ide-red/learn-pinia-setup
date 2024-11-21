import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('../views/HomeView.vue'),
        },
        { //dsad
            path: '/one-btn',
            name: 'one-btn',
            component: () => import('../views/OneBtnView.vue'),
        },
        {
            path: '/min-max',
            name: 'min-max',
            component: () => import('../views/MinMaxView.vue'),
        },
        {
            path: '/:pathMatch(.*)*',
            redirect: { name: 'not-found' },
        },
        {
            path: '/not-found',
            name: 'not-found',
            component: () => import('../views/NotFoundView.vue'),
        },
    ],
});

export default router;
