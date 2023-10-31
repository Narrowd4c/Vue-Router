import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';

const routes = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: HomeView,
        },
        {
            path: '/about',
            name: 'About',
            component: () => import('../views/AboutView.vue')
        }
    ]
})

export default routes;