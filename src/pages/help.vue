<template>
  <div>
    <OwnerHeader/>
    <div class="help-wrap">
      <i></i>
    <ul class="detail">
      <li v-for="item in items">
        <p>{{ item.message }}</p>
        <p>{{item.info}}</p>
      </li>
    </ul>
    <div class="phone">
      更多问题请致电 <span>400-821-6881</span>
    </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
  import Footer from '../components/footer'
  import OwnerHeader from "../components/ownerHeader";
  export default {
    name: 'Help',
    components:{
      OwnerHeader, Footer
    },
    data() {
      return {
        items: [
          {
            'message': '如何在秒租预定空间',
            'info': "下载秒租办公App,注册并完善信息即可"
          },
          {
            'message': 'APP空间是否和线下一致',
            'info': "秒租上都是真实的个人信息"
          },
          {
            'message': '预定空间后能不能取消',
            'info': "在空间没使用前都可以取消"
          },
          {
            'message': '使用空间能不能开发票',
            'info': "空间使用后在个人中心开发票"
          },
          {
            'message': '对空间不满意怎么办',
            'info': "使用后可以评价空间"
          },
          {
            'message': '如何在秒租发布信息',
            'info': "在主页上面申请为业主就好了"
          }
        ]
      }
    },
    methods: {
      handleSelect(key, keyPath) {
        // console.log(key, keyPath);
      },
    }
  }
</script>

<style scoped>
  .help-wrap {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: left;
    color: #2c3e50;
  }
  .help-wrap i{
    display: inline-block;
    width: 100%;
    min-height: 300px;
    text-align: left;
    color: #2c3e50;
    background-image: url('../img/pages/help-banner.png');
    background-size: cover;
  }
  .detail {
    list-style-type: none;
    padding: 5% 0 0 20%;
  }
  li {
    margin-bottom: 3%;
    font-size: 14px;
  }
  p:first-child {
    font-weight: bold;
    margin-bottom: 1%;
  }
  .phone {
    margin-left: 20%;
    font-size: 14px;
    margin-bottom: 5%;
  }
  span {
    color: #f00;
  }
</style>
