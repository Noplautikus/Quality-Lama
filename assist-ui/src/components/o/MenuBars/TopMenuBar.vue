<template>
  <div class="menu-bar">
      <div class="minimize-button">
          <i class="el-icon-minus" @click="minimizeWindow"></i>
      </div>
      <div class="close-button">
          <i class="el-icon-close" @click="closeWindow"></i>
      </div>
  </div>
</template>

<script>
const { remote } = require('electron');

export default {
  setup() {
    function minimizeWindow() {
      remote.getCurrentWindow().minimize();
    }

    function closeWindow() {
      remote.getCurrentWindow().destroy();
    }

    return {
      minimizeWindow,
      closeWindow,
    };
  },
};
</script>

<style lang="scss" scoped>
.menu-bar {
  width: 100vw;
  height: 35px;
  background-color: $bg-dark-main;
  -webkit-app-region: drag;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  .minimize-button {
    align-self: flex-end;
  }
}

i {
    color: $text-main;
    font-size: 23px;
    margin-right: 8px;
    -webkit-app-region: no-drag;

    &:hover {
      cursor: pointer;
      color: $text-main-hover;
    }
}

</style>
