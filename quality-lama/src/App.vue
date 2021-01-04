<template>
  <top-menu-bar/>
  <div class="content-area">
    <router-view/>
  </div>
  <bottom-menu-bar/>
</template>

<script>
import store from '@/store';
import { USER_SETTINGS_FILE_PATH } from '@/constants/filePaths';
import fileService from '@/services/fileService';
import BottomMenuBar from './components/o/MenuBars/BottomMenuBar.vue';
import TopMenuBar from './components/o/MenuBars/TopMenuBar.vue';

export default {
  components: {
    TopMenuBar,
    BottomMenuBar,
  },
  setup() {
    function restoreStateOutOfBackupFile(pathToFile, storeAction) {
      if (fileService.fileExists(pathToFile)) {
        const fileData = fileService.readJsonFromFile(pathToFile);
        store.commit(storeAction, fileData);
      }
    }

    return {
      restoreStateOutOfBackupFile,
    };
  },
  mounted() {
    this.restoreStateOutOfBackupFile(USER_SETTINGS_FILE_PATH, 'SAVE_USER_SETTINGS');
  },
};
</script>

<style lang="scss">
html {
  height: 100%;
}

body {
  background-color: $bg-dark-second;
  margin: 0;
  height: 100%;
}

.content-area {
    height: 83%;
    overflow: auto;
    margin: 0 8px 0 8px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  display: flex;
  flex-direction: column;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
