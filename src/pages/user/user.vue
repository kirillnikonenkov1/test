<template>
  <modal :show="true" @close="closeModal">
      <template #title>
          {{ $route.params.login }}
      </template>
      <template #content>
        <loader v-if="isLoading"/>
        <div v-if="!isLoading" class="user-modal">
          <img :src="getUser.avatar_url" alt="" width="200px" height="200px" class="user-modal__img mb-5">

          <p
            v-for="item in content.userDescriptionConfig"
            class="user-modal__text"
          >
            <span class="text-bold">{{ item.title }}:</span> {{ getUser[item.key] || '-' }}
          </p>

          <p class="user-modal__text">
            <span class="text-bold">Ссылка на GitHub:</span>
            <a
              :href="getUser.html_url"
              rel="noopener noreferrer nofollow" target="_blank"
              class="user-modal__link"
            >
              {{ getUser.html_url }}
            </a>
          </p>
        </div>
      </template>
  </modal>
</template>

<script>
import Cloader from "@/components/ui/Cloader";
import modal from '@/components/Modal'
import { mapActions, mapGetters } from 'vuex'
import Content from './content/content'
import store from '@/store/index'

export default {
  name: 'User',
  components: {
    modal,
    'loader': Cloader
  },
  data() {
    return {
      content: Content.call(this)
    }
  },
  computed: {
    ...mapGetters(['getUser']),
    isLoading() {
      return Object.keys(this.getUser).length === 0
    }
  },
  methods: {
    ...mapActions(['searchUserByLogin', 'clearUser']),
    closeModal() {
      this.$router.push({
        name: 'search',
        params: {query: this.$route.params.query},
        query: {page: this.$route.query.page}
      })
    }
  },
  beforeRouteEnter: (to, from, next) => {
    store.dispatch('searchUserByLogin', to.params.login)
    next()
  },
  beforeRouteLeave: (to, from, next) => {
    store.dispatch('clearUser')
    next()
  }
}
</script>

<style scoped lang="scss">
.user-modal {
  &__img {
    display: block;
    margin: 0 auto;
  }
  &__text {
    text-align: left;
  }
  &__link {
    text-decoration: none;
    color: blue;

    &:visited {
      color: blue
    }

    &:hover,
    &:focus {
      color: darken(blue, 10%)
    }

    &:active {
      color: darken(blue, 20%)
    }
  }
}
</style>
