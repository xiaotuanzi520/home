<template>
  <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
    <el-form-item label="名称" prop="account">
      <el-input v-model.number="ruleForm2.account"></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="pass">
      <el-input type="password" v-model="ruleForm2.pass" auto-complete="off"></el-input>
    </el-form-item>

    <el-form-item label="email" prop="email">
      <el-input v-model.number="ruleForm2.email" type="email"></el-input>
    </el-form-item>
    <el-form-item label="yzm" prop="yzm">
      <el-input v-model.number="ruleForm2.yzm" ></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
      <el-button @click="resetForm('ruleForm2')">重置</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
  import Qs from 'qs'
  export default {
    data() {
      var checkEmail = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('不能为空'));
        } else {
          callback();
        }
      };
      var checkYzm = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('不能为空'));
        } else {
          callback();
        }
      };
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
          email: '',
          account: '', // 4-16
          yzm: ''
        },
        rules2: {
          pass: [
            {validator: validatePass, trigger: 'blur'}
          ],
          checkPass: [
            {validator: validatePass2, trigger: 'blur'}
          ],
          email: [
            {validator: checkEmail, trigger: 'blur'}
          ],
          account: [
            {validator: checkAccount, trigger: 'blur'}
          ],
          yzm: [
            {validator: checkYzm, trigger: 'blur'}
          ]
        }
      };
    },
    methods: {
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
                email: this.ruleForm2.email,
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
      },
      getCode() {
        this.$http({
          method: 'post',
          url: "/hWeb/user/identification"
        }).then((res) => {
          this.ruleForm2.yzm = res.data.pin;
        });
      }
    },
    mounted: function() {
      this.getCode();
    }
  }
</script>
<style>

</style>
