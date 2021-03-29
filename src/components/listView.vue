<template>
  <div class="list-view">
    <div class="list-view__wrapper d-flex justify-space-between justify-md-start flex-wrap">
      <div
        v-for="item in items"
        :key="item.id"
        class="list-view__item mb-5">
        <slot v-bind:item="item"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: { type: Array, default:(()=>[]) }
  },
}
</script>

<style scoped lang="scss">
.list-view {
  &__item {
    flex: 0 0 calc(50% - 12px);
    max-width: calc(50% - 12px);
    box-shadow: 0px 0px 5px 5px rgba(34, 60, 80, 0.13);

    &:nth-child(2n) {
      margin-right: 0px!important;
    }
  }
}

@media (min-width: 768px) {
  .list-view {
    &__item {
      flex-basis: calc(25% - 16px);
      margin-right: 16px!important;
      &:nth-child(2n) {
        margin-right: 16px!important;
      }
      &:nth-child(4n) {
        margin-right: 0px!important;
      }
    }
  }
}
</style>
