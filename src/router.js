import Vue from 'vue';
import Router from 'vue-router';
import AppLayout from '@/components/Layout/AppLayout/AppLayout.vue';
import PageWrapper from '@/components/Layout/PageWrapper/PageWrapper.vue';

const Tracker = () => import(/* webpackChunkName: "tracker" */ '@/views/Tracker/Tracker.vue');
const Pomodoro = () => import(/* webpackChunkName: "pomodoro" */ '@/views/Pomodoro/Pomodoro.vue');

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            component: AppLayout,
            children: [
                {
                    path: '/',
                    redirect: '/tracker',
                    component: PageWrapper,
                    children: [
                        {
                            path: '/tracker',
                            component: Tracker,
                            meta: {
                                title: 'Time tracker (WIP)',
                            },
                        },
                        {
                            path: '/pomodoro',
                            component: Pomodoro,
                            meta: {
                                title: 'Pomodoro (WIP)',
                            },
                        },
                        {
                            path: '/calendar',
                            name: 'about',
                            // route level code-splitting
                            // this generates a separate chunk (about.[hash].js) for this route
                            // which is lazy-loaded when the route is visited.
                            component: () => import(/* webpackChunkName: "about" */ '@/views/TestComponents/About.vue'),
                            meta: {
                                title: 'About (TestComponents)',
                            },
                        },
                        {
                            path: '/desk',
                            component: () => import(/* webpackChunkName: "about" */ '@/views/TestComponents/Home.vue'),
                            meta: {
                                title: 'Task desk (test)',
                            },
                        },
                        // {
                        //     path: '/map',
                        //     name: 'map',
                        //     // route level code-splitting
                        //     // this generates a separate chunk (about.[hash].js) for this route
                        //     // which is lazy-loaded when the route is visited.
                        //     component: () => import(/* webpackChunkName: "about" */ '@/views/TestComponents/Leaflet/Leaflet.vue'),
                        //     meta: {
                        //         title: 'Leaflet map (test npm)',
                        //     },
                        // },
                    ],
                },
            ],
        },

    ],
});
