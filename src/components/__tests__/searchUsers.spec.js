import { mount, createLocalVue } from '@vue/test-utils'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import NestedComponent from "@/pages/search";
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
                component: NestedComponent
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
        params: {query: 'asd'},
        query: {page: '1'}
    }

    const wrapper = mount(App, {
        localVue,
        router,
        store,
        stubs: ['notifications', 'c-button']
    })

    it("отрисовывает стринцу поиска с помощью роутинга", async () => {
        await router.push($route)
        await wrapper.vm.$nextTick()

        expect(wrapper.findComponent(NestedComponent).exists()).toBe(true)
    })
})
