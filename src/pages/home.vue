<template>
    <div>
      <Header/>
      <div class="banner-show">
        <div class="banner-search">
          <div class="news01" id="dsy_D02_01">
            全球80万空间任你挑
          </div>
          <div class="news02">
            <ul>
              <li>办公室</li>
              <li>会议室</li>
              <li>工位</li>
              <li>其他</li>
            </ul>
          </div>
          <div class="news03" id="dsy_D02_14" style="position:relative">
            <input name="" type="text" class="sinputstyle" value="请输入空间名称" maxlength="40" style="color: rgb(136, 136, 136);">
          </div>
          <div class="news04">
            <span>热门城市：</span>北京 上海 广州 深圳
          </div>
        </div>
      </div>
      <div class="know-more">
        <h1>无论你需要1或200的空间，这里都有</h1>
              <ul>
                <li>
                  <h2>办公室</h2>
                  <h3>在专属办公空间里全职办公</h3>
                    <p>免装修</p>
                    <p>办公设置齐全</p>
                    <p>以较低的成本租赁繁华地段的办公室</p>
                  <el-button>了解更多</el-button>
                </li>
                <li>
                  <h2>办公室</h2>
                  <h3>在专属办公空间里全职办公</h3>
                    <p>免装修</p>
                    <p>办公设置齐全</p>
                    <p>以较低的成本租赁繁华地段的办公室</p>
                  <el-button>了解更多</el-button>
                </li>
                <li>
                  <h2>办公室</h2>
                  <h3>在专属办公空间里全职办公</h3>
                    <p>免装修</p>
                    <p>办公设置齐全</p>
                    <p>以较低的成本租赁繁华地段的办公室</p>
                  <el-button>了解更多</el-button>
                </li>
              </ul>
        <div>查看更多</div>
      </div>
      <div class="home-bg">
        <i class="list-one"></i>
        <h1>随时随地网上预订</h1>
        <h4>随时随地网上预订随时随地网上预订随时随地网上预订</h4>
        <i class="list-two"></i>
        <i class="list-three"></i>
        <h1>我们的合粉</h1>
        <i class="list-four"></i>
        <i class="list-five"></i>
      </div>
      <Footer/>
    </div>
</template>

<script>
  import Header from '../components/header'
  import Footer from '../components/footer'
  import ElButton from "element-ui/packages/button/src/button";
export default {
  name: 'Home',
  components:{
    ElButton,
    Header, Footer
  },
  data () {
    return {

    }
  }
}
</script>

<style scoped>
  .banner-show{
    position: relative;
    width: 100%;
    min-height: 300px;
    background-image: url('../img/pages/home-banner.png');
    background-repeat: no-repeat;
    background-position: bottom;
    background-size: cover;
    text-align: center;
  }
  .banner-search{
    width: 400px;
    height: 200px;
    position: absolute;
    z-index: 333;
    left: 50%;
    top: 50%;
    margin-left: -200px;
    margin-top: -100px;
  }
  .news01 {
    width: 400px;
    color: #fff;
    font-size:40px;
  }
  .news02{
    width: 400px;
    height: 30px;
    margin-top: 30px;
    z-index:333;
    position: relative;
    font-size: 14px;
  }
  .news02 ul{
    width: 400px;
  }
  .news02 ul li{
    float: left;
    color: #fff;
    width: 25%;
  }
  .news03 {
    width: 400px;
    height: 42px;
    z-index: 777;
    position:relative
  }
  .news04{
    width: 400px;
    color: #fff;
    margin-top: 20px;
  }
  .sinputstyle {
    float: left;
    width: 400px;
    height: 42px;
    line-height: 42px;
    color: #888;
    overflow: hidden;
    border: 0;
    font-size: 14px;
    text-indent: 10px;
    outline: none;
  }
  .know-more{
    height: 350px;
    text-align: center;
  }
  .know-more h1{
    height: 80px;
    line-height: 80px;
  }
  .know-more ul{
    width: 1000px;
    margin: 0 auto;
  }
  .know-more ul li{
    float: left;
    width: 300px;
    margin-right: 50px;
    height: 220px;
    border: 1px solid #ecf5ff;
    border-top: 3px solid #ff0000;
  }
  .know-more ul li:last-child{
    margin-right: 0;
  }
  .know-more ul li h2{
    height: 50px;
    line-height: 50px;
  }
  .know-more ul li h3{
    height: 30px;
    line-height: 30px;
  }
  .know-more ul li p{
    line-height: 2;
    color: #909399;
  }
  .know-more button{
    width: 120px;
    height: 40px;
    background: #ff0000;
    color: #fff;
    margin: 10px 0;
  }
  .home-bg{
    text-align: center;
  }
  .home-bg i{
    display: inline-block;
    position: relative;
    width: 100%;
    min-height: 300px;
    max-height: 400px;
    background-repeat: no-repeat;
    background-position: bottom;
    background-size: cover;
  }
  .list-one{
    background-image: url('../img/pages/home-list1.png');
  }
  .list-two{
    width: 942px !important;
    height: 429px;
    background-image: url('../img/pages/home-list2.png');
  }
  .list-three{
    background-image: url('../img/pages/home-list3.png');
  }
  .list-four{
    width: 955px !important;
    height: 340px;
    background-image: url('../img/pages/home-list4.png');
  }
  .list-five{
    background-image: url('../img/pages/home-list5.png');
  }
  .home-bg h1{
    margin: 10px;
  }
</style>
