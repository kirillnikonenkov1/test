<template>
  <div class="container pb-10">
    <searchGitUser/>
    <router-view />
  </div>
</template>

<script>
import searchGitUser from '@/components/searchGitUser';

export default {
  name: 'index',
  components: {
    searchGitUser
  }
}
</script>
