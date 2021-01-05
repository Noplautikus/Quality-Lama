<template>
  <i v-if="direction == 'right'" class="el-icon-caret-right"></i>
  <i v-if="direction == 'left'" class="el-icon-caret-left"></i>
</template>

<script>
export default {
  props: {
    direction: {
      required: true,
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
i {
  color: $color-primary;
  font-size: 40px;

  border: 2px solid $color-primary;
  border-radius: 50%;

  &:hover {
    cursor: pointer;
    color: $color-primary-hover;
    border: 2px solid $color-primary-hover;
  }
}
</style>
