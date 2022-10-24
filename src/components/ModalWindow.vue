<template>
  <transition name="modal-fade">
    <div class="modal-backdrop">
      <div class="modal-window">
        <header class="modal-header">
          <slot name="header"></slot>
          <button
            type="button"
            class="btn-close"
            @click="close">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512">
              <path
                fill="currentColor"
                d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"
              ></path>
            </svg>
          </button>
        </header>

        <section class="modal-body">
          <slot name="body">
            Yes, you're right! These accessories belong to Shelby Cobra.
          </slot>
        </section>

        <footer class="modal-footer">
          <slot name="footer"></slot>
          <button
            type="button"
            class="btn-green"
            @click="close"
          >
            Close modal
          </button>
        </footer>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "ModalWindow",
  data() {
    return {
      show: false
    };
  },
  methods: {
    close() {
      this.$emit("close");
    }
  }
};
</script>

<style lang="scss" scoped>
.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: var(--color-modal-backdrop);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-window {
  background: var(--color-white);
  box-shadow: 2px 2px 20px 1px;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
}

.modal-header,
.modal-footer {
  padding: 15px;
  display: flex;
}

.modal-header {
  position: relative;
  border-bottom: 1px solid var(--color-white);
  color: var(--color-modal-green);
  justify-content: space-between;
}

.modal-footer {
  border-top: 1px solid var(--color-white);
  flex-direction: column;
  justify-content: flex-end;
}

.modal-body {
  position: relative;
  padding: 20px 10px;
}

.btn-close {
  position: absolute;
  top: 0;
  right: 0;
  border: none;
  font-size: 20px;
  padding: 10px;
  cursor: pointer;
  font-weight: bold;
  color: var(--color-modal-green);
  background: transparent;
}

.btn-green {
  color: var(--color-white);
  background: var(--color-modal-green);
  border: 1px solid var(--color-modal-green);
  border-radius: 2px;
}

.modal-fade-enter,
.modal-fade-leave-to {
  opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.5s ease;
}
</style>