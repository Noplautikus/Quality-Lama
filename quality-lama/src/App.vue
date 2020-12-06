<template>
  <top-menu-bar/>
  <div class="content-area">
    <router-view/>
  </div>
  <bottom-menu-bar/>
</template>

<script>
import BottomMenuBar from './components/o/MenuBars/BottomMenuBar.vue';
import TopMenuBar from './components/o/MenuBars/TopMenuBar.vue';

export default {
  components: {
    TopMenuBar,
    BottomMenuBar,
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
    overflow: hidden;
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
