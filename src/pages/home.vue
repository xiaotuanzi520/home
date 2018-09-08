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
  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
  img{
    width: 100%;
  }

</style>
