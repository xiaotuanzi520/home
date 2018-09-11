<template>
  <div>
    <OwnerHeader/>
<div class="banner rentOwner-header">
<div class="rentOwner-header-text">
  <div class="text1">成为秒租办公业主</div>
  <div class="text2">成为秒租办公业主，赚钱更轻松</div>
  <div class="btn-createHouse"><a href="#/createHouse">开始创建房源吧！</a></div>
</div>
</div>
    <div class="rentOwner-content">
      <div class="introduction">
        <ul class="rentOwner-intr">
          <li>
            <div class="intr-ask">为什么选择在爱彼迎 出租房源？</div>
            <p>INNOSPACE+是国内首创的新型创业社区，由瑞安地产旗下的创智天地建设。INNOSPACE+最早起源于2011年8月成立的IPOclub创业咖啡和2012年11月成立的Inno。</p>
          </li>
          <li>
            <div class="intr-ask">一切尽在您的掌握之中</div>
            <p>INNOSPACE+是国内首创的新型创业社区，由瑞安地产旗下的创智天地建设。INNOSPACE+最早起源于2011年8月成立的IPOclub创业咖啡和2012年11月成立的Inno。</p>
          </li>
          <li>
            <div class="intr-ask">我们将在其中的每一 步为您提供指引</div>
            <p>INNOSPACE+是国内首创的新型创业社区，由瑞安地产旗下的创智天地建设。INNOSPACE+最早起源于2011年8月成立的IPOclub创业咖啡和2012年11月成立的Inno。</p>
          </li>
        </ul>
      </div>
      <div class="process-list">
          <div class="how-landlord">如何成为秒租办公房东</div>
        <ul>
          <li>
            <i class="process-list-one"></i>
            <div class="process-introduce fr">
              <div class="number">1/</div>
              <h1>INNOSPACE+</h1>
              <p>
                INNOSPACE+是国内首创的新型创业社区，由瑞安地产旗下的创智天地建设。INNOSPACE+最早起源于2011年8月成立的IPOclub创业咖啡和2012年11月成立的InnoSpace创业孵化器。InnoSpace孵化器是科技部认定的国家级众创空间，《创业邦》2015国内最受关注的孵化器10强，投中集团2016中国最佳众创空间10强。

                INNOSPACE+是一个完整的、全要素、一站式创业社区，包括了InnoSpace孵化平台、InnoWork联合办公、IPOclub创业咖啡、InnoMaker创客空间、InnoApartment创业公寓等多种创业功能载体，满足创业者办公、成长、交流、生活等全方位的需求。
              </p>
            </div>
          </li>
          <li>
            <div class="process-introduce">
              <div class="number">2/</div>
              <h1>微能创投加速器</h1>
              <p>
                INNOSPACE+是国内首创的新型创业社区，由瑞安地产旗下的创智天地建设。INNOSPACE+最早起源于2011年8月成立的IPOclub创业咖啡和2012年11月成立的InnoSpace创业孵化器。InnoSpace孵化器是科技部认定的国家级众创空间，《创业邦》2015国内最受关注的孵化器10强，投中集团2016中国最佳众创空间10强。
              </p>
            </div>
            <i class="process-list-two fr"></i>
          </li>
          <li>
            <i class="process-list-three"></i>
            <div class="process-introduce fr">
              <div class="number">3/</div>
              <h1>INNOSPACE+</h1>
              <p>
                INNOSPACE+是国内首创的新型创业社区，由瑞安地产旗下的创智天地建设。INNOSPACE+最早起源于2011年8月成立的IPOclub创业咖啡和2012年11月成立的InnoSpace创业孵化器。InnoSpace孵化器是科技部认定的国家级众创空间，《创业邦》2015国内最受关注的孵化器10强，投中集团2016中国最佳众创空间10强。

                INNOSPACE+是一个完整的、全要素、一站式创业社区，包括了InnoSpace孵化平台、InnoWork联合办公、IPOclub创业咖啡、InnoMaker创客空间、InnoApartment创业公寓等多种创业功能载体，满足创业者办公、成长、交流、生活等全方位的需求。同时，加上InnoSpace已经运营多年的创业加速计划——国际创业集训营，以及2015年成立的InnoSpace天使基金，INNOSPACE+构建起国内创业要素最丰富、功能最完善并且充满活力的创业生态系统。INNOSPACE+不仅为创业者提供一流的空间，更重要的是提供最佳的创业服务和资源。</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
  import OwnerHeader from '../components/ownerHeader'
  import Footer from '../components/footer'
  export default {
    name: 'RentOwner',
    components:{
      OwnerHeader,Footer
    },
    data() {
      return {

      }
    }
  }
</script>

<style scoped>
  .rentOwner-header{
    background-image: url('../img/pages/owner-banner.png');
    color: #fff;
    text-align: center;
  }
.rentOwner-header-text{
  width: 700px;
  margin: 0 auto;
  margin-top: 183px;
}
  .text1{
    font-size: 30px;
  }
  .text2{
    font-size: 50px;
    margin: 20px 0 58px 0;
  }
  .btn-createHouse{
    width: 375px;
    height: 74px;
    line-height: 74px;
    background: #FB274B;
    font-size: 20px;
    margin: 0 auto;
  }
  .rentOwner-content{
    width: 100%;
    min-height: 1000px;
    color: #484848;
    font-size: 14px;
    position: relative;
  }
  .introduction{
    width: 100%;
    min-height: 300px;
  }
  .rentOwner-intr{
    background: #fff;
    padding: 40px 0;
    width: 1060px;
    position: absolute;
    top:-70px;
    left: 50%;
    margin-left: -530px;
    box-shadow: 2px 2px 8px RGBA(72, 72, 72, 0.16);
  }
  .rentOwner-intr li{
    width: 300px;
    float: left;
    margin-right: 40px;
  }
  .rentOwner-intr li:first-child{
    margin-left: 40px;
  }
  .intr-ask{
    width: 280px;
    font-size: 30px;
    margin-bottom: 40px;
  }
  .process-list{
    width: 1200px;
    margin: 0 auto;
  }
  .how-landlord{
    font-size: 40px;
    color: #D22147;
    margin-bottom: 56px;
  }
  .process-list ul li{
    width: 1100px;
    min-height: 400px;
    margin-bottom: 60px;
  }
  .process-list i{
    margin-top: 30px;
    display: inline-block;
    vertical-align: middle;
    width: 509px;
    height: 400px;
  }
  .process-list-one{
    background: url("../img/pages/owner-list1.png");
  }
  .process-list-two{
    background: url("../img/pages/owner-list2.png");
  }
  .process-list-three{
    background: url("../img/pages/owner-list3.png");
  }
  .process-introduce{
    display: inline-block;
    width: 509px;
    min-height: 400px;
  }
  .number{
    height: 30px;
    line-height: 30px;
    font-size: 30px;
    color: #D22147;
  }
  .process-introduce h1{
    height: 70px;
    line-height: 2;
  }
</style>
