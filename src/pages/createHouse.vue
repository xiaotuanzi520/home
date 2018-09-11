<template>
  <div>
    <OwnerHeader/>
<div class="create-wrap">
  <div class="banner create-header">
        <div class="header-title1">成为秒租办公业主</div>
        <div class="header-title2">成为秒租办公业主，赚钱更轻松</div>
  </div>
    <el-form class="create-form" :rules="rules">
      <div class="info">公司信息</div>
      <el-form-item label="公司名称" prop="name">
        <el-input v-model="ruleForm.name" placeholder="请输入"></el-input>
      </el-form-item>
      <el-form-item label="公司介绍" prop="introduce">
        <el-input v-model="ruleForm.introduce" placeholder="请输入"></el-input>
      </el-form-item>
      <el-row>
        <el-col :span="11">
          <el-form-item label="公司电话" prop="telephone">
            <el-input v-model="ruleForm.telephone" placeholder="请输入"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="11" :offset="2">
          <el-form-item label="公司地址" prop="address">
            <el-input v-model="ruleForm.address" placeholder="请输入"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="11">
          <el-form-item label="选择空间类型（多选）" prop="type" class="select-type">
            <el-checkbox-group v-model="ruleForm.type">
              <el-checkbox label="办公室" name="type" class="icon-select1"></el-checkbox>
              <el-checkbox label="会议室" name="type" class="icon-select2"></el-checkbox>
              <el-checkbox label="工位" name="type" class="icon-select3"></el-checkbox>
              <el-checkbox label="其他" name="type" class="icon-select4"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
        </el-col>
        <el-col :span="11" :offset="2">
          <el-form-item label="公司图片" prop="image">
            <el-upload
              action="https://jsonplaceholder.typicode.com/posts/"
              list-type="picture-card"
              :on-preview="handlePictureCardPreview"
              :on-remove="handleRemove">
              <i class="el-icon-plus"></i>
            </el-upload>
            <el-dialog :visible.sync="dialogVisible">
              <img width="100%" :src="dialogImageUrl" alt="">
            </el-dialog>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="11">
          <el-form-item label="联系人姓名" prop="userName">
            <el-input v-model="ruleForm.userName" placeholder="请输入"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="11" :offset="2">
          <el-form-item label="联系人电话" prop="userPhone">
            <el-input v-model="ruleForm.userPhone" placeholder="请输入"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="11">
          <el-form-item label="联系人邮箱" prop="email">
            <el-input v-model="ruleForm.email" placeholder="请输入"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <div class="info">联系人信息</div>
      <el-row>
        <el-col :span="11">
          <el-form-item label="管理员手机号码" prop="email">
            <el-input v-model="ruleForm.email" placeholder="请输入手机号码"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="11">
          <el-form-item prop="email">
            <el-input v-model="ruleForm.email" placeholder="请输入验证码"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="11">
          <el-form-item label="密码设置" prop="email">
            <el-input v-model="ruleForm.email" placeholder="请输入密码"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="11">
          <el-form-item prop="email">
            <el-input v-model="ruleForm.email" placeholder="请确认密码"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="11">
          <el-form-item>
            <el-button type="primary" @click="submitForm('dynamicValidateForm')">申请</el-button>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
</div>
    <Footer/>
  </div>
</template>

<script>
  import OwnerHeader from '../components/ownerHeader'
  import Footer from '../components/footer'
  export default {
    name: 'CreateHouse',
    components:{
      OwnerHeader,Footer
    },
    data() {
      return {
        dialogImageUrl: '',
        dialogVisible: false,
        ruleForm: {
          name: '',
          introduce:'',
          telephone:'',
          address:'',
          userName:'',
          userPhone:'',
          type:[],
          image:'',
          email:'',
        },
        rules: {
          name: [
            {required: true, message: '请输入公司名称', trigger: 'blur'},
            {min: 2, max: 20, message: '长度在 2 到 20 个字符', trigger: 'blur'}
          ],
          introduce: [
            {required: true, message: '不能为空', trigger: 'blur'},
            {min: 2, max: 100, message: '长度在 2 到 100 个字符', trigger: 'blur'}
          ],
          telephone:[
            { required: true, message: '请输入电话号码', trigger: 'blur'},
            { type: 'number', message: '必须为数字', trigger: 'blur'}
          ],
          address:[
            { required: true, message: '请输入公司地址', trigger: 'blur'},
            {min: 2, max: 100, message: '长度在 2 到 100 个字符', trigger: 'blur'}
          ],
          userName:[
            { required: true, message: '请输入联系人姓名', trigger: 'blur'},
            {min: 2, max: 20, message: '长度在 2 到 20 个字符', trigger: 'blur'}
          ],
          userPhone:[
            { required: true, message: '请输入公司地址', trigger: 'blur'},
            {min: 2, max: 100, message: '长度在 2 到 100 个字符', trigger: 'blur'}
          ],
          type: [
            { type: 'array', required: true, message: '请至少选择一个空间类型', trigger: 'change' }
          ],
          image: [
            { required: true, message: '请至少长传一张图片', trigger: 'change' }
          ],
          email: [
            { required: true, message: '请输入邮箱地址', trigger: 'blur' },
            { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
          ],
        }
      }
      },
    methods: {
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      }
    }
    }

</script>

<style scoped>
.create-wrap{
  width: 100%;
  min-height: 1850px;
  position: relative;
}
  .create-header{
    text-align: center;
    color: #fff;
    background-image: url('../img/pages/owner-banner.png');
  }
  .header-title1{
    font-size: 30px;
    margin: 166px 0 20px 0;
  }
.header-title2{
  font-size: 50px;
  text-shadow: 1px 1px 1px rgba(72, 72, 72, 0.3);
}
  .create-form{
    width: 1060px;
    background: #fff;
    box-shadow:2px 2px 8px 8px rgba(72, 72, 72, 0.16);
    position: absolute;
    top:400px;
    left: 50%;
    margin-left: -530px;
    padding: 40px;
  }
  .info{
    font-size: 20px;
    margin-bottom: 40px;
  }
  .create-form i{
    display: inline-block;
    width: 69px;
    height: 68px;
  }
.el-form button{
  width: 120px;
}
</style>
<style>
  .create-form .el-form-item__label{
    width: 100%;
    text-align: left;
  }
  .create-form .select-type .el-checkbox__inner{
    border: none;
    width: 69px;
    height: 68px;
  }
  .icon-select1 .el-checkbox__inner{
    background: url("../img/pages/apply-office.png");
  }
  .icon-select2 .el-checkbox__inner{
    background: url("../img/pages/apply-boardroom.png");
  }
  .icon-select3 .el-checkbox__inner{
    background: url("../img/pages/apply-station.png");
  }
  .icon-select4 .el-checkbox__inner{
    background: url("../img/pages/apply-other.png");
  }
  .create-form .el-checkbox__label{
    display: block;
  }
  .create-form .el-checkbox+.el-checkbox{
    margin-left: 55px;
  }
  .select-type>.el-form-item__label{
    margin-bottom: 40px;
  }
  .avatar-uploader .el-upload {
    width: 210px;
    height: 140px;
    line-height: 140px;
    background: #F6F6F6;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
    vertical-align: middle;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>
