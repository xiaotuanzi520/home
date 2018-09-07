<template>
  <Download>
    <el-dialog class="download-wrap" :visible.sync="dialogDownloadVisible" @close="close" center modal="true">
      <div class="download-title">请在<span>秒租办公APP</span>或<span>小程序中</span>完成订单</div>
      <div>扫描以下二维码下载</div>
      <div>
        <i class="download-app"></i>
      </div>
      <div>
        <i class="download-program"></i>
      </div>
   </el-dialog>
  </Download>
</template>
<script>
  export default {
    props: {
      dialogDownloadVisible: false
    },
    data() {
    },
    methods: {
      close () {
        this.$emit('dialogDowmloadHide',false)
      },
    }
  }
</script>
<style scoped>
  @import './index.css';
</style>
