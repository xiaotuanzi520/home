<template>
      <el-menu
        class="el-menu-demo"
        @select="handleSelect"
        :router="true"
        background-color="#fff"
        text-color="#666"
        active-text-color="#ddd"
      >
        <el-menu-item index="/Introduction">公司介绍</el-menu-item>
        <el-menu-item index="/History">发展历程</el-menu-item>
        <el-menu-item index="/Service">服务条款</el-menu-item>
        <el-menu-item index="/Cooperation">商务合作</el-menu-item>
        <el-menu-item index="/Address">公司地址</el-menu-item>
      </el-menu>
</template>

<script>
  export default {
    name: 'Menu',
    data() {
      return {

      }
    },
    methods: {
      handleSelect(key, keyPath) {

      },
    }
  }
</script>

<style scoped>
.el-menu-demo{
  width: 200px;
}
  .el-menu{
    border: solid 1px #e6e6e6;
    display: inline-block;
    vertical-align:middle;
  }
</style>
