<template>
  <div>
      <i class="icon-logo"></i>
      <el-menu
        class="el-menu-header"
        mode="horizontal"
        @select="handleSelect"
        :router="true"
        background-color="#363F45"
        text-color="#fff"
        active-text-color="#FB274B"
      >
        <el-menu-item index="/rentOwner"><i class="icon-rent-owner"></i><i class="rent-owner-btn"></i></el-menu-item>
        <el-menu-item index="/"><i></i>简体中文</el-menu-item>
        <el-menu-item index="/"><span @click="handleLogin()">登录</span></el-menu-item>
        <el-menu-item index="/"><span @click="handleDownload()">下载APP</span></el-menu-item>
        <el-menu-item index="/spaces">合作空间</el-menu-item>
        <el-menu-item index="/hotSpaces">热门空间</el-menu-item>
        <el-menu-item index="/">首页</el-menu-item>
      </el-menu>
    <Login @dialogLoginHide="dialogLoginHide" :dialogLoginVisible="isShowLogin"></Login>
    <Download @dialogDownloadHide="dialogDownloadHide" :dialogDownloadVisible="isShowDownload"></Download>
  </div>
</template>

<script>
  import Login from '../components/login'
  import Download from '../components/download'
  export default {
    name: 'Header',
    components:{
      Login,Download
    },
    data() {
      return {
        isShowLogin: false,
        isShowDownload:false,
      }
    },
    methods: {
      handleSelect(key, keyPath) {

      },
      handleLogin () {
        this.isShowLogin = true
      },
      handleDownload () {
        this.isShowDownload = true
      },
      dialogLoginHide () {
        this.isShowLogin= false
      },
      dialogDownloadHide () {
        this.isShowDownload= false
      }
    }
  }
</script>

<style scoped>
  .el-menu-header{
    height: 66px;
    line-height: 66px;
    position: relative;
    padding-right: 50px;
  }
  .icon-logo{
    width: 94px;
    height: 44px;
    background: url("../img/public/logo.png");
    position: absolute;
    z-index: 2;
    top:11px;
    left:100px;
  }
  .el-menu-header li{
    float: right;
    font-size: 16px;
  }
  .el-menu-header .rent-owner-btn{
    display: inline-block;
    width: 115px;
    height: 46px;
    background: url("../img/public/owner-btn.png");
    z-index: 2;
    position: relative;
  }
  .el-menu-header .icon-rent-owner{
    display: inline-block;
    width: 21px;
    height: 21px;
    background: url("../img/public/icon-owner.png");
    z-index: 3;
    position: absolute;
    top:21px;
    left: 30px;
  }
</style>
