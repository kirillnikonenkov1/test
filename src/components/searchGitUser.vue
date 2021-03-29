<template>
  <div class="d-flex align-center search-users">
    <c-input
      v-model="searchQuery"
      class="mr-2"
      placeholder="Логин пользователя"
      @enter="search"
    />
    <c-button
      @click="search"
      :loading="loading"
      min-width="110px"
    >
      Поиск
    </c-button>
  </div>
</template>

<script>
import {mapActions} from 'vuex'

export default {
  name: 'SearchGitUsers',
  data() {
    return {
      searchQuery: '',
      loading: false
    }
  },
  methods: {
    ...mapActions(['searchGitUser']),
    search() {
      if (this.searchQuery.length === 0) {
        this.$notify({
          group: 'default',
          title: 'Ошибка валидации',
          text: 'Строка не может быть пустой, введите хотя бы 1 символ'
        })
        return
      }

      this.loading = true
      this.searchGitUser({
        query: this.searchQuery,
        page: 1
      })
      .then(response => {
        this.loading = false
        this.$router.push({
            name: 'search',
            params: { query: this.searchQuery },
            query: { page: '1' }
          })
      })
      .catch(error => {
        this.loading = false
      })
    }
  },
  created () {
    this.searchQuery = this.$route.params.query || ''
  }
}
</script>

<style scoped lang="scss">
.search-users {
  max-width: 600px;
  margin: 0 auto;
  padding: {
    top: 60px;
    bottom: 60px;
  };
}
</style>
