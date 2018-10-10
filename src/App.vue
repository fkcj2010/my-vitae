<template>
  <div id="app">
    <Vheader></Vheader>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Vheader from './components/Vheader.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    Vheader
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
