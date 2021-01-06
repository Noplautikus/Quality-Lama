<template>
  <el-input class="custom-number-input" :placeholder="placeholder" type="number"></el-input>
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
.custom-number-input {
  width: 200px;
  display: block;

  .el-input__inner {
    background-color: $bg-dark-third;
    border: 1px solid $bg-dark-main;
    color: $text-main;
  }
}

input[type=number]::-webkit-inner-spin-button {
  -webkit-appearance: none;
}
</style>
