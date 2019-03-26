<template>
	<div id="app">
		<header-top></header-top>
    	<v-header></v-header>
		<router-view class="view"></router-view>
	</div>
</template>
<style>
body{
  margin: 0px;
  width: 100%;
  min-width: 1050px;
}
</style>
<script>
import HelloWorld from '@/components/HelloWorld.vue'
import Vheader from '@/components/Vheader.vue'
import HeaderTop from '@/components/HeaderTop.vue'

export default {
	components: {
    	HelloWorld,
    	'v-header' : Vheader,
    	'header-top' : HeaderTop
  	}
}
</script>
