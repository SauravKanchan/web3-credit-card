<script setup lang="ts">
type BaseModalProps = {
  dismissable: boolean;
};

const props = defineProps<BaseModalProps>();
const emit = defineEmits(["close"]);

function handleClickOutsideModal() {
  if (props.dismissable) {
    emit("close");
  }
}
</script>

<template>
  <div class="modal">
    <div class="modal-overlay" @click="handleClickOutsideModal"></div>
    <div class="modal-content">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100%;
  height: 100dvh;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-overlay {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1001;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(2px);
}

.modal-content {
  position: relative;
  z-index: 1002;
  width: 100%;
  max-width: 400px;
  padding: 1.25rem;
  background-color: #242424;
  border-radius: 0.5rem;
  border: 1px solid #333;
  box-shadow: 4px 4px 16px 4px rgba(0, 0, 0, 0.25);
}
</style>
