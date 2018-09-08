<template>
    <el-dialog title="登录" :visible.sync="dialogLoginVisible" @close="close" center @modal="true">
      <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
        <h1>欢迎登录秒租办公</h1>
        <h3>还没有账号,<span>注册</span></h3>
        <el-form-item prop="name">
          <el-input v-model.number="ruleForm2.name" placeholder="手机号码"></el-input>
        </el-form-item>
        <el-form-item prop="pass">
          <el-input type="password" v-model="ruleForm2.pass" auto-complete="off" placeholder="密码"></el-input>
        </el-form-item>
        <span><a>忘记密码？</a></span>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm2')">登录</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
</template>
<script>
  export default {
    name: 'Login',
    props: {
      dialogLoginVisible: false
    },
    data() {
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm2.checkPass !== '') {
            this.$refs.ruleForm2.validateField('checkPass');
          }
          callback();
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
      var checkName = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入'));
        } else {
          if (this.ruleForm2.checkPass !== '') {
            this.$refs.ruleForm2.validateField('checkPass');
          }
          callback();
        }
      };
      return {
        ruleForm2: {
          pass: '',
          checkPass: '',
          name: ''
        },
        rules2: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
          name: [
            { validator: checkName, trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      close () {
        this.$emit('dialogLoginHide',false)
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$http({
              method: 'post',
              url: "http://192.168.100.18:8080/hWeb/user/login",
              data: {
                account: this.ruleForm2.name,
                password: this.ruleForm2.pass,
                pin: '12321'
              }
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
    }
  }
</script>
<style scoped>
  @import './index.css';
</style>
