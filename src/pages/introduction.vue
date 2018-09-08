<template>
  <div>
    <Header/>
    <div class="intr-wrap">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">秒租业主</el-breadcrumb-item>
        <el-breadcrumb-item>公司介绍</el-breadcrumb-item>
      </el-breadcrumb>
      <Menu/>
      <div class="intr-content">
            <i> </i>
        <p>
          <span>上海展想创合企业管理有限公司</span>（简称“创合”）是由两位创始人共同创业的互联网科技公司，旨在以移动互联及互联网+理念为框架，智能办公租赁为基础，服务创新者为目标，即时交易为特色，整合社会办公资源，打造去中间化的协同办公租赁服务平台。连接人、空间、服务、硬件的开放平台，从而形成一个全新的办公及创新生态系统，改变全球办公租赁及服务的方式。
        </p>
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
    name: 'Introduction',
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
.intr-wrap{
  width: 1200px;
  min-height: 500px;
  margin: 0 auto;
}
  .el-breadcrumb{
    margin: 50px 0 30px 0;
  }
  .intr-content{
    display: inline-block;
    width: 850px;
    height: 282px;
    margin-left: 100px;
    vertical-align:middle;
    text-align: center;
  }
  .intr-content i{
    display: inline-block;
    width: 84px;
    height: 116px;
    margin: 20px 0;
    background-image: url('../img/pages/icon-intr.png');
  }
.intr-content p{
  text-align: left;
}
.intr-content span{
  color: #F10215;
  font-size: 20px;
}
</style>
