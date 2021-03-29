<template>
  <div class="pa-5 card cursor-pointer" @click="$emit('click')">
    <slot></slot>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped lang="scss">
::v-deep .card {
  &__img-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 150px;
    background-color: #f0f0f0;
    border-radius: 50%;
    overflow: hidden;
  }
}
</style>
