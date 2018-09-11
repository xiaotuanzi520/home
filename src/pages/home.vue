<template>
    <div>
      <Header/>
      <div class="banner-show">
        <div class="banner-search">
          <div class="search-list1">全球80万空间任你挑</div>
          <div class="search-list2">
            <ul>
              <li>办公室</li>
              <li>会议室</li>
              <li>工位</li>
              <li>其他</li>
            </ul>
          </div>
          <div class="search-list3">
            <i></i>
            <el-input placeholder="请输入空间名称" class="search-input">
              <template slot="append"><a href="#/SpacesList"><el-button>搜索</el-button></a></template>
            </el-input>
          </div>
          <div class="search-list4">
            <span>热门城市：</span>北京、上海、广州、深圳、杭州、纽约、巴黎
          </div>
        </div>
      </div>
      <div class="know-more">
        <div class="know-title">无论你需要1或200的空间，这里都有</div>
              <ul>
                <li>
                  <i class="icon-office"></i>
                  <div class="select-name">办公室</div>
                  <div  class="select-instruction">在专属办公空间里全职办公</div>
                    <p>免装修</p>
                    <p>办公设置齐全</p>
                    <p>以较低的成本租赁繁华地段的办公室</p>
                    <a href="#/hotSpaces">了解更多</a>
                </li>
                <li>
                  <i class="icon-boardroom"></i>
                  <div class="select-name">会议室</div>
                  <div  class="select-instruction">演示、采访、客户演讲、培训随心所欲</div>
                    <p>免装修</p>
                    <p>办公设置齐全</p>
                    <p>以较低的成本租赁繁华地段的办公室</p>
                  <a href="#/hotSpaces">了解更多</a>
                </li>
                <li>
                  <i class="icon-station"></i>
                  <div class="select-name">工位</div>
                  <div  class="select-instruction">共享空间的专属席位，全天候开放</div>
                    <p>免装修</p>
                    <p>办公设置齐全</p>
                    <p>以较低的成本租赁繁华地段的办公室</p>
                  <a href="#/hotSpaces">了解更多</a>
                </li>
                <li>
                  <i class="icon-other"></i>
                  <div class="select-name">其他</div>
                  <div  class="select-instruction">多功能厅、录音棚、会展空间</div>
                  <p>免装修</p>
                  <p>办公设置齐全</p>
                  <p>以较低的成本租赁繁华地段的办公室</p>
                  <a href="#/hotSpaces">了解更多</a>
                </li>
              </ul>
      </div>
      <div class="home-bg">
        <i class="list-one"></i>
        <div class="list-title">随时随地网上预订</div>
        <div class="list-text">520个合作空间 +80万真实房源 +网上支付即时便利安全交易</div>
        <i class="list-two"></i>
        <i class="list-three"></i>
        <div class="list-title">我们的合粉</div>
        <i class="list-four"></i>
        <ul class="fans">
          <li>
            <div class="fans-name">Danny Ching</div>
            <div class="fans-instruction">Uptown Lifestyle 合伙人</div>
            <p>
              创合秒租让整个城市成为了我的创业空间，我每天随着我的心情选择我喜欢的办公场所。它帮我找到了一批北京最 cool最炫的创业社区。</p>
          </li>
          <li>
            <div class="fans-name">李斯发</div>
            <div class="fans-instruction">享居派创始人兼CEO</div>
            <p>
              在我们快速扩张时期，我们不用担心办公空间，仅仅10分钟，创合秒租帮我们市场部在上海最核心的区域找到了新家，工作一天都没因为搬家而停顿。在创业初期，时间就是生命，浪费一天就可能死在创业的路上。</p>
          </li>
          <li>
            <div class="fans-name">Irati Arka</div>
            <div class="fans-instruction">Mondragon Team Academy</div>
            <p>
              I always find the right working environment for our business, networking opportunities and the right rental rooms for meetings, workshop and open events as well as private office for our team. And the app is very user friendly.</p>
          </li>
          <li>
            <div class="fans-name">Bertrand</div>
            <div class="fans-instruction">LGM Ltd. CEO</div>
            <p>
              It’s very easy to book a meeting room or office room on the apps wherever you are and whatever you want.It’s one of my favorite function in Sandbox. It’s ideal for start ups on entrepreneur starting their projects in every city.</p>
          </li>
        </ul>
        <i class="list-five"></i>
        <div class="list-title">热门空间</div>
          <ul class="hot-enter">
            <li>
              <i></i>
              <div class="hot-list-content">
                <div class="hot-list-name">云海办公室</div>
                <div>123㎡ 可容纳25人 上海杨浦区杨浦联合社区</div>
                <div class="price">￥256.5<span>/月起</span></div>
              </div>
            </li>
            <li>
              <i></i>
              <div class="hot-list-content">
                <div class="hot-list-name">云海办公室</div>
                <div>123㎡ 可容纳25人 上海杨浦区杨浦联合社区</div>
                <div class="price">￥256.5<span>/月起</span></div>
              </div>
            </li>
            <li>
              <i></i>
              <div class="hot-list-content">
                <div class="hot-list-name">云海办公室</div>
                <div>123㎡ 可容纳25人 上海杨浦区杨浦联合社区</div>
                <div class="price">￥256.5<span>/月起</span></div>
              </div>
            </li> <li>
            <i></i>
            <div class="hot-list-content">
              <div class="hot-list-name">云海办公室</div>
              <div>123㎡ 可容纳25人 上海杨浦区杨浦联合社区</div>
              <div class="price">￥256.5<span>/月起</span></div>
            </div>
          </li>
            <li>
              <i></i>
              <div class="hot-list-content">
                <div class="hot-list-name">云海办公室</div>
                <div>123㎡ 可容纳25人 上海杨浦区杨浦联合社区</div>
                <div class="price">￥256.5<span>/月起</span></div>
              </div>
            </li>
            <li>
              <i></i>
              <div class="hot-list-content">
                <div class="hot-list-name">云海办公室</div>
                <div>123㎡ 可容纳25人 上海杨浦区杨浦联合社区</div>
                <div class="price">￥256.5<span>/月起</span></div>
              </div>
            </li>
          </ul>
        <div class="look-more"><a href="#/spacesList"></a>查看更多空间</div>
        <div class="list-text">加入我们接受最新空间消息和特殊优惠</div>
        <el-input placeholder="请输入手机号码" class="input-select-number">
          <el-select slot="prepend" placeholder="+86">
            <el-option label="+86"></el-option>
          </el-select>
          <el-button slot="append">加入</el-button>
        </el-input>
        <div class="owner-enter">
            <div class="apply">
              在线发布房源,收益看的见
              <div class="apply-enter"><a href="#/createHouse">申请成为房东</a></div>
            </div>
        </div>
        <div class="home-bg-footer"><i></i></div>
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
    height: 560px;
    background-image: url('../img/pages/home-banner.png');
    background-repeat: no-repeat;
    background-position: bottom;
    background-size: cover;
    text-align: center;
  }
  .banner-search{
    width: 620px;
    position: absolute;
    z-index: 333;
    left: 50%;
    top: 50%;
    margin-left: -310px;
    margin-top: -132px;
  }
  .search-list1 {
    width: 620px;
    color: #fff;
    font-size:66px;
    margin-bottom: 68px;
  }
  .search-list2{
    width: 346px;
    height: 20px;
    line-height: 20px;
    margin:0 auto;
    font-size: 20px;
  }
  .search-list2 ul{
    width: 346px;
  }
  .search-list2 ul li{
    float: left;
    color: #fff;
    width: 25%;
  }
  .search-list3 {
    width: 620px;
    height: 84px;
  }
  .search-list3 i{
    display: block;
    width: 21px;
    height: 11px;
    background: url('../img/pages/icon-home-search.png');
    margin-left: 170px;
  }

  .search-list3 button{
    width: 165px;
    height: 54px;
    background: #FB274B;
    border-radius: 0;
    color: #fff;
  }
  .search-list4{
    width: 620px;
    color: #fff;
    margin-top: 30px;
    font-size: 16px;
  }
  .know-more{
    height: 476px;
    text-align: center;
    color: #000;
  }
  .know-title{
    font-size: 30px;
    margin: 60px 0;
  }
  .know-more ul{
    width: 1200px;
    margin: 0 auto;
  }
  .know-more ul li{
    float: left;
    width: 300px;
    height: 350px;
  }
  .know-more ul li i{
    display: inline-block;
    width: 68px;
    height: 66px;
  }
  .icon-office{
    background: url('../img/pages/home-office.png');
  }
  .icon-boardroom{
    background: url('../img/pages/home-boardroom.png');
  }
  .icon-station{
    background: url('../img/pages/home-station.png');
  }
  .icon-other{
    background: url('../img/pages/home-other.png');
  }
  .select-name{
font-size: 20px;
    margin: 19px 0 37px 0;
  }
  .select-instruction{
    font-size: 14px;
    margin-bottom: 20px;
  }
  .know-more p{
    line-height: 1.5;
    color: #A0A0A0;
  }
  .know-more ul li a {
    display: inline-block;
    color: #316F93;
    font-size: 16px;
    margin-top: 39px;
  }

  .home-bg{
    text-align: center;
    color: #000;
  }
  .home-bg i{
    display: inline-block;
    position: relative;
    width: 100%;
    height: 400px;
    background-repeat: no-repeat;
    background-position: bottom;
    background-size: cover;
  }
  .list-one{
    background-image: url('../img/pages/home-list1.png');
  }
  .list-two{
    width: 942px !important;
    height: 429px !important;
    background-image: url('../img/pages/home-list2.png');
    margin-bottom: 80px;
  }
  .list-three{
    background-image: url('../img/pages/home-list3.png');
  }
  .list-four{
    width: 955px !important;
    height: 340px !important;
    background-image: url('../img/pages/home-list4.png');
  }
  .list-five{
    background-image: url('../img/pages/home-list5.png');
  }
  .list-title{
    font-size: 29px;
    margin: 60px 0 28px 0;
  }
  .list-text{
    font-size: 20px;
    margin-bottom: 20px;
  }
  .fans{
    width: 1050px;
    height: 400px;
    color: #484848;
    margin: 0 auto;
  }
  .fans li{
      float: left;
    width: 220px;
    margin-right: 55px;
  }
  .fans li:last-child{
    margin-right: 0;
  }
  .fans-name{
    font-size: 25px;
  }
  .fans-instruction{
    font-size: 16px;
    margin: 15px 0 29px 0;
  }
  .fans p{
    font-size: 14px;
  }
  .hot-enter{
    width: 1200px;
    height: 390px;
    margin: 0 auto;
  }
  .hot-enter li{
    width: 570px;
    margin: 0 30px 10px 0;
    height: 120px;
    float: left;
    border:1px solid #F6F6F6;
  }
  .hot-enter i{
    display: inline-block;
    width: 170px;
    height: 120px;
    float: left;
    background-image: url('../img/pages/owner-list1.png');
  }
  .hot-list-content{
    float: left;
    color: #484848;
    font-size: 14px;
    text-align: left;
    padding: 20px;
  }
  .hot-list-name{
    font-size: 20px;
    margin-bottom: 6px;
  }
  .price{
    color: #FB274B;
    margin-top: 10px;
     }
  .price span{
    font-size: 12px;
  }
  .look-more{
    width: 202px;
    height: 44px;
    line-height: 44px;
    font-size: 16px;
    border: 1px solid #FB274B;
    color: #FB274B;
    margin: 30px auto;
  }
  .input-select-number{
    width: 330px;
    border: 1px solid #F6F6F6;
  }
  .input-select-number button{
    width:72px;
    height:44px;
    background:rgba(251,39,75,1);
    color: #fff;
    border-radius: 0;
  }
  .owner-enter{
    width: 100%;
    height: 560px;
    margin-top: 60px;
    background-image: url('../img/pages/home-owner.png');
    background-repeat: no-repeat;
    background-position: bottom;
    background-size: cover;
    text-align: center;
    position: relative;
  }
  .apply{
    font-size: 33px;
    width: 610px;
    height: 270px;
    background: #fff;
    color: #484848;
    position: absolute;
    z-index: 333;
    left: 50%;
    top: 50%;
    margin-left: -305px;
    margin-top: -135px;
    padding: 57px;
  }
  .apply-enter{
      width: 273px;
    height: 74px;
    line-height: 74px;
    background: #FB274B;
    color: #fff;
    font-size: 20px;
    margin: 0 auto;
    margin-top: 38px;
    box-shadow:-1px 4px 4px 0px rgba(86,86,86,0.09);
  }
  .home-bg-footer{
    position: relative;
    width: 100%;
    height: 130px;
    box-shadow:0px -2px 8px 0px rgba(198,198,198,0.39);
  }
  .home-bg-footer i{
    width: 100%;
   height: 169px !important;
    background-image: url('../img/pages/home-footer.png');
    position: absolute;
    top:-39px;
    left: 0px;
  }
</style>
<style>
  .search-list3 .el-input__inner {
    height: 74px;
    border: 1px solid #fff;
    color: #999;
    font-size: 20px;
    border-radius: 0;
  }
  .search-list3>.search-input>.el-input-group__append,.el-input-group__prepend{
    background: #fff;
    color: #fff;
    font-size: 20px;
    border-radius: 0;
    padding: 0;
    width: 0;
  }
  .home-bg>.input-select-number .el-select .el-input {
    width: 100px;
  }
  .home-bg>.input-select-number .el-input__inner{
    height: 44px;
    border-color: #fff;
  }
  .home-bg>.input-select-number>.el-input-group__prepend {
    background-color: #fff;
    border-radius: 0;
    padding: 0 15px;
    width: 1px;
    border-color: #fff;
  }
</style>
