<template>
  <button class="btn" :type="type" :disabled="disabled">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'Button',

  props: {
    type: { type: String, required: false, default: 'button' },
    disabled: { type: Boolean, required: false, default: false }
  }
}
</script>

<style lang="scss" scoped>
.btn {
  color: #fff;
  background: #4caf50;
  border-radius: 2em;
  padding: 1.25em 2em;
  border: none;
  transition: .25s all;
  cursor: pointer;

  &:hover {
    background: #3c8f3f;
  }

  &[disabled]{
    opacity: .5;
  }
}
</style>
