import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    duplicateNavigationPolicy: 'ignore',
    routes: [
        {
            path: "*",
            name: '404',
            component: require('@/pages/404.vue').default,
        },
        {
            path: '/',
            name: 'index',
            component: () => import(/* webpackChunkName: "app" */ '@/pages/index.vue'),
            children: [
                {
                    path: 'search/:query',
                    name: 'search',
                    props: true,
                    component: () => import(/* webpackChunkName: "search" */'@/pages/search.vue'),
                    children: [
                        {
                            path: 'user/:login',
                            name: 'user',
                            props: true,
                            component: () => import(/* webpackChunkName: "user" */'@/pages/user/user.vue')
                        }
                    ]
                }
            ]
        },
    ]
})

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => {
        if (err.name !== 'NavigationDuplicated') throw err
    });
}

router.beforeEach((to, from, next) => {
    next()
})
export default router
