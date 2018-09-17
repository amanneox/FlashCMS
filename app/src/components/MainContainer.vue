<template lang="html">
<v-container>
  <v-card>
    <v-container>
    <v-layout row wrap>
      <v-flex>
        <span class="subheading layout-name">Laout Name</span>
      </v-flex>
      <v-flex>
        <v-btn class="add-btn white--text text-capitalize">Add Component</v-btn>
      </v-flex>
    </v-layout>
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
.layout-name{
  float: left;
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
