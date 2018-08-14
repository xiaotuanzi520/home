<template>
  <div class="foot">
    <div class="foot-content">
      <ul>
        <li>业务体系</li>
          <li>产品概述</li>
          <li>合作伙伴</li>
          <li>帮助</li>
      </ul>
      <ul>
        <li>关于我们</li>
          <li>公司介绍</li>
          <li>发展历程</li>
          <li>服务条款</li>
      </ul>
      <ul>
        <li>联系我们</li>
          <li>商务合作</li>
          <li>公司地址</li>
      </ul>
      <ul>
        <li>服务热线</li>
          <li>400-821-6881</li>
          <li>周一至周五9:00-18:00 </li>
          <li>邮箱:1234678@qq.com</li>
      </ul>
    </div>
    <div class="home-footer">miaozu.com</div>
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
    height: 200px;
    background:#363F44;
    color: #ccc;
    padding: 1% 8%;
    .foot-content{
      width: 100%;
      height: 80%;
      border-bottom: 1px solid #606266;
      ul{
        float: left;
        width: 20%;
        height: 100%;
        list-style: none;
        li{
          line-height: 2;
        }
        li:first-child{
          color: #fff;
          line-height: 4;
        }
      }
      ul:last-child{
        width: 40%;
      }
    }
    .home-footer{
      text-align: center;
      padding-top: 5px;
    }
  }
  @media screen and (max-width: 400px) {
    .foot{
      font-size: 10px;
    }
  }
</style>
