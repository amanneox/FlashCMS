<template lang="html">
  <el-container>
  <el-main class="main-card">
  <el-card  class="box-card">
    <div slot="header" class="clearfix">
      <span class="layout-name">Layout Name</span>
     <el-button class="add-btn" type="primary">Add Component</el-button>
    </div>
    <div v-for="o in 4" :key="o" class="text item">
      {{'List item ' + o }}
    </div>
  </el-card>
</el-main>
   </el-container>
</template>

<script>
/* eslint-disable */
export default {
  components:{
    toolbar
  }
}
</script>

<style lang="css">
.layout-name{
  float: left;
  }
.text {
   font-size: 14px;
 }

 .item {
   margin-bottom: 18px;
 }

 .clearfix:before,
 .clearfix:after {
   display: table;
   content: "";
 }
 .clearfix:after {
   clear: both
 }

 .box-card {
   width: 100%;
 }
 .add-btn{
float: right;
 }
</style>
