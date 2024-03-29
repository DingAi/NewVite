import {createRouter, createWebHashHistory} from 'vue-router'
import Home from "../views/HomeView.vue";
import History from "@/views/History.vue";
import Analysis from "@/views/Analysis.vue";
import Workplace from "@/views/WorkPlace.vue";
import {useUserStore} from "@/store/user.js";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/history',
        name: 'History',
        component: History
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('../views/Login.vue'),
    },

    {
        path: '/test',
        name: 'Test',
        component: () => import('../views/Test.vue'),
    },
    {
        path: '/analysis',
        name: 'Analysis',
        component: Analysis
    },
    {
        path: '/workplace',
        name: 'Workplace',
        component: Workplace,
        children: [
            {
                path: 'workplace-1',
                name: 'Workplace-1',
                component: () => import('../views/master-station/master-1/Workplace-1.vue'),
                children: [
                    {
                        path: 'slave-1-1',
                        name: 'SlaveStation-1-1',
                        component: () => import('../views/master-station/master-1/SlaveStation-1.vue'),
                    },
                    {
                        path: 'slave-1-2',
                        name: 'SlaveStation-1-2',
                        component: () => import('../views/master-station/master-1/SlaveStation-2.vue'),
                    },
                    {
                        path: 'slave-1-3',
                        name: 'SlaveStation-1-3',
                        component: () => import('../views/master-station/master-1/SlaveStation-3.vue'),
                    },
                    {
                        path: 'slave-1-4',
                        name: 'SlaveStation-1-4',
                        component: () => import('../views/master-station/master-1/SlaveStation-4.vue'),
                    },
                    {
                        path: 'slave-1-5',
                        name: 'SlaveStation-1-5',
                        component: () => import('../views/master-station/master-1/SlaveStation-5.vue'),
                    },
                    {
                        path: 'slave-1-6',
                        name: 'SlaveStation-1-6',
                        component: () => import('../views/master-station/master-1/SlaveStation-6.vue'),
                    },
                    {
                        path: 'slave-1-7',
                        name: 'SlaveStation-1-7',
                        component: () => import('../views/master-station/master-1/SlaveStation-7.vue'),
                    },
                    {
                        path: 'slave-1-8',
                        name: 'SlaveStation-1-8',
                        component: () => import('../views/master-station/master-1/SlaveStation-8.vue'),
                    },

                    {
                        path: 'master-1',
                        name: 'MasterStation-1',
                        component: () => import('../views/master-station/master-1/MasterStation-1.vue'),
                    },
                ],
            },
            {
                path: 'workplace-2',
                name: 'Workplace-2',
                component: () => import('../views/master-station/master-2/Workplace-2.vue'),
                children: [
                    {
                        path: 'slave-2-1',
                        name: 'SlaveStation-2-1',
                        component: () => import('../views/master-station/master-2/SlaveStation-1.vue'),
                    },
                    {
                        path: 'slave-2-2',
                        name: 'SlaveStation-2-2',
                        component: () => import('../views/master-station/master-2/SlaveStation-2.vue'),
                    },

                    {
                        path: 'master-2',
                        name: 'MasterStation-2',
                        component: () => import('../views/master-station/master-2/MasterStation-2.vue'),
                    },
                ],
            },
            {
                path: 'workplace-3',
                name: 'Workplace-3',
                component: () => import('../views/master-station/master-3/Workplace-3.vue'),
                children: [
                    {
                        path: 'slave-3-1',
                        name: 'SlaveStation-3-1',
                        component: () => import('../views/master-station/master-3/SlaveStation-1.vue'),
                    },
                    {
                        path: 'slave-3-2',
                        name: 'SlaveStation-3-2',
                        component: () => import('../views/master-station/master-3/SlaveStation-2.vue'),
                    },
                    {
                        path: 'master-3',
                        name: 'MasterStation-3',
                        component: () => import('../views/master-station/master-3/MasterStation-3.vue'),
                    },
                ],
            },
        ]
    },
]


const router = createRouter({
    history: createWebHashHistory(),
    routes
})

router.beforeEach((to, from) => {
    const userStore = useUserStore();
    if (!userStore.isAuthenticated && to.name !== 'Login') {
        // 如果用户未登录，则重定向到登录页面
        return {name: 'Login'}
    }
});

export default router
