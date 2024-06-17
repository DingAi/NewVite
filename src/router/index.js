import {createRouter, createWebHashHistory} from 'vue-router'
import Home from "../views/HomeView.vue";
import History from "@/views/HistoryView.vue";
import Analysis from "@/views/AnalysisView.vue";
import Workplace from "@/views/WorkPlace.vue";
import {useUserStore} from "@/store/user.js";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta: {
            isShowNav: true
        }
    },
    {
        path: '/history',
        name: 'History',
        component: History,
        meta: {
            isShowNav: true
        }
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('../views/LoginView.vue'),
        meta: {
            isShowNav: false
        }
    },
    {
        path: '/meteorological',
        name: 'Meteorological',
        component: () => import('../views/MeteorologicalView.vue'),
        meta: {
            isShowNav: true
        }
    },
    {
        path: '/map',
        name: 'Map',
        component: () => import('../views/MapView.vue'),
        meta: {
            isShowNav: true
        }
    },
    {
        path: '/test',
        name: 'Test',
        component: () => import('../views/test/Test.vue'),
        meta: {
            isShowNav: true
        }
    },
    {
        path: '/map-3d',
        name: 'Map3D',
        component: () => import('../views/Map3DView.vue'),
        meta: {
            isShowNav: true
        }
    },
    {
        path: '/analysis',
        name: 'Analysis',
        component: Analysis,
        meta: {
            isShowNav: true
        }
    },
    {
        path: '/spatial',
        name: 'Spatial',
        component: () => import('../views/test/SpatialDataCollectionView.vue'),
        meta: {
            isShowNav: true
        }
    },
    {
        path: '/weather-1',
        name: 'Weather-1',
        component: () => import('../views/master-station/weather-master/WeatherMasterView-1.vue'),
        meta: {
            isShowNav: true
        }
    },
    {
        path: '/weather-2',
        name: 'Weather-2',
        component: () => import('../views/master-station/weather-master/WeatherMasterView-2.vue'),
        meta: {
            isShowNav: true
        }
    },
    {
        path: '/data-list',
        name: 'DataList',
        component: () => import('../views/DataList.vue'),
        meta: {
            isShowNav: true
        }
    },
    {
        path: '/other',
        name: 'Other',
        component: () => import('../views/test/Tiles.vue'),
        meta: {
            isShowNav: true
        }
    },
    {
        path: '/sub-station',
        name: 'SubStations',
        component: () => import('../views/test/SubStations.vue'),
        meta: {
            isShowNav: true
        }
    },
    {
        path: '/workplace',
        name: 'Workplace',
        component: Workplace,
        meta: {
            isShowNav: true
        },
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
                        component: () => import('../views/master-station/master-2/SlaveStation-21.vue'),
                    },
                    {
                        path: 'slave-2-2',
                        name: 'SlaveStation-2-2',
                        component: () => import('../views/master-station/master-2/SlaveStation-22.vue'),
                    },
                    {
                        path: 'slave-2-3',
                        name: 'SlaveStation-2-3',
                        component: () => import('../views/master-station/master-2/SlaveStation-23.vue'),
                    },
                    {
                        path: 'slave-2-4',
                        name: 'SlaveStation-2-4',
                        component: () => import('../views/master-station/master-2/SlaveStation-24.vue'),
                    },
                    {
                        path: 'slave-2-5',
                        name: 'SlaveStation-2-5',
                        component: () => import('../views/master-station/master-2/SlaveStation-25.vue'),
                    },
                    {
                        path: 'slave-2-6',
                        name: 'SlaveStation-2-6',
                        component: () => import('../views/master-station/master-2/SlaveStation-26.vue'),
                    },
                    {
                        path: 'slave-2-7',
                        name: 'SlaveStation-2-7',
                        component: () => import('../views/master-station/master-2/SlaveStation-27.vue'),
                    },
                    {
                        path: 'slave-2-8',
                        name: 'SlaveStation-2-8',
                        component: () => import('../views/master-station/master-2/SlaveStation-28.vue'),
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
                        path: 'master-3',
                        name: 'MasterStation-3',
                        component: () => import('../views/master-station/master-3/MasterStation-3.vue'),
                    },
                    {
                        path: 'slave-3-1',
                        name: 'SlaveStation-3-1',
                        component: () => import('../views/master-station/master-3/SlaveStation-31.vue'),
                    },
                    {
                        path: 'slave-3-2',
                        name: 'SlaveStation-3-2',
                        component: () => import('../views/master-station/master-3/SlaveStation-32.vue'),
                    },
                    {
                        path: 'slave-3-3',
                        name: 'SlaveStation-3-3',
                        component: () => import('../views/master-station/master-3/SlaveStation-33.vue'),
                    },
                    {
                        path: 'slave-3-4',
                        name: 'SlaveStation-3-4',
                        component: () => import('../views/master-station/master-3/SlaveStation-34.vue'),
                    },
                    {
                        path: 'slave-3-5',
                        name: 'SlaveStation-3-5',
                        component: () => import('../views/master-station/master-3/SlaveStation-35.vue'),
                    },
                    {
                        path: 'slave-3-6',
                        name: 'SlaveStation-3-6',
                        component: () => import('../views/master-station/master-3/SlaveStation-36.vue'),
                    },
                    {
                        path: 'slave-3-7',
                        name: 'SlaveStation-3-7',
                        component: () => import('../views/master-station/master-3/SlaveStation-37.vue'),
                    },
                    {
                        path: 'slave-3-8',
                        name: 'SlaveStation-3-8',
                        component: () => import('../views/master-station/master-3/SlaveStation-38.vue'),
                    },
                ],
            },
            {
                path: 'workplace-4',
                name: 'Workplace-4',
                component: () => import('../views/master-station/master-4/Workplace-4.vue'),
                children: [
                    {
                        path: 'master-4',
                        name: 'MasterStation-4',
                        component: () => import('../views/master-station/master-4/MasterStation-4.vue'),
                    },
                    {
                        path: 'slave-4-1',
                        name: 'SlaveStation-4-1',
                        component: () => import('../views/master-station/master-4/SlaveStation-41.vue'),
                    },
                    {
                        path: 'slave-4-2',
                        name: 'SlaveStation-4-2',
                        component: () => import('../views/master-station/master-4/SlaveStation-42.vue'),
                    },
                    {
                        path: 'slave-4-3',
                        name: 'SlaveStation-4-3',
                        component: () => import('../views/master-station/master-4/SlaveStation-43.vue'),
                    },
                    {
                        path: 'slave-4-4',
                        name: 'SlaveStation-4-4',
                        component: () => import('../views/master-station/master-4/SlaveStation-44.vue'),
                    },
                    {
                        path: 'slave-4-5',
                        name: 'SlaveStation-4-5',
                        component: () => import('../views/master-station/master-4/SlaveStation-45.vue'),
                    },
                    {
                        path: 'slave-4-6',
                        name: 'SlaveStation-4-6',
                        component: () => import('../views/master-station/master-4/SlaveStation-46.vue'),
                    },
                    {
                        path: 'slave-4-7',
                        name: 'SlaveStation-4-7',
                        component: () => import('../views/master-station/master-4/SlaveStation-47.vue'),
                    },
                    {
                        path: 'slave-4-8',
                        name: 'SlaveStation-4-8',
                        component: () => import('../views/master-station/master-4/SlaveStation-48.vue'),
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
