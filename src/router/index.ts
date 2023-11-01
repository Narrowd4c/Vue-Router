import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';

const routes = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: HomeView,
        },
        {
            path: '/about',
            name: 'About',
            component: () => import('../views/AboutView.vue'),
            sensitive: true 
        },
        {
            path: '/user/:id?',
            component: () => import('../views/UserView.vue'),
            name: 'user',
            children: [
                { path: '', name: 'user-home', component: () => import('../views/UserHomeView.vue'), props: true },
                { path:'info',name:'user-info',component:()=>import('../views/UserInfoView.vue'), props:true}
            ],
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'not found',
            component: () => import('../views/NotFoundView.vue')
        }
    ],
    strict: true,
})

export default routes;