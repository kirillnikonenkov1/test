export default {
    getUsers: state => state.users,
    getTotalNumOfPages: state => {
        return Math.ceil(state.totalNumOfUsers / 30)
    },
    getUser: state => state.user,
    getUsersPerPage: state => state.usersPerPage,
    getMaxNumOfPages: state => {
        return Math.ceil(state.maxUsersDisplay / 30)
    }
}
