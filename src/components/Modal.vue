<template>
  <transition name="fade">
    <div class="modal">
      <div @mousedown.self.stop="$emit('close')" class="modal-overlay">
        <div class="modal-window">
          <button @click="$emit('close')" class="modal-close"></button>
          <div class="modal-body">
            <div class="modal-title">
              <slot name="title" />
            </div>
            <slot name="content" />
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    show(v) {
      if (v) {

      } else {

      }
    }
  },
  methods: {
    closeEventListener(e) {
      if (e.which === 27) {
        this.$emit('close')
      }
    }
  },
  mounted() {
    // Убираем скролл страницы
    document.querySelector('html').classList.add('no-scroll')

    // Вставляем первым внутри body
    document
      .querySelector('body')
      .insertBefore(this.$el, document.querySelector('body').firstChild)

    // Close ESC
    document.addEventListener('keydown', this.closeEventListener)
  },
  beforeDestroy() {
    document.removeEventListener('keydown', this.closeEventListener)
    document.querySelector('html').classList.remove('no-scroll')
    this.$el.parentNode && this.$el.parentNode.removeChild(this.$el)
  }
}
</script>

<style lang="scss">
.modal {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: rgba(34, 43, 51, 0.8);
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  .modal-overlay {
    max-height: 100%;
    overflow: auto;
    width: 100%;
    text-align: center;
    padding: 40px;
  }

  .modal-window {
    border-radius: 4px;
    background: #fff;
    position: relative;
    width: 600px;
    display: inline-block;
  }

  .modal-title {
    display: block;
    color: #222b33;
    font-size: 19px;
    line-height: 26px;
    font-weight: 600;
    text-transform: none;
    margin-bottom: 30px;
    text-align: center;
  }

  .modal-close {
    cursor: pointer;
    border: 0;
    outline: none;
    font-size: 25px;
    font-weight: 900;
    color: #c7c7c7;
    width: 48px;
    height: 48px;
    position: absolute;
    background-color: #fff;
    right: 0;
    top: 0;

    &::before {
      content: '\D7';
      text-align: center;
    }
  }

  .modal-body {
    padding: 50px;
  }

  .modal-body p {
    margin: 0 0 4px;
  }

  .modal-footer {
    padding: 4px 8px;
    border-top: 1px solid #eee;
  }
}

body.mobile {
  .modal-overlay {
    padding: 8px;
  }

  .modal-window {
    width: 100%;
  }

  .modal-body {
    padding: 50px 24px;
  }
}
</style>
