<script>
export default {
  render: function (createElement) {
    return createElement(
      'button',
      {
        class: ['button'],
        style: [this.customStyles],
        disabled: this.loading,
        on: {
          click: (event) => {
            this.$emit('click')
          }
        }
      },
      [this.$slots.default]
    )
  },
  props: {
    loading: {type: Boolean, default: false},
    width: {type: String, default: ''},
    height: {type: String, default: ''}
  },
  watch: {
    loading(val) {
      this.$el.innerHTML = val ? `<div class="loader">
            <div class="bounce1"></div>
            <div class="bounce2"></div>
            <div class="bounce3"></div>
          </div>` : this.$slots.default[0].text
    }
  },
  computed: {
    customStyles() {
      const _styles = {}

      const height = this.convertToUnit(this.height)
      const width = this.convertToUnit(this.width)

      if (height) _styles.height = height
      if (width) _styles.width = width

      return _styles
    }
  },
  methods: {
    convertToUnit(str, unit = 'px') {
      if (str == null || str === '') {
        return undefined
      } else if (isNaN(+str)) {
        return String(str)
      } else {
        return `${Number(str)}${unit}`
      }
    }
  }
}
</script>
