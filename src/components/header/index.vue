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
        <el-menu-item index="/"><i></i>简体中文</el-menu-item>
        <el-menu-item index="/"><span @click="handleLogin()">登录</span></el-menu-item>
        <el-menu-item index="/"><span @click="handleRegister()">注册</span></el-menu-item>
        <el-menu-item index="/"><span @click="handleDownload()">下载APP</span></el-menu-item>
        <el-menu-item index="/help">帮助</el-menu-item>
        <el-menu-item index="/case">案例</el-menu-item>
        <el-menu-item index="/spaces">合作空间</el-menu-item>
        <el-menu-item index="/rentOwner">秒租业主</el-menu-item>
        <el-menu-item index="/hotSpaces">热门空间</el-menu-item>
        <el-menu-item index="/">首页</el-menu-item>
      </el-menu>
    <Login @dialogLoginHide="dialogLoginHide" :dialogLoginVisible="isShowLogin"></Login>
    <Register @dialogRegisterHide="dialogRegisterHide" :dialogRegisterVisible="isShowRegister"></Register>
    <Download @dialogDownloadHide="dialogDownloadHide" :dialogDownloadVisible="isShowDownload"></Download>
  </div>
</template>

<script>
  import Login from '../../components/login/index'
  import Register from '../../components/register/index'
  import Download from '../../components/download/index'
  export default {
    name: 'Header',
    components:{
      Login,Register,Download
    },
    data() {
      return {
        isShowLogin: false,
        isShowRegister:false,
        isShowDownload:false,
        user:true,
      }
    },
    methods: {
      handleSelect(key, keyPath) {

      },
      handleLogin () {
        this.isShowLogin = true
      },
      handleRegister () {
        this.isShowRegister = true
      },
      handleDownload () {
        this.isShowDownload = true
      },
      dialogLoginHide () {
        this.isShowLogin= false
      },
      dialogRegisterHide () {
        this.isShowRegister= false
      },
      dialogDownloadHide () {
        this.isShowDownload= false
      }
    }
  }
</script>

<style scoped>
  @import './index.css';
</style>
