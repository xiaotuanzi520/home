<template>
    <el-dialog class="download-wrap" :visible="dialogDownloadVisible" @close="close" center @modal="true">
      <div class="download-title">请在<span>秒租办公APP</span>或<span>小程序中</span>完成订单</div>
      <div class="download-tips">扫描以下二维码下载</div>
      <div class="download-icon">
        <i class="download-app"></i>
        APP下载
      </div>
      <div class="download-icon " >
        <i class="download-program"></i>
        小程序下载
      </div>
   </el-dialog>
</template>
<script>
  export default {
    name: 'Download',
    props: {
      dialogDownloadVisible: false
    },
    data() {
      return {

      }
    },
    methods: {
      close () {
        this.$emit('dialogDownloadHide',false)
      },
    }
  }
</script>
<style scoped>
  .download-wrap .el-dialog--center{
    width:425px;
  }
  .download-title{
    font-size: 14px;
  }
  .download-title span{
    font-size: 20px;
  }
  .download-tips{
    margin: 20px 0;
  }
  .download-icon{
    display: inline-block;
    width: 185px;
    text-align: center;
  }
  .el-dialog__body i{
    display: inline-block;
    width: 175px;
    height: 176px;
  }
  .download-app{
    background: url("../img/public/download-app.png");
  }
  .download-program{
    background: url("../img/public/download-program.png");
  }
</style>
