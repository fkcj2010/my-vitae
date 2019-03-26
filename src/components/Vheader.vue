<template>
  <div class="header">
  <el-menu
  :default-active="this.$route.path"
  class="el-menu-demo"
  mode="horizontal"
  :router="true"
  @select="handleSelect"
  background-color="#545c64"
  text-color="#fff"
  active-text-color="#ffd04b"
  >
    <el-menu-item v-for="(item,i) in navList" :key="i" :index="item.name">
        {{ item.navItem }}
    </el-menu-item>
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
      activeIndex: '/life',
      navList:[
          {name:'/',navItem:'首页'},
          {name:'/study',navItem:'学无止境'},
          {name:'/life',navItem:'生活乐闻'},
          {name:'/movie',navItem:'电影天地'},
          {name:'/food',navItem:'美食天下'}
      ]
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style scoped>
.el-menu-demo{
  padding-left: 100px;
}
</style>
