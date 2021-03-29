export default {
    getUsers: state => state.users,
    getTotalNumOfPages: state => {
        return Math.ceil(state.totalNumOfUsers / 30)
    },
    getUser: state => state.user
}
