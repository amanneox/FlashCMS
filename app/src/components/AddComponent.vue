<template lang="html">
<v-container>
  <v-card>
    <v-container>
    <v-layout row wrap>
      <v-flex>
        <span class="subheading layout-name">Add Component</span>
      </v-flex>
      <v-flex>
        <v-btn class="add-btn white--text text-capitalize">Add Component&nbsp; <font-awesome-icon icon="plus" /></v-btn>
      </v-flex>
    </v-layout>

    <v-container>
    <v-layout class="layout-item" justify-left v-for="i in 4" :key="i" row wrap>
      <v-flex xs8>
        <span class="text-xs-left name">This is a dummy component</span>
      </v-flex>
      <v-flex xs4>
        <v-btn icon class="edit-icon">
          <font-awesome-icon class="" size="lg" icon="edit" />
        </v-btn>
        </v-flex>
    </v-layout>
    </v-container>

  </v-container>
  </v-card>
</v-container>
</template>

<script>
/* eslint-disable */
export default {
}
</script>

<style lang="css">
.layout-item{
  background-color: #F5F5F5;
  margin: 12px !important;
}
.layout-name{
  float: left;
  }
.name{
  padding: 12px;
  float: left;
}
.edit-icon{
  float: right;
}
 .item {
   margin-bottom: 18px;
 }

 .box-card {
   width: 100%;
 }
 .add-btn{
   background: #00c6ff;  /* fallback for old browsers */
   background: -webkit-linear-gradient(to right, #0072ff, #00c6ff);  /* Chrome 10-25, Safari 5.1-6 */
   background: linear-gradient(to right, #0072ff, #00c6ff); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

   float: right;
 }
</style>
