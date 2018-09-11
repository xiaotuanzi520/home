<template>
  <div>
    <Header/>
    <div class="banner space-header">
      <div>
        <div class="space-header-title">秒租办公</div>
        <div class="space-header-notes">全球80万空间任你挑</div>
    </div>
    </div>
    <div class="space-list">
      <ul>
        <li>
          <i class="list-one"></i>
          <div class="list-introduce fr">
            <h1>科技寺</h1>
            <p>
              一个喜欢创业 、自在修行的社群空间。
              我们致力于为创业者服务，专注打造亚洲最具活力、 最具价值、
              最国际化的创业社群，在这里可以体验联合办公的乐趣，感受到社区温暖的氛围享受全面增值服务。我们在上海、北京、深圳、杭州共有八个空间，每个空间都有自己得天独厚的优势与特点，活动场地独立有个性，同时自带流量。
              通过国际化平台效应，科技寺专注于构建中外创业交流平台，促进中外创业企业合作，并计划在美国、日本、以色列、东南亚等地开设海外科技寺。科技寺致力于打造亚洲最具国际特色的创业交流平台，布局从中英文创投媒体、跨国科技活动、国际化社区、众创空间到创业投资的全产业链，完善线上与线下结合的创业生态系统。
              “创业即修行”是科技寺的核心理念。创业之路道阻且长，如履薄冰，对于企业与创业者都是生命历程的修行。
            </p>
          </div>
        </li>
        <li>
          <div class="list-introduce">
            <h1>微能创投加速器</h1>
            <p>
              总部设在上海，在浦东新区张江中区、静安区市北大数据产业基地、闵行区上海交通大学设有近4000平米WELabs联合创新空间，同时在北京、深圳、硅谷和首尔开设联络机构。微能的目标是建成中国最大的服务天使投资人网络的创业加速平台，连接有全球视野和创新思维的创始人群体，培育中国高科技创业领域的独角兽企业。
              微能创投加速器服务的天使投资人网络，连接了200多名认证合格投资人，有效覆盖1000多名活跃于北京、上海、深圳、硅谷、首尔和班加罗尔的天使投资人。网络成员主要来自于包括中欧国际工商学院、上海交通大学、清华大学、北京大学、斯坦福大学、麻省理工学院等商学院和工程学院的校友，以及国内外知名企业高管。
              微能创投加速器正和全球500强企业、世界顶级的商学院、大学和新兴技术实验室建立合作，探索前沿技术领域的创新商业机会，为大企业和初创企业协同创新搭建开放平台。和中欧国际工商学院、上海交通大学联合，在创新生态系统和颠覆性技术商业应用战略方面进行联合研究，探索开放创新的最佳实践。和英特尔中国公司合作，在WELabs联合创新空间设立英特尔机器人创新中心，推动跨国公司和机器人初创企业协同创新，共同建设英特尔机器人创新生态。
            </p>
          </div>
          <i class="list-two fr"></i>
        </li>
        <li>
          <i class="list-three"></i>
          <div class="list-introduce fr">
            <h1>INNOSPACE+</h1>
            <p>
              INNOSPACE+是国内首创的新型创业社区，由瑞安地产旗下的创智天地建设。INNOSPACE+最早起源于2011年8月成立的IPOclub创业咖啡和2012年11月成立的InnoSpace创业孵化器。InnoSpace孵化器是科技部认定的国家级众创空间，《创业邦》2015国内最受关注的孵化器10强，投中集团2016中国最佳众创空间10强。

              INNOSPACE+是一个完整的、全要素、一站式创业社区，包括了InnoSpace孵化平台、InnoWork联合办公、IPOclub创业咖啡、InnoMaker创客空间、InnoApartment创业公寓等多种创业功能载体，满足创业者办公、成长、交流、生活等全方位的需求。同时，加上InnoSpace已经运营多年的创业加速计划——国际创业集训营，以及2015年成立的InnoSpace天使基金，INNOSPACE+构建起国内创业要素最丰富、功能最完善并且充满活力的创业生态系统。INNOSPACE+不仅为创业者提供一流的空间，更重要的是提供最佳的创业服务和资源。INNOSPACE+创业生态系统将会给创业者提供最好的创业体验和最高效的创业环境，助力优秀创业者更快地实现创业梦想。</p>
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
    name: 'Spaces',
    components: {
      Header, Footer
    },
    data() {
      return {}
    }
  }
</script>

<style scoped>
  .space-header{
    color: #fff;
    background-image: url('../img/pages/space-banner.png');
  }
  .space-header>div{
    width: 470px;
    height: 100px;
    position: absolute;
    z-index: 333;
    left: 50%;
    top: 50%;
    margin-left: -235px;
    margin-top: -50px;
    text-align: center;
  }
  .space-header-title{
    font-size: 30px;
    margin-bottom: 20px;
  }
  .space-header-notes{
    font-size: 50px;
  }
  .space-list{
    width: 1100px;
    margin: 0 auto;
    margin-top: 80px;
  }
  .space-list ul li{
    width: 1100px;
    min-height: 400px;
    margin-bottom: 60px;
  }
  .space-list i{
    display: inline-block;
    vertical-align: middle;
    width: 509px;
    height: 400px;
  }
  .list-one{
    background: url("../img/pages/space-list1.png");
  }
  .list-two{
    background: url("../img/pages/space-list2.png");
  }
  .list-three{
    background: url("../img/pages/space-list3.png");
  }
  .list-introduce{
    display: inline-block;
    width: 509px;
    min-height: 400px;
  }
  .list-introduce h1{
    height: 70px;
    line-height: 1;
  }
</style>
