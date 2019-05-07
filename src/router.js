import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
            path: '/',
            name: '',
            redirect: '/botnav/index'
        },
        {
            path: '/login',
            name: 'login',
            component: () =>
                import ('./views/Login.vue')
        },
        {
            path: '/index',
            name: 'index',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () =>
                import ( /* webpackChunkName: "about" */ './views/Index.vue'),

        },
        {
            path: '/botnav',
            name: 'botnav',
            component: () =>
                import ('./views/Botnav.vue'),
            children: [{
                path: 'index',
                name: 'index',
                component: () =>
                    import ('./views/Index.vue')
            }, {
                path: 'tag',
                name: 'tag',
                component: () =>
                    import ('./views/Tag.vue')
            }, {
                path: 'mall',
                name: 'mall',
                meta: {
                    requireAuth: true
                },
                component: () =>
                    import ('./views/Mall.vue')
            }, {
                path: 'person',
                name: 'person',
                meta: {
                    requireAuth: true
                },
                component: () =>
                    import ('./views/Person.vue')
            }]
        }
    ]
})