import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: "*",
            name: '404',
            component: require('@/pages/404.vue').default,
        },
        {
            path: '/',
            name: 'index',
            component: () => import('@/pages/index.vue'),
            children: [
                {
                    path: 'search/:query',
                    name: 'search',
                    props: true,
                    component: () => import('@/pages/search.vue'),
                    children: [
                        {
                            path: 'user/:login',
                            name: 'user',
                            props: true,
                            component: () => import('@/pages/user/user.vue')
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
