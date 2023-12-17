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
            path:'/about/:id(\\d*)*',
            name: 'About',
            meta: {requiresAuth:'mmm'},
            props: { mococo:true, default:true},
            components: {
                default: () => import('../views/AboutView.vue'),
                hello: () => import('../components/HelloWorld.vue')
            },
            children: [
                {
                    path: '',
                    alias:['home'],
                    components: {
                        default: () => import('../components/HeaderComp.vue'),
                        hello: () => import('../components/HelloWorld.vue')
                    }
                }
            ]
        },
        {
            path:'/alabama',
            name: 'alabama',
            redirect: '/about',
        },
        {
            path: '/user/:id?',
            component: () => import('../views/UserView.vue'),
            name: 'user',
            children: [
                { path: '/', name: 'user-home', component: () => import('../views/UserHomeView.vue'), props: true },
                { path:'info',name:'user-info',component:()=>import('../views/UserInfoView.vue'), props:true}
            ],
        },
        {
            path: '/:pathMatch(.*)',
            name: 'not found',
            component: () => import('../views/NotFoundView.vue')
        }
    ],
    scrollBehavior(to, from) { 
        return {
            el:'#main',
            top: 120,
        }
    }
})

export default routes;