<template>
  <div>
    <Header/>
<div class="create-wrap">
  <div class="banner create-header">

  </div>
  <el-dialog title="基本信息" :visible="dialogFormVisible">
    <el-form  label-width="100px">
      <el-form-item label="公司名称" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="公司介绍" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="公司电话" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="公司地址" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="联系人姓名" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="联系人电话" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" >确定注册</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>
</div>
    <Footer/>
  </div>
</template>

<script>
  import Header from '../components/header'
  import Footer from '../components/footer'
  export default {
    name: 'CreateHouse',
    components:{
      Header,Footer
    },
    data() {
      return {
        dialogFormVisible: true,
        ruleForm: {
          name: '',
        }
      }
      }
    }

</script>

<style scoped>
.create-wrap{
  width: 100%;
  min-height: 800px;
  position: relative;
}
  .create-header{
    background-image: url('../img/pages/owner-banner.png');
  }
  .create-form{
    width: 600px;
    background: #fff;
    box-shadow:0px 1px 10px 0px rgba(0,0,0,0.1);
    position: absolute;
    top:200px;
    left: 50%;
    margin-left: -300px;
    padding: 20px;
  }
</style>
