import { createApp } from 'vue'
import App from './App.vue'
import './assets/style/main.scss'
import {createRouter, createWebHistory} from "vue-router";

const routes = [
    {
        path: '/',
        name: 'index',
        component: () => import('@/pages/intro/index-page.vue')
    },
    {
        path: '/projects',
        name: 'projects',
        component: () => import('src/pages/projects/projects-page.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

createApp(App).use(router).mount('#app')
