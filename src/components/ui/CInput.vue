<template>
  <div class="width-100">
    <input
      type="text"
      class="input"
      :placeholder="placeholder"
      :value="value"
      @input="$emit('input', $event.target.value)"
      @keypress="e => emitEnterPress(e)"
    >
  </div>
</template>

<script>
export default {
  props: {
    placeholder: { type: String, default: '' },
    value: { type: String, default: ''}
  },
  methods: {
    emitEnterPress(e) {
      if (e.charCode === 13) this.$emit('enter')
    }
  }
}
</script>
