<template>
  <div
    v-if="numOfPages"
    class="pagination d-flex flex-wrap"
  >
      <c-button
          class="mr-1"
          :disabled="currentPage === 1"
          @click="$emit('change', currentPage - 1)"
      >
        Назад
      </c-button>
      <c-button
        v-if="showItem(item)"
        v-for="item in numOfPages"
        :key="item"
        :class="{'pagination__item--active': currentPage === item}"
        class="pagination__item mr-1"
        @click="$emit('change', item)"
      >
          {{ item }}
      </c-button>
    <c-button
      :disabled="currentPage === numOfPages"
      @click="$emit('change', currentPage + 1)"
    >
      Вперед
    </c-button>
  </div>
</template>

<script>
export default {
  props: {
    numOfPages: {type: Number, default: 0},
    showLeft: {type: Number, default: 5},
    showRight: {type: Number, default: 5},
    currentPage: {type: [String, Number], default: 1}
  },
  methods: {
    showItem(item) {
      if (this.currentPage <= this.showLeft) {
        return item < (this.showLeft + this.showRight)
      }
      if (this.currentPage > this.showLeft && this.currentPage < (this.numOfPages - this.showRight)) {
        return item > (this.currentPage - this.showLeft) && item < (this.currentPage + this.showRight)
      }
        return (item - 1) > (this.numOfPages - this.showRight - this.showLeft)
    }
  }
}
</script>

<style lang="scss" scoped>
.pagination {
  &__item {
    width: 46px;
    height: 46px;
    margin-left: -2px;
    padding: 0;
    text-align: center;
    line-height: 42px;
    font-size: 14px;
    font-weight: 600;
    text-decoration: none;
    cursor: pointer;
    color: #bfc1c6;
    background-color: #fff;
    border: 2px solid #bfc1c6;

    &--active {
      color: #000;
      background-color: #fff;
      border-color: #000;
    }
  }
}
</style>
