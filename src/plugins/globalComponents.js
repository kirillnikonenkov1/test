import Vue from 'vue'

import CButton from "@/components/ui/CButton";
import CInput from "@/components/ui/CInput";

const GlobalComponentPlugin = {
    install: function(Vue, options) {
        Vue.component('c-button', CButton)
        Vue.component('c-input', CInput)
    }
}

Vue.use(GlobalComponentPlugin)
