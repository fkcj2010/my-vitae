<template>
  <div class="header">
    <el-menu
  :default-active="activeIndex2"
  class="el-menu-demo"
  mode="horizontal"
  @select="handleSelect"
  background-color="#545c64"
  text-color="#fff"
  active-text-color="#ffd04b"
  center=true
  >
  <el-menu-item index="1">首页</el-menu-item>
  <el-menu-item index="2">学无止境</el-menu-item>
  <!-- <el-submenu index="2">
    <template slot="title">我的工作台</template>
    <el-menu-item index="2-1">选项1</el-menu-item>
    <el-menu-item index="2-2">选项2</el-menu-item>
    <el-menu-item index="2-3">选项3</el-menu-item>
    <el-submenu index="2-4">
      <template slot="title">选项4</template>
      <el-menu-item index="2-4-1">选项1</el-menu-item>
      <el-menu-item index="2-4-2">选项2</el-menu-item>
      <el-menu-item index="2-4-3">选项3</el-menu-item>
    </el-submenu>
  </el-submenu> -->
  <el-menu-item index="3">生活乐闻</el-menu-item>
  <el-menu-item index="4">电影天地</el-menu-item>
  <el-menu-item index="5"><a href="https://www.baidu.com" target="_blank">关于我</a></el-menu-item>
</el-menu>

  </div>
</template>

<script>
export default {
  name: 'Vheader',
  props: {
    msg: String
  },
  data() {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-menu-demo{
  padding-left: 50px;
}
</style>
