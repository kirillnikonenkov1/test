import { mount, createLocalVue } from '@vue/test-utils'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import search from "@/pages/search";
import user from "@/pages/user/user";
import App from "@/App";

import state from '@/store/state'
import mutations from '@/store/mutations'
import actions from '@/store/actions'
import getters from "@/store/getters";

const routes =[
    {
        path: '/',
        name: 'index',
        component: App,
        children: [
            {
                path: 'search/:query',
                name: 'search',
                props: true,
                component: search,
                children: [
                    {
                        path: 'user/:login',
                        name: 'user',
                        props: true,
                        component: user
                    }
                ]
            }
        ]
    },
]
const localVue = createLocalVue()
localVue.use(VueRouter)
localVue.use(Vuex)

describe('Тест страницы найденных пользователей', () => {
    const router = new VueRouter({routes})
    const store = new Vuex.Store({
        state,
        mutations,
        actions,
        getters
    })

    const $route = {
        name: 'search',
        params: {query: 'asd', login: 'asd'},
        query: {page: '1'}
    }

    const wrapper = mount(user, {
        localVue,
        router,
        store,
    })

    it("отрисовывает модальное окно юзера с помощью роутинга", async () => {
        await router.push($route)
        await wrapper.vm.$nextTick()

        expect(wrapper.html()).toContain('asd')
    })
})
