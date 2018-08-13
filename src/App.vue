<template>
  <div id="app">
    <div>
                  <el-menu
                    class="el-menu-demo"
                    mode="horizontal"
                    @select="handleSelect"
                    :router="true"
                    background-color="#545c64"
                    text-color="#fff"
                    active-text-color="#ffd04b">
                <el-menu-item index="/">首页</el-menu-item>
                <el-menu-item v-if="user" index="/register">注册</el-menu-item>
                <el-menu-item v-if="user" index="/land">登陆</el-menu-item>
                <el-menu-item index="/addmessage">留言</el-menu-item>
            </el-menu>
    </div>
    <keep-alive>
            <router-view v-if="$route.meta.keepAlive"></router-view>
        </keep-alive>
        <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
               return {
                user: true
            }
  },
  methods:{
                handleSelect(key, keyPath) {
                // console.log(key, keyPath);
            },
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
