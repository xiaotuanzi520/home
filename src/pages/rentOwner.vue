<template>
  <div>
    <Header/>
<div class="space-header">

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
    position: relative;
    width: 100%;
    min-height:300px;
    font-weight: 300;
    color: #fff;
    background-image: url('../img/pages/owner-banner.png');
    background-repeat: no-repeat;
    background-position: bottom;
    background-size: cover;
  }

</style>
