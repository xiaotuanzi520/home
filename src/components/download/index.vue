<template>
    <el-dialog :visible.sync="dialogDownloadVisible" @close="close" center @modal="true">
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
        this.$emit('dialogDowmloadHide',false)
      },
    }
  }
</script>
<style scoped>
  @import './index.css';
</style>
