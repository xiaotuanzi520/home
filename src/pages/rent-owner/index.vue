<template>
  <div>
    <Header/>
<div class="space-header">

</div>
    <Footer/>
  </div>
</template>

<script>
  import Header from '../../components/header/index'
  import Footer from '../../components/footer/index'
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
  @import './index.css';
</style>
