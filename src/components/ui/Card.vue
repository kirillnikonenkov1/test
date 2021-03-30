<template>
  <div class="pa-5 card cursor-pointer" @click="$emit('click')">
    <slot></slot>
  </div>
</template>

<script>
export default {
}
</script>
