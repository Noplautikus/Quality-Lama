<template>
  <el-input class="custom-input" :placeholder="placeholder"></el-input>
</template>

<script>
export default {
  props: {
    placeholder: {
      required: false,
      type: String,
    },
  },
};
</script>

<style lang="scss">
.custom-input {
  width: 200px;
  display: block;

  .el-input__inner {
    background-color: $bg-dark-third;
    border: 1px solid $bg-dark-main;
    color: $text-main;
  }
}
</style>
