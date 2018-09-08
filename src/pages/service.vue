<template>
  <div>
    <Header/>
    <div class="service-wrap">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">秒租业主</el-breadcrumb-item>
        <el-breadcrumb-item>公司历程</el-breadcrumb-item>
      </el-breadcrumb>
      <Menu/>
      <ul class="service-content">
        <li>
          <p><span>秒租</span></p>
          <p>1.1 服务内容</p>
          <p>1.1.1 在租赁过程中，创合秒租将为您代收交易价款并向租客开具增值税发票，租客在确认订单时支付的办公空间使用费将由创合秒租预收，创合秒租会在订单履行完毕后将扣除服务费后的余额支付至您在创合房东端平台上预留的银行账户内。</p>
          <p> 1.1.2 秒租办公空间定义：工位，会议室，活动场地，以及即时交易的办公室及其他由秒租代收价款的即时交易项目。1.2 服务费用</p>
        <p> 1.2.1 在订单履行完毕后，创合秒租将会扣除租客最终实际支付交易价款的10%作为服务费，并将扣除服务费后的交易价款余额在订单履行完毕后的次月5日支付至您在创合房东端平台上预留的银行账户内。</p>
        <p>1.2.2 您可随时登录您在创合房东端开设的账号，通过创合房东端的财务板块查看办公空间的预订、使用情况，以及服务费金额、账户余额和可开票金额等。若您需要发票，创合房东端将按其收取的服务费金额开具增值税专用发票。</p>
        </li>
        <li>
          <p><span> 长租</span></p>
          <p>2.1 服务内容</p>
          <p>  2.1.1 在租赁过程中，您可选择是否由创合秒租为您代收交易价款若由创合秒租平台代收交易款项，则租客在确认订单时支付的办公空间使用费将由创合秒租预收，创合秒租会在订单履行完毕并收到服务费后将全额款项支付至您在创合房东端平台上预留的银行账户内。</p>
        <p>2.1.2 长租办公空间定义：不能即时交易的办公室。</p>
          <p> 2.2 服务费用</p>
          <p> 2.2.1 在订单履行完毕后，创合秒租将会收取实际交易价款的1%作为服务费，并将会在订单履行完毕并收到服务费后5个工作日内将全额款项支付至您在创合房东端平台上预留的银行账户内。</p>
          <p>2.2.2 若您需要发票，创合房东端将按其收取的服务费金额开具增值税专用发票。</p>
        </li>
        <li>
          <p><span>您的义务</span></p>
          <p> 3.1 您应确保租客对办公空间有正常、合理的使用，不会受到来自第三方的阻碍和妨害。若租客在办公空间内遭遇任何人身伤害、财产损失的，您应当负责与租客协商、赔偿，并保证创合秒租的权益不受损害。</p>
          <p> 3.2 您应当合理使用本服务，未经创合秒租的同意和许可，不得拷贝、存储创合秒租平台上的任何信息，也不得使用创合秒租的企业名称、商标、标志等专有信息或者创合秒租的任何页面布局、设计进行宣传、推广。</p>
        </li>
        <li>
          <p><span>创合秒租的声明</span></p>
          <p>4.1 创合秒租不是办公空间租赁交易中的一方，不是房地产经纪人、代理人和/或担保人，创合秒租仅为您和租客提供交易的平台和信息。创合秒租不对租客的身份、资质、资信、能力、资格、职业等作出任何保证，您应当对租客作出独立的判断，自行决定是否接受该租客的订单，并自行承担交易风险。</p>
          <p>  4.2 创合秒租不能控制租客对办公空间的使用，若租客在使用办公空间时损坏了办公空间主体、内置设施设备、装饰装潢或有任何不当行为的，创合秒租不承担任何法律责任。</p>
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
    name: 'Service',
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
  .service-wrap{
    width: 1200px;
    min-height: 500px;
    margin: 0 auto;
  }
  .el-breadcrumb{
    margin: 50px 0 30px 0;
  }
  .service-content{
    display: inline-block;
    vertical-align: top;
    width: 850px;
    margin-left: 100px;
  }
  .service-content li{
    border-bottom: 1px solid #ddd;
    padding-bottom: 30px;
    margin-bottom: 30px;
  }
  .service-content li span{
    font-size: 20px;
    font-weight: bold;
  }
</style>
