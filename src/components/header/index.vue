<template>
  <div>
      <span class="header-wrap">秒租办公</span>
      <el-menu
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        :router="true"
        background-color="#f56c6c"
        text-color="#fff"
        active-text-color="#fff"
      >
        <el-menu-item index="/help">帮助</el-menu-item>
        <el-menu-item v-if="user" index="/register">注册</el-menu-item>
        <el-menu-item v-if="user" index="/login">登陆</el-menu-item>
        <el-menu-item index="/">首页</el-menu-item>
      </el-menu>
  </div>
</template>

<script>
  export default {
    name: 'Header',
    data() {
      return {
          user:true,
      }
    },
    methods: {
      handleSelect(key, keyPath) {
        // console.log(key, keyPath);
      },
    }
  }
</script>

<style scoped>
  @import './index.css';
</style>
