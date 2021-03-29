<template>
  <div class="container">
    <div v-if="showPlug" class="plug">
      {{ plugText }}
    </div>

    <div v-if="!showPlug">
      <div class="sorting d-flex flex-wrap mb-5">
        <c-button
          class="mr-2 mb-3"
          :loading="loading"
          @click="searchWithSorting('desc')"
        >
          Сортировать по убыванию
        </c-button>
        <c-button
          class="mb-3"
          :loading="loading"
          @click="searchWithSorting('asc')"
        >
          Сортировать по возрастанию
        </c-button>
      </div>

      <listView
        :items="getUsers"
      >
        <template v-slot:default="item">
          <card
            @click="openCard(item.item)"
          >
            <div class="mb-2 ma-auto card__img-wrapper">
              <img :src="item.item.avatar_url" alt="user avatar">
            </div>
            <p class="mb-2 word-break">
              <span class="text-bold">Login:</span>
              {{ item.item.login }}
            </p>
            <p class="mb-2">
              <span class="text-bold">Type:</span>
              {{ item.item.type }}
            </p>
          </card>
        </template>
      </listView>

      <pagination
        :num-of-pages="getTotalNumOfPages"
        :current-page="+$route.query.page"
        @change="v => $router.push({name: 'search', query: { page: v }})"
      />

    </div>

    <router-view></router-view>
  </div>
</template>

<script>
import listView from '@/components/listView';
import card from '@/components/ui/Card';
import pagination from '@/components/pagination'
import {mapActions, mapGetters} from "vuex";

export default {
  name: 'search',
  components: {
    listView,
    card,
    pagination
  },
  data() {
    return {
      loading: false,
      plugText: '',
      showPlug: false
    }
  },
  computed: {
    ...mapGetters(['getUsers', 'getTotalNumOfPages'])
  },
  methods: {
    ...mapActions(['searchGitUser', 'searchUserByLogin']),

    searchWithSorting(direction) {
      this.loading = true
      this.searchGitUser({
        query: this.$route.params.query,
        page: 1,
        sorting: direction
      })
        .then(response => {
          this.loading = false
        })
        .catch(error => {
          this.loading = false
        })
    },
    searchUsers() {
      this.searchGitUser({
        query: this.$route.params.query,
        page: this.$route.query.page
      }).then(response => {
        if (response.data.items.length === 0) {
          this.plugText = 'Упс... Ничего не найдено'
          this.showPlug = true
        }
      }).catch(error => {
        if (error.response.status === 403) {
          this.plugText = 'Слишком много запросов, подождите минуту и повторите попытку;)'
          this.showPlug = true
        }
      })
    },
    openCard(item) {
      this.$router.push({
        name: 'user',
        params: { login: item.login.toString() },
        query: {page: this.$route.query.page}
      })
    }
  },
  watch: {
    '$route'(to, from) {
      this.showPlug = false
      this.searchUsers()
    }
  },
  created () {
    !this.getUsers.length && this.searchUsers()
  },
  beforeRouteEnter(to, from, next) {
    if (!to.query.page || +to.query.page <= 0) {
      return next({name: 'search', params: {query: to.params.query}, query: {page: '1'}})
    }
    return next()
  }
}
</script>

<style scoped lang="scss">
.plug {
  width: 100%;
  font-size: 32px;
  text-align: center;
}
</style>
