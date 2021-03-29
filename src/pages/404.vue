<template>
  <div class="container">
    <div class="error">
      <span class="error__message">
      Упс... Похоже такой страницы не существует
    </span>
      <c-button
        class="mt-5"
        @click="$router.push({ name: 'index' })"
      >
        Вернуться на главную
      </c-button>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
.error {
  height: 99vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  &__message {
    display: block;
    font-size: 32px;
    text-align: center;
  }
}
</style>
