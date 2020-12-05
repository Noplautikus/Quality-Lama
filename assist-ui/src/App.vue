<template>
  <top-menu-bar/>
  <router-view/>
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
body {
  background-color: $bg-dark-second;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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
