import { createRouter, createWebHistory } from 'vue-router';

import AppHome from '../src/pages/AppHome.vue'
import AppContent from './components/AppContent.vue'

const router = createRouter({
    history: createWebHistory(),

    routes:[
        {
            path: "/",
            name: "home",
            component: AppHome
        },
        {
            path: "/progetti",
            name: "progetti",
            component: AppContent
        },
    ]
})
export {router};