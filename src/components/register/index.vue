<template>
  <Register>
    <el-dialog class="login-wrap" title="注册" :visible.sync="dialogRegisterVisible" @close="close" center modal="true">
      <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
        <h1>手机号注册</h1>
        <h3>已有账号，<span>登录</span></h3>
        <el-form-item prop="account">
          <el-input placeholder="请输入手机号" v-model="input5" class="input-with-select">
            <el-select v-model.number="ruleForm2.account" v-model="select" slot="prepend" placeholder="+86">
              <el-option label="+86" value="1"></el-option>
              <el-option label="+86" value="1"></el-option>
            </el-select>
          </el-input>
    </el-form-item>
        <el-form-item>
          <el-input v-model="input5" class="input-with-select"></el-input>
        </el-form-item>
    <el-form-item prop="pass">
      <el-input type="password" v-model="ruleForm2.pass" auto-complete="off"></el-input>
    </el-form-item>

    <el-form-item>
      <el-button type="primary" @click="submitForm('ruleForm2')">确定注册</el-button>
    </el-form-item>
  </el-form>
    </el-dialog>
  </Register>
</template>
<script>
  import Qs from 'qs'
  export default {
    props: {
      dialogRegisterVisible: false
    },
    data() {
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm2.checkPass !== '') {
            this.$refs.ruleForm2.validateField('checkPass');
          } else {
            callback();
          }
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm2.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      var checkAccount = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入名称'));
        } else {
          if (this.ruleForm2.checkPass !== '') {
            this.$refs.ruleForm2.validateField('checkPass');
          } else {
            callback();
          }
        }
      };
      return {
        ruleForm2: {
          pass: '', // 7-16
          checkPass: '',
          account: '', // 4-16
        },
        rules2: {
          pass: [
            {validator: validatePass, trigger: 'blur'}
          ],
          checkPass: [
            {validator: validatePass2, trigger: 'blur'}
          ],
          account: [
            {validator: checkAccount, trigger: 'blur'}
          ]
        }
      };
    },
    methods: {
      close () {
        this.$emit('dialogRegisterHide',false)
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            console.log(this.ruleForm2.account)
            this.$http({
              method: 'post',
              url: "/hWeb/user/register",
              data: Qs.stringify({
                account: this.ruleForm2.account,
                password: this.ruleForm2.pass,
                pin: '12321'
              })
            })
              .then((res) => {
                if (res.data.res == "1") {
                  this.$message.error(res.data.message)
                } else {
                  this.$message.success(res.data.message)
                }
              });
          } else {
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    },
    mounted: function() {
    }
  }
</script>
<style>
  @import './index.css';
</style>
