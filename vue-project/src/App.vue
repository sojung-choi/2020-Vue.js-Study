<template>
  <div id="app">
    <div id="header">
      <main-header>
    </div>
    <img src="./assets/logo.png">
    <router-view></router-view>
  </div>
</template>

<script>
import MainHeader from './components/common/MainHeader.vue'

export default {
  name: 'App',
  components: {
    'main-header': MainHeader
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
