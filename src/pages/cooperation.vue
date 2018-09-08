<template>
  <div>
    <Header/>
<div class="coop-wrap">
  <el-breadcrumb separator-class="el-icon-arrow-right">
    <el-breadcrumb-item :to="{ path: '/' }">秒租业主</el-breadcrumb-item>
    <el-breadcrumb-item>商务合作</el-breadcrumb-item>
  </el-breadcrumb>
  <Menu/>
  <ul class="coop-content">
    <li>
      <p class="title">媒体采访及合作</p>
      <p>联系人：Dana</p>
      <p>邮箱：dana.cheng@sandbox3.cn</p>
    </li>
    <li>
      <p class="title ">广告业务/市场合作</p>
      <p> 邮箱：info@sandbox3.cn</p>
    </li>
</ul>
</div>
    <Footer/>
  </div>
</template>

<script>
  import Header from '../components/header'
  import Footer from '../components/footer'
  import Menu from '../components/menu'
  export default {
    name: 'Cooperation',
    components:{
      Header,Footer,Menu
    },
    data() {
      return {

      }
    }
  }
</script>

<style scoped>
  .coop-wrap{
    width: 1200px;
    min-height: 500px;
    margin: 0 auto;
  }
  .el-breadcrumb{
    margin: 50px 0 30px 0;
  }
  .coop-content{
    display: inline-block;
    vertical-align: top;
    width: 850px;
    margin-left: 50px;
  }
  .coop-content li{
    margin-bottom: 50px;
  }
  .coop-content li p{
    line-height: 2.5;
  }
  .title{
    font-size: 20px;
    font-weight: bold;
  }
</style>
