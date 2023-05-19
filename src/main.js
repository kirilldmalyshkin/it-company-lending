import { createApp } from 'vue'
import App from './App.vue'
import './assets/style/main.scss'
import {createRouter, createWebHistory} from "vue-router";
import { routes } from "@/routes.js";


const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior() {
        document.getElementById('app').scrollIntoView({ behavior: 'smooth' });
    }
})

const projectFeatures = {
    locale: false,
    news: true
}

createApp(App)
    .use(router)
    .provide('project-features', projectFeatures) // locale
    .mount('#app')
