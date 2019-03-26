<template>
  <div id="app">
    <main-ui>
      <p>body here</p>
    </main-ui>
  </div>
</template>

<script>
import MainUi from "./layouts/Main.vue";

export default {
  name: 'app',
  components: {
    MainUi
  }
}
</script>

<style>
body{
  margin: 0px;
  width: 100%;
  min-width: 1050px;
}
</style>
