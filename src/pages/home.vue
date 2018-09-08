<template>
    <div>
      <Header/>
      <div class="home-warp">
      <img src="../img/pages/home-banner.png" alt="">
      <el-row>
        <el-col :span="8" v-for="(o, index) in 3" :key="o" :offset="0">
          <el-card :body-style="{ padding: '0px' }">
            <div style="padding: 14px;">
              <h1>办公室</h1>
              <h2>在专属办公空间里全职办公</h2>
              <div>
                <p>免装修</p>
                <p>办公设置齐全</p>
                <p>以较低的成本租赁繁华地段的办公室</p>
              </div>
              <el-button type="text" class="button">了解更多</el-button>
            </div>
          </el-card>
        </el-col>
      </el-row>
      </div>
      <Footer/>
    </div>
</template>

<script>
  import Header from '../components/header'
  import Footer from '../components/footer'
export default {
  name: 'Home',
  components:{
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
