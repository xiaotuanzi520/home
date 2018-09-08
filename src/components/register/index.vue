<template>
    <el-dialog title="注册" :visible.sync="dialogRegisterVisible" @close="close" center @modal="true">
      <el-form  label-width="100px" class="demo-ruleForm">
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
      dialogRegisterVisible: false,
    },
    data() {
      // console.log(this.props)
      return {
        ruleForm2: {
          input5:"",
          pass: '', // 7-16
          checkPass: '',
          account: '', // 4-16
        }
      }
    },
    methods: {
      close () {
        this.$emit('dialogRegisterHide',false)
      },
    },
    mounted: function() {
    }
  }
</script>
<style>
  @import './index.css';
</style>
