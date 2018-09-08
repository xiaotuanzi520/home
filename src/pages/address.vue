<template>
  <div>
    <Header/>
    <div class="address-wrap">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">秒租业主</el-breadcrumb-item>
        <el-breadcrumb-item>公司历程</el-breadcrumb-item>
      </el-breadcrumb>
      <Menu/>
      <div class="address-content">
        <p>字段上海市杨浦区长阳路长阳创谷1487号1号楼1110室</p>
          <i> </i>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
  import Header from '../components/header'
  import Footer from '../components/footer'
  import Menu from '../components/menu'
  export default {
    name: 'Address',
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
  .address-wrap{
    width: 1200px;
    min-height: 500px;
    margin: 0 auto;
  }
  .el-breadcrumb{
    margin: 50px 0 30px 0;
  }
  .address-content{
    display: inline-block;
    width: 850px;
    height: 282px;
    margin-left: 100px;
    vertical-align:middle;
  }
</style>
