<template>
  <div>
    <Header/>
<div class="hot-space-header">
热门空间
</div>
    <Footer/>
  </div>
</template>

<script>
  import Header from '../components/header'
  import Footer from '../components/footer'
  export default {
    name: 'Spaces',
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

</style>
