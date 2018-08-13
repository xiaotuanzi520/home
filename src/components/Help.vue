<template>
  <div class="help">
    <div>
      <!--<i class="icon-help"></i>-->
      <img src="../assets/help-main.png" alt="">
      <ul>
        <li v-for="item in items">
          {{ item.message }}
          <p>{{item.info}}</p>
        </li>
      </ul>
      <div class="phone">
        更多问题请致电 <span>400-821-6881</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        items: [
          {'message': '如何在秒租预定空间',
            'info':"下载秒租办公App,注册并完善信息即可"
          },
          {'message': '如何在秒租预定空间',
            'info':"下载秒租办公App,注册并完善信息即可"
          },
          {'message': '如何在秒租预定空间',
            'info':"下载秒租办公App,注册并完善信息即可"
          },
          {'message': '如何在秒租预定空间',
            'info':"下载秒租办公App,注册并完善信息即可"
          },
          {'message': '如何在秒租预定空间',
            'info':"下载秒租办公App,注册并完善信息即可"
          },
          {'message': '如何在秒租预定空间',
            'info':"下载秒租办公App,注册并完善信息即可"
          },
          {'message': '如何在秒租预定空间',
            'info':"下载秒租办公App,注册并完善信息即可"
          }
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

  .help {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    img {
      width: 100%;
    }
    ul {
      list-style-type: none;
      padding: 0;
      li {
        margin: 0 10px;
      }
    }
    .phone{
      span{
        color: red;
      }
    }
  }

  /*.icon-help{*/
  /*display: inline-block;*/
  /*width:100%;*/
  /*height: 100%;*/
  /*background: url("../assets/help-main.png");*/
  /*}*/
</style>
