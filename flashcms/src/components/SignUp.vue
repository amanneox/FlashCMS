<template lang="html">
<el-container justify="center">
<el-main>
  <el-row type="flex" :gutter="20" justify="center">
    <el-col  justify="start"  :md="6">
      <el-card class="box-card">
        <div class="form">
          <el-form  label-position="top" label-width="100px">
            <el-form-item  justify="start" label="E-mail">
              <el-input v-validate="'required|email'" name="email" clearable></el-input>
              <span class="error">{{ errors.first('email') }}</span>
            </el-form-item>
            <el-form-item  justify="start" label="Number">
              <el-input v-validate="'required|digits:10'" name="number"  clearable></el-input>
              <span class="error">{{ errors.first('number') }}</span>
            </el-form-item>
            <el-form-item label="Password">
              <el-input v-validate="'required|alpha_num|min:4'" name="password" clearable></el-input>
              <span class="error">{{ errors.first('password') }}</span>
            </el-form-item>
            <el-form-item label="Confirm Password">
              <el-input clearable></el-input>
            </el-form-item>
          </el-form>
        </div>
         <el-button type="primary">Continue</el-button>
         <el-row :gutter="20" class="row-2">
           <el-col :span="12"><router-link to="/login"><span class="login-text">Already&nbsp;Registered&nbsp;?&nbsp;login</span></router-link></el-col>
         </el-row>
      </el-card>
    </el-col>
  </el-row>

</el-main>
</el-container>

</template>

<script>
/* eslint-disable */
  export default {}
</script>

<style lang="css">
.error{
  color: #F56C6C;
}
a{
  text-decoration: none !important;
}
.row-2{
  margin-top: 16px;
}
.login-text{
  font-size: 12px;
  color: #909399;
  text-transform: capitalize;
}
.el-form-item__label{
float: left !important;
}
.el-row {
   margin-bottom: 20px;
   &:last-child {
     margin-bottom: 0;
   }
 }
 .el-col {
   border-radius: 4px;
 }
</style>
