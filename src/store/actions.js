import axios from "axios";

export default {
    searchGitUser({commit, getters}, payload) {
        let _api_url = `https://api.github.com/search/users?q=${payload.query}+in:login;per_page=${getters.getUsersPerPage};page=${payload.page}`

        if (payload.sorting) {
            _api_url += `;sort=repositories&order=${payload.sorting}`
        }

        return axios.get(_api_url)
            .then(response => {
                commit('setSearchGitUserResults', response.data.items)
                commit('setTotalNumberOfUsers', response.data.total_count)
                return response
            })
    },
    searchUserByLogin({commit}, payload) {
        let _api_url = `https://api.github.com/users/${payload}`

        return axios.get(_api_url)
            .then(response => {
                commit('setUser', response.data)
                return response
            })
    },
    clearUser({commit}) {
        commit('setUser', {})
    }
}
