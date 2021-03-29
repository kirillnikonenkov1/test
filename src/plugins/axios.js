import Vue from 'vue'
import axios from 'axios'

// Перехватчик ответа
axios.interceptors.response.use(function(response) {

    return response;

}, function(error) {
    if (error.response.status === 422) {
        Vue.notify({
            group: 'default',
            title: 'Validation error',
            text: error.response.data.message
        });
    }
    if (error.response.status === 403) {
        Vue.notify({
            group: 'default',
            title: 'Too much requests',
            text: error.response.data.message
        });
    }
    if (error.response.status === 503) {
        Vue.notify({
            group: 'default',
            title: 'Github не отвечает',
            text: 'Попробуйте повторить запрос позже'
        })
    }
    if (error.response.status === 404) {
        Vue.notify({
            group: 'default',
            title: 'Что-то пошло не так',
            text: error.response.data.message
        })
    }
    return Promise.reject(error);
});


