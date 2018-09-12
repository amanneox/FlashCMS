<template lang="html">

<el-container justify="center">
<el-main>
  <el-row type="flex" :gutter="20" justify="center">
    <el-col  justify="start"  :md="6">
      <el-card class="box-card">
        <div class="form">
          <el-form  label-position="top" label-width="100px">
            <el-form-item  justify="start" label="E-mail">
              <el-input clearable></el-input>
            </el-form-item>
            <el-form-item label="Password">
              <el-input clearable></el-input>
            </el-form-item>
          </el-form>
        </div>
         <el-button type="primary">Continue</el-button>
         <el-row :gutter="20" class="row-2">
           <el-col :span="6"> <span class="forgot-text">forgot password&nbsp;?</span> </el-col>
           <el-col :span="6" :offset="12"><span class="sign-up-text">sign&nbsp;up</span></el-col>
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
.row-2{
margin-top: 16px;
}
.forgot-text,.sign-up-text{
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
