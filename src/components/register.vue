<template>
  <el-dialog class="register-wrap" title="注册" :visible="dialogRegisterVisible" @close="close" center @modal="true">
      <el-form class="demo-ruleForm">
        <h1>手机号注册</h1>
        <h3>已有账号，<span>登录</span></h3>
        <el-form-item prop="account">
          <el-input placeholder="请输入手机号" class="input-with-select">
          </el-input>
    </el-form-item>
        <el-form-item>
          <el-input ></el-input>
        </el-form-item>
    <el-form-item prop="pass">
      <el-input type="password"></el-input>
    </el-form-item>

    <el-form-item>
      <el-button type="primary" >确定注册</el-button>
    </el-form-item>
  </el-form>
    </el-dialog>
</template>
<script>
  import Qs from 'qs'
  export default {
    name: 'Register',
    props: {
      dialogRegisterVisible: false
    },
    data() {
      // console.log(this.props)
      return {

      }
    },
    methods: {
      close () {
        this.$emit("dialogRegisterHide")
      },
    },
    mounted: function() {
    }
  }
</script>
<style>
  register-wrap .el-dialog{
    width: 350px;
  }
  .el-form h3{
    margin: 20px 0;
  }
  .el-form span{
    color: #2E6DE5;
  }
  .el-form button{
    width: 300px;
    margin-top: 20px;
    background: #FB0F3A;
    border: none;
  }
  .el-form button>span{
    color: #fff;
  }
  .el-select .el-input {
    width: 80px;
    height: 38px;
  }
  .input-with-select .el-input-group__prepend {
    background-color: #fff;
  }


</style>
