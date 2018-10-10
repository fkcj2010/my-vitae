<template>
  <div id="app">
    <header-top></header-top>
    <v-header></v-header>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Vheader from './components/Vheader.vue'
import HeaderTop from './components/HeaderTop.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    'v-header' : Vheader,
    'header-top' : HeaderTop
  }
}
</script>

<style>
body{
  margin: 0px;
}
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
