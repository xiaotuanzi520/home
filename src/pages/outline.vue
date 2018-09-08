<template>
  <div>
    <Header/>

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

</style>
