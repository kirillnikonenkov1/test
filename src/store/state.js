const state = {
    users: [],
    totalNumOfUsers: null,
    user: {},
    usersPerPage: 30,
    // Ограничение на количество отображаемых пользоватлей из GitHub API
    // https://docs.github.com/v3/search/
    maxUsersDisplay: 1000
}

export default state
