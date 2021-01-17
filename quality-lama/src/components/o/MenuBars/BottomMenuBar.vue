<template>
  <div class="bottom-menu-bar">
    <router-link to="/CreateBill">
      <i class="el-icon-document-add"></i>
    </router-link>
    <router-link to="/">
      <i class="el-icon-folder-opened"></i>
    </router-link>
    <router-link to="/Settings">
      <i class="el-icon-office-building"></i>
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
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-top: auto;
}

i {
  font-size: 35px;

  &:hover {
    cursor: pointer;
    color: $color-primary;
  }
}

.router-link-active {
  i {
    color: $color-primary;
  }
}
</style>
