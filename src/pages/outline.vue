<template>
  <div>
    <Header/>
<div class="outline-wrap">
    <i class="banner outline-header"></i>
    <ul>
      <li>
        <i class="icon-work"></i>
        <div class="text">
          <h1>秒租办公APP</h1>
          <p>
            秒租办公APP由创合自主研发并拥有软件知识产权，是全球领先的双语平台式   B2C        办公预订APP，涵盖了全球的联合办公空间，高端商务中心，写字楼宇及大型园区。创合拥有全球超40多万用户，遍布中国、美国及澳大利亚，也是中国交易量最高的B2C办公预订APP。
          </p>
          <p>
            灵活的预订方式：半小时起租的会议室，日租工位，周租办公室乃至3-5年期长租办公空间。
            即时的支付方式：直连微信、支付宝、境内外信用卡。
          </p>
          <p>
            目前，秒租办公有来自中国；美国旧金山、洛杉矶、西雅图、波士顿、芝加哥、纽约、华盛顿；澳大利亚悉尼、墨尔本的超过1000个联合办公空间和商务中心，超过12000个“共享办公桌”、“独享办公桌”、“会议室”、“活动空间”、“办公室”的交易产品选择，针对联合办公、孵化器、众创空间、商务中心、写字楼、园区、社区的特性而提供相关的产品预订或即时交易。“启迪孵化器”、“优客工场”、“办伴”、“方糖小镇”、“北航”、“英特尔孵化器”、“联合谷”、“微软创新中心”、“科技寺”、“Inno Space”、“太库”、“深圳创客街”、“Wedo联合创业社”、“世联空间”、“米域”、“洪泰创业空间”、“SOHO 3Q”、“安垦”等多个知名品牌已经在秒租办公上线工位、会议室和办公室。
          </p>
        </div>
      </li>
      <li>
        <i class="icon-landlord"></i>
        <div class="text">
          <h1>秒租房东SaaS</h1>
        <p>
          秒租房东是创合自主研发，最核心的SaaS云服务，分别提供秒租房东APP及云端服务，即租即用，为空间拥有者、管理者提供内部一站式管理系统：空间管理、会员管理、合同管理、财务管理、交易管理等模块。
        </p>
        <p>
          针对不同物业的特点、智能设备及办公用户资源，同时提供数据服务及第三方连接：技术咨询、人才培养、金融服务等，为管理方建成完善的生态链。
        </p>
        <p>
          数据更安全：携手阿里云提供全方位的数据安全保障，包括ISO 27001，SOC1、SOC2、SOC3、CSA。
          <br/>
          价格更便宜：不需要购买服务器和数据库，不需要一次性购买SaaS软件，还可免费升级。
          <br/>
          服务更满意：提供7*24小时技术支持，包括在线客服及区域工程师。
          <br/>
          使用更便捷：支持IOS及安卓系统，手机端使用。
        </p>
        </div>
      </li>
    </ul>
</div>
    <Footer/>
  </div>
</template>

<script>
  import Header from '../components/header'
  import Footer from '../components/footer'
  export default {
    name: 'Outline',
    components:{
      Header,Footer
    },
    data() {
      return {

      }
    }
  }
</script>

<style scoped>
.outline-wrap{
  width: 100%;
}
  .outline-header{
    background-image: url('../img/pages/outline-banner.png');
  }
.outline-wrap ul li{
  padding: 30px 250px;
  min-height: 450px;
}
.outline-wrap ul li:nth-child(2){
  background: #f6f6f6;
}
  .outline-wrap ul li>i{
    display: inline-block;
    width: 143px;
    height: 318px;
  }
.icon-work{
  background-image: url('../img/pages/outline-work.png');
}
.icon-landlord{
  background-image: url('../img/pages/ontline-landlord.png');
}
  .text{
    float: right;
    width: 800px;
    font-size: 14px;
  }
.text p{
  margin: 20px 0;
  line-height:2;
}
</style>
