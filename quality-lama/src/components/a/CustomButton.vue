<template>
  <el-button :type="type">{{text}}</el-button>
</template>

<script>
export default {
  props: {
    type: {
      required: true,
      type: String,
    },
    text: {
      required: true,
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
.el-button--success {
  background-color: $color-primary;
  border-color: $color-primary;

  &:hover {
    background: $color-primary-hover;
    border-color: $color-primary-hover;
  }

  &:active {
    transform: scale(0.9);
  }

  &:focus {
    background-color: $color-primary;
    border-color: $color-primary;
  }
}
</style>
