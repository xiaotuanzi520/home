<template>
  <div class="foot">
    <ul>
      <li>
        <div>业务体系</div>
        <div>
          <span>产品概述</span>
          <span>合作伙伴</span>
          <span>帮组</span>
        </div>
      </li>
      <li>
        <div>关于我们</div>
        <div>
          <span>公司介绍</span>
          <span>发展历程</span>
          <span>服务条款</span>
        </div>
      </li>
      <li>
        <div>联系我们</div>
        <div>
          <span>商务合作</span>
          <span>公司地址</span>
          <span>&nbsp</span>
        </div>
      </li>
      <li>
        <div>服务热线</div>
        <div>
          <span>400-821-6881</span>
          <span>周一至周五9点到十八点 </span>
          <span>邮箱1234689@qq.com</span>
        </div>
      </li>
      <li class="immg">
        <img src="" alt="">
        <span>小程序</span>
      </li>
    </ul>
    <div class="line-foot">
    </div>
    <div class="home">
        11025839@qq.com
    </div>
  </div>
</template>

<script>
  export default {
    name: 'HomeFoot',
    data() {
      return {

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
  .foot{
    width: 100%;
    background:#363F44;
    ul{
      list-style: none;
      li{
        display: inline-block;
        height: 100px;
        width: 15%;
        margin-left: -2.3%;
        div:first-child{
          margin: 7% 0;
          text-align: left;
          color: white;
        }
        div:nth-child(2){
          span{
            text-align: left;
            display: block;
            margin: 2px 0;
            color: #C4C4C4;
          }
        }
      }
      .immg{
        span{
          color: #C4C4C4;
        }
      }
    }
    .line-foot{
      width:80%;
      height: 1px;
      border-bottom: 1px solid #fff;
      margin-bottom: 3%;
      margin-left: 17%;
    }
    .home{
      color: #C4C4C4;
    }
  }

</style>
