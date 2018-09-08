<template>
  <div>
    <Header/>
    <div class="history-wrap">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">秒租业主</el-breadcrumb-item>
        <el-breadcrumb-item>公司历程</el-breadcrumb-item>
      </el-breadcrumb>
      <Menu/>
      <ul class="history-content">
          <li>
            <p><span>2015</span>年</p>
            <p>2015年 6月创合创立。</p>
            <p>8月秒租办公APP1.0登陆App Store及安卓商店；秒租房东开始测试。</p>
          </li>
        <li>
          <p><span>2016</span>年</p>
          <p>2016年 4月国家发改委副司长孙学工领导一行参访创合。</p>
          <p>9月中央常委韩正领导一行参访创合。</p>
        </li>
        <li>
          <p><span>2017</span>年</p>
          <p>2017年 2月国家发改委林念修主任一行参访创合。</p>
          <p> 3月秒租房东SaaS开始使用。</p>
          <p>5月上海市人大主任殷一璀领导一行参访创合。国资委领导一行参访创合。</p>
          <p>6月国家科技部领导一行参访创合。</p>
          <p>9月秒租办公APP3.0更新。</p>
          <p>11月创合北京发展中心及广州发展中心成立。</p>
          <p>12月创合获得2017年海归创业大赛第二名。Plug and Play全球地产科技独角兽中国独角兽。</p>
        </li>
        <li>
          <p><span>2018</span>年</p>
          <p>1月秒租房东APP正式登陆App Store及安卓商店；创合微信小程序模块开始测试。</p>
          <p>3月创合天使轮融资完成，估值人民币1亿。</p>
          <p>4月李克强总理参访园区，创合为参访企业之一。</p>
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
    name: 'History',
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
  .history-wrap{
    width: 1200px;
    min-height: 500px;
    margin: 0 auto;
  }
  .el-breadcrumb{
    margin: 50px 0 30px 0;
  }
  .history-content{
    display: inline-block;
    vertical-align: top;
    width: 850px;
    margin-left: 100px;
  }
  .history-content li{
    border-bottom: 1px solid #ddd;
    padding-bottom: 30px;
    margin-bottom: 30px;
  }
  .history-content li span{
    font-size: 20px;
    font-weight: bold;
  }
</style>
