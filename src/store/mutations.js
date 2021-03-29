export default {
    setSearchGitUserResults(state, payload) {
        state.users = [...payload]
    },
    setTotalNumberOfUsers(state, payload) {
        state.totalNumOfUsers = +payload
    },
    setUser(state, payload) {
        state.user = {...payload}
    }
}
