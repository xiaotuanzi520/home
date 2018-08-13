<template>
  <div class="addmessage">
    <div>
      <!--<i class="icon-help"></i>-->
      <img src="../assets/help-main.png" alt="">
      <ul>
        <li v-for="item in items">
          {{ item.message }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        items: [
          {message: '如何在秒租预定空间'},
          {message: '如何在秒租预定空间'},
          {message: '如何在秒租预定空间'},
          {message: '如何在秒租预定空间'}
        ]
      }
    },
    methods: {
      handleSelect(key, keyPath) {
        // console.log(key, keyPath);
      },
    }
  }
</script>

<style scoped lang="scss">

  .addmessage {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    ul {
      list-style-type: none;
      padding: 0;
    }
    li {
      margin: 0 10px;
    }
    a {
      color: #42b983;
    }
    img {
      width: 100%;
    }
  }

  /*.icon-help{*/
  /*display: inline-block;*/
  /*width:100%;*/
  /*height: 100%;*/
  /*background: url("../assets/help-main.png");*/
  /*}*/
</style>
