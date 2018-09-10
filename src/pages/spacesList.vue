<template>
  <div>
    <Header/>
    <div class="spacesList-wrap">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>办公室</el-breadcrumb-item>
      </el-breadcrumb>
      <div class="spacesList-select">
        <span class="on">办公室</span>
        <span>会议室</span>
        <span> 工位</span>
        <span>其他</span>
      </div>
      <el-input placeholder="请输入空间名称" class="spacesList-search-input">
        <template slot="append"><el-button>搜索</el-button></template>
      </el-input>
    </div>
    <ul class="spaces-list">
      <li>
        <i class="spacesList1"></i>
        <div class="space-address"><i class="icon-address"></i>上海杨浦区杨浦联合社区</div>
        <div class="spacesList-title">云海办公室</div>
        <div class="area">
          123㎡
          <span>可容纳25人</span>
        </div>
        <div class="price">
          ￥256.5
          <span>/月起</span>
        </div>
      </li>
      <li>
        <i class="spacesList1"></i>
        <div class="space-address"><i class="icon-address"></i>上海杨浦区杨浦联合社区</div>
        <div class="spacesList-title">云海办公室</div>
        <div class="area">
          123㎡
          <span>可容纳25人</span>
        </div>
        <div class="price">
          ￥256.5
          <span>/月起</span>
        </div>
      </li>
      <li>
        <i class="spacesList1"></i>
        <div class="space-address"><i class="icon-address"></i>上海杨浦区杨浦联合社区</div>
        <div class="spacesList-title">云海办公室</div>
        <div class="area">
          123㎡
          <span>可容纳25人</span>
        </div>
        <div class="price">
          ￥256.5
          <span>/月起</span>
        </div>
      </li>
      <li>
      <i class="spacesList1"></i>
      <div class="space-address"><i class="icon-address"></i>上海杨浦区杨浦联合社区</div>
      <div class="spacesList-title">云海办公室</div>
      <div class="area">
        123㎡
        <span>可容纳25人</span>
      </div>
      <div class="price">
        ￥256.5
        <span>/月起</span>
      </div>
    </li>
      <li>
      <i class="spacesList1"></i>
      <div class="space-address"><i class="icon-address"></i>上海杨浦区杨浦联合社区</div>
      <div class="spacesList-title">云海办公室</div>
      <div class="area">
        123㎡
        <span>可容纳25人</span>
      </div>
      <div class="price">
        ￥256.5
        <span>/月起</span>
      </div>
    </li>
      <li>
      <i class="spacesList1"></i>
      <div class="space-address"><i class="icon-address"></i>上海杨浦区杨浦联合社区</div>
      <div class="spacesList-title">云海办公室</div>
      <div class="area">
        123㎡
        <span>可容纳25人</span>
      </div>
      <div class="price">
        ￥256.5
        <span>/月起</span>
      </div>
    </li>
      <li>
      <i class="spacesList1"></i>
      <div class="space-address"><i class="icon-address"></i>上海杨浦区杨浦联合社区</div>
      <div class="spacesList-title">云海办公室</div>
      <div class="area">
        123㎡
        <span>可容纳25人</span>
      </div>
      <div class="price">
        ￥256.5
        <span>/月起</span>
      </div>
    </li>
      <li>
      <i class="spacesList1"></i>
      <div class="space-address"><i class="icon-address"></i>上海杨浦区杨浦联合社区</div>
      <div class="spacesList-title">云海办公室</div>
      <div class="area">
        123㎡
        <span>可容纳25人</span>
      </div>
      <div class="price">
        ￥256.5
        <span>/月起</span>
      </div>
    </li>
      <li>
        <i class="spacesList1"></i>
        <div class="space-address"><i class="icon-address"></i>上海杨浦区杨浦联合社区</div>
        <div class="spacesList-title">云海办公室</div>
        <div class="area">
          123㎡
          <span>可容纳25人</span>
        </div>
        <div class="price">
          ￥256.5
          <span>/月起</span>
        </div>
      </li>
    </ul>
    <Footer/>
  </div>
</template>

<script>
  import Header from '../components/header'
  import Footer from '../components/footer'
  export default {
    name: 'SpacesList',
    components: {
      Header, Footer
    },
    data() {
      return {}
    }
  }
</script>

<style scoped>
 .spacesList-wrap{
   width: 1200px;
   margin: 0 auto;
   margin-top: 60px;
 }
 .spacesList-wrap .el-breadcrumb{
   font-size: 12px;
   color: #484848;
 }
  .spacesList-select{
    font-size: 20px;
    color: #777;
    font-weight:bold;
    margin-top: 40px;
  }
 .spacesList-select .on{
   color: #316F93;
 }
 .spacesList-select span{
   display: inline-block;
   margin-right: 25px;
 }
  .spacesList-search-input{
    width: 774px;
    margin: 20px 0 40px 0;
  }
  .spaces-list{
    width: 1200px;
    min-height: 1300px;
    margin: 0 auto;
    color: #484848;
    font-size: 14px;
  }
 .spaces-list li{
   float: left;
   width: 377px;
   margin:0 19px 30px 0;
 }
 .spaces-list span{
   display: inline-block;
 }
 .spaces-list li>i{
   display: inline-block;
   width: 377px;
   height: 250px;
 }
 .spacesList1{
   background-image: url('../img/pages/owner-list1.png');
 }
 .spaces-list .space-address{
   color: #D22147;
   font-size: 20px;
   height: 21px;
   margin: 20px 0 13px 0;
 }
  .space-address i{
    display: inline-block;
    width: 49px;
    height: 21px;
    margin-right: 13px;
    vertical-align: middle;
    background-image: url('../img/public/icon-spaces-list.png');
  }
  .spacesList-title{
    font-size: 20px;
    margin-bottom: 8px;
  }
  .area span{
    margin-left: 10px;
  }
 .price{
   height: 13px;
   line-height: 13px;
   margin-top: 8px;
 }
.price span{
  font-size: 12px;
  vertical-align: top;
}
</style>
<style>
  .spacesList-wrap>.spacesList-search-input>.el-input__inner {
    width: 620px;
    height: 72px;
    color: #999;
    font-size: 20px;
    border-radius: 0;
    border: 1px solid #E6E6E6;
  }
  .spacesList-wrap>.spacesList-search-input>.el-input-group__append,.el-input-group__prepend{
    width: 154px;
    height: 72px;
    background: #FB274B;
    color: #fff;
    font-size: 20px;
    text-align: center;
  }
</style>
