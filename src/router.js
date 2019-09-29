import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import AppLayout from '@/components/Layout/AppLayout/AppLayout.vue';
import PageWrapper from '@/components/Layout/PageWrapper/PageWrapper.vue';

import Tracker from '@/views/Tracker/Tracker.vue';
import Pomodoro from '@/views/Pomodoro/Pomodoro.vue';

Vue.use(Router)

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
                    component: PageWrapper,
                    children: [
                        {
                            path: '/',
                            component: Tracker,
                        },
                        {
                            path: '/pomodoro',
                            component: Pomodoro,
                        },
                        {
                            path: '/desk',
                            component: Home
                        },
                        {
                            path: '/calendar',
                            name: 'about',
                            // route level code-splitting
                            // this generates a separate chunk (about.[hash].js) for this route
                            // which is lazy-loaded when the route is visited.
                            component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
                        }
                    ]
                },
            ]
        },

    ]
})
