<template>
  <div>
    <Header/>
<div class="banner space-header">
  <a href="#/Outline">公司概要</a>
  <a href="#/Introduction">公司介绍</a>
  <a href="#/CreateHouse">创建房源</a>
</div>
    <Footer/>
  </div>
</template>

<script>
  import Header from '../components/header'
  import Footer from '../components/footer'
  export default {
    name: 'RentOwner',
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
  .space-header{
    background-image: url('../img/pages/owner-banner.png');
  }

</style>
