<template>
  <div>
    <Header/>
<div class="case-header">

</div>
    <div class="case-list">
      <ul>
        <li>
            <i class="list-one"></i>
            <div class="list-introduce fr">
              <h1>微能创投加速器</h1>
              <p>总部设在上海，在浦东新区张江中区、静安区市北大数据产业基地、闵行区上海交通大学设有近4000平米WELabs联合创新空间，同时在北京、深圳、硅谷和首尔开设联络机构。微能的目标是建成中国最大的服务天使投资人网络的创业加速平台，连接有全球视野和创新思维的创始人群体，培育中国高科技创业领域的独角兽企业。
                微能创投加速器服务的天使投资人网络，连接了200多名认证合格投资人，有效覆盖1000多名活跃于北京、上海、深圳、硅谷、首尔和班加罗尔的天使投资人。网络成员主要来自于包括中欧国际工商学院、上海交通大学、清华大学、北京大学、斯坦福大学、麻省理工学院等商学院和工程学院的校友，以及国内外知名企业高管。 微能创投加速器正和全球500强企业、世界顶级的商学院、大学和新兴技术实验室建立合作，探索前沿技术领域的创新商业机会，为大企业和初创企业协同创新搭建开放平台。和中欧国际工商学院、上海交通大学联合，在创新生态系统和颠覆性技术商业应用战略方面进行联合研究，探索开放创新的最佳实践。和英特尔中国公司合作，在WELabs联合创新空间设立英特尔机器人创新中心，推动跨国公司和机器人初创企业协同创新，共同建设英特尔机器人创新生态。
              </p>
            </div>
        </li>
        <li>
          <div class="list-introduce">
            <h1>微能创投加速器</h1>
            <p>总部设在上海，在浦东新区张江中区、静安区市北大数据产业基地、闵行区上海交通大学设有近4000平米WELabs联合创新空间，同时在北京、深圳、硅谷和首尔开设联络机构。微能的目标是建成中国最大的服务天使投资人网络的创业加速平台，连接有全球视野和创新思维的创始人群体，培育中国高科技创业领域的独角兽企业。
              微能创投加速器服务的天使投资人网络，连接了200多名认证合格投资人，有效覆盖1000多名活跃于北京、上海、深圳、硅谷、首尔和班加罗尔的天使投资人。网络成员主要来自于包括中欧国际工商学院、上海交通大学、清华大学、北京大学、斯坦福大学、麻省理工学院等商学院和工程学院的校友，以及国内外知名企业高管。 微能创投加速器正和全球500强企业、世界顶级的商学院、大学和新兴技术实验室建立合作，探索前沿技术领域的创新商业机会，为大企业和初创企业协同创新搭建开放平台。和中欧国际工商学院、上海交通大学联合，在创新生态系统和颠覆性技术商业应用战略方面进行联合研究，探索开放创新的最佳实践。和英特尔中国公司合作，在WELabs联合创新空间设立英特尔机器人创新中心，推动跨国公司和机器人初创企业协同创新，共同建设英特尔机器人创新生态。
            </p>
          </div>
          <i class="list-two fr"></i>
        </li>
        <li>
          <i class="list-three"></i>
          <div class="list-introduce fr">
            <h1>微能创投加速器</h1>
            <p>总部设在上海，在浦东新区张江中区、静安区市北大数据产业基地、闵行区上海交通大学设有近4000平米WELabs联合创新空间，同时在北京、深圳、硅谷和首尔开设联络机构。微能的目标是建成中国最大的服务天使投资人网络的创业加速平台，连接有全球视野和创新思维的创始人群体，培育中国高科技创业领域的独角兽企业。
              微能创投加速器服务的天使投资人网络，连接了200多名认证合格投资人，有效覆盖1000多名活跃于北京、上海、深圳、硅谷、首尔和班加罗尔的天使投资人。网络成员主要来自于包括中欧国际工商学院、上海交通大学、清华大学、北京大学、斯坦福大学、麻省理工学院等商学院和工程学院的校友，以及国内外知名企业高管。 微能创投加速器正和全球500强企业、世界顶级的商学院、大学和新兴技术实验室建立合作，探索前沿技术领域的创新商业机会，为大企业和初创企业协同创新搭建开放平台。和中欧国际工商学院、上海交通大学联合，在创新生态系统和颠覆性技术商业应用战略方面进行联合研究，探索开放创新的最佳实践。和英特尔中国公司合作，在WELabs联合创新空间设立英特尔机器人创新中心，推动跨国公司和机器人初创企业协同创新，共同建设英特尔机器人创新生态。
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
    name: 'Case',
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
  .case-header{
    position: relative;
    width: 100%;
    min-height: 300px;
    font-weight: 300;
    color: #fff;
    background-image: url('../img/pages/case-banner.png');
    background-repeat: no-repeat;
    background-position: bottom;
    background-size: cover;
  }
  .case-list{
    width: 1100px;
    margin: 0 auto;
  }
  .case-list ul li{
    width: 1100px;
    height: 400px;
    margin: 20px;
  }
  .case-list i{
    display: inline-block;
    vertical-align: middle;
    width: 509px;
    height: 400px;
  }
  .list-one{
    background: url("../img/pages/case-list1.png");
  }
  .list-two{
    background: url("../img/pages/case-list2.png");
  }
  .list-three{
    background: url("../img/pages/case-list3.png");
  }
  .list-introduce{
    display: inline-block;
    margin-left: 20px;
    width: 509px;
    height: 400px;
    line-height: 400px;
  }
  .list-introduce h1{
    height: 50px;
    line-height: 2;
  }
  .list-introduce p{
    line-height: 2;
  }

</style>
