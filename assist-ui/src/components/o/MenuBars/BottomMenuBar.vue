<template>
  <div class="bottom-menu-bar">
    <router-link to="/CreateBill">
      <i class="el-icon-document-add"></i>
    </router-link>
    <router-link to="/">
      <i class="el-icon-document"></i>
    </router-link>
    <router-link to="/Settings">
      <i class="el-icon-setting"></i>
    </router-link>
  </div>
</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>
.bottom-menu-bar {
  width: 100vw;
  height: 50px;
  background-color: $bg-dark-main;
  margin: -8px 0 0 -8px;
  bottom: 0;
  position: absolute;
}

i {
  color: $text-main;
  font-size: 35px;

  &:hover {
    cursor: pointer;
    color: $color-primary;
  }
}
</style>
