import Vue from 'vue'
import App from '@/App'
import store from '@/store/index'
import router from '@/router/index'

import '@/plugins'

Vue.config.productionTip = false
Vue.config.devtools = process.env.NODE_ENV === 'development'

new Vue({
    render: h => h(App),
    store,
    router
}).$mount('#app')
