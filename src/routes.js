export const routes = [
    {
        path: '/',
        name: 'index',
        title: 'О компании',
        inNav: true,
        component: () => import('@/pages/intro/index-page.vue')
    },
    {
        path: '/projects',
        name: 'projects',
        title: 'Проекты',
        inNav: true,
        component: () => import('src/pages/projects/projects-page.vue')
    },
    {
        path: '/services',
        name: 'services',
        title: 'Услуги',
        inNav: true,
        component: () => import('@/pages/services/services-page-main.vue'),
    },
    {
        path: '/services/:service',
        name: 'service',
        title: '',
        inNav: false,
        component: () => import('src/pages/services/service-page.vue')
    },
    {
        path: '/insites',
        name: 'insites',
        title: 'Инсайты',
        inNav: true,
    },
    {
        path: '/vacations',
        name: 'vacations',
        title: 'Вакансии',
        inNav: true,
    }

]

export const navItems = routes.filter(route => route.inNav).map(el => {
    const route = {
        ...el
    }

    delete route.component

    return route
})