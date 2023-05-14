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
    },
    {
        path: '/services',
        name: 'services',
        component: () => import('src/pages/services/services-page.vue')
    },
    {
        path: '/services/:service',
        name: 'service',
        component: () => import('src/pages/services/service-page.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior() {
        document.getElementById('app').scrollIntoView({ behavior: 'smooth' });
    }
})

const projectFeatures = {
    locale: false,
    news: false
}

createApp(App)
    .use(router)
    .provide('project-features', projectFeatures) // locale
    .mount('#app')
