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

const projectFeatures = {
    locale: false,
    news: false
}

createApp(App)
    .use(router)
    .provide('project-features', projectFeatures) // locale
    .mount('#app')
