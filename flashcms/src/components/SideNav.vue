<template lang="html">
  <el-aside>
    <el-menu
         default-active="2"
         class="el-menu-vertical-demo"
         @open="handleOpen"
         @close="handleClose"
         background-color="#232536"
         text-color="#fff"
         active-text-color="#ffd04b">
         <el-menu-item class="brand-icon" index="2">
           <img width="75" height="75" src="../assets/ic_logo.png" alt="">
         </el-menu-item>
         <el-menu-item index="3">
           <i class="el-icon-document"></i>
           <span>Navigator Three</span>
         </el-menu-item>
         <el-menu-item index="4">
           <i class="el-icon-setting"></i>
           <span>Navigator Four</span>
         </el-menu-item>
         <el-menu-item index="5">
           <font-awesome-icon icon="user-circle" />&nbsp;
           <span>Users</span>
         </el-menu-item>
         <el-menu-item index="6">
          <font-awesome-icon icon="plug" />&nbsp;
           <span>Plugins</span>
         </el-menu-item>
         <el-menu-item index="7">
           <i class="el-icon-setting"></i>
           <span>Settings</span>
         </el-menu-item>
       </el-menu>
  </el-aside>
</template>

<script>
export default {
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style lang="css">
.brand-icon{
  height: 80px !important;
  background: #00c6ff;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #0072ff, #00c6ff);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #0072ff, #00c6ff); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */


}
</style>
