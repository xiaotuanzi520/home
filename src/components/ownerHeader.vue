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
        <el-menu-item index="/"><i></i>简体中文</el-menu-item>
        <el-menu-item index="/"><span @click="handleLogin()">业主登录</span></el-menu-item>
        <el-menu-item index="/createHouse">业主申请</el-menu-item>
        <el-menu-item index="/"><span @click="handleDownload()">下载APP</span></el-menu-item>
        <el-menu-item index="/help">帮助</el-menu-item>
        <el-menu-item index="/case">案例</el-menu-item>
        <el-menu-item index="/rentOwner">秒租业主</el-menu-item>
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
    name: 'OwnerHeader',
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
</style>
