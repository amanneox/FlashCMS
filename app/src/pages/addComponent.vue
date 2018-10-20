<template lang="html">
<div class="">
  <layoutheader/>
  <v-content>
  <v-container>
    <v-card>
      <v-container>
      <v-layout row wrap>
        <v-flex>
          <span class="subheading layout-name">Add Component</span>
        </v-flex>
        <v-flex>
          <v-btn  @click="dialog = true" class="add-btn white--text text-capitalize">Add Component&nbsp; <font-awesome-icon icon="plus" /></v-btn>
        </v-flex>
      </v-layout>

      <v-container>
      <p class="text-xs-left title">Recently Created</p>
      <v-layout class="layout-item" justify-left v-for="i in content.items.content.slice().reverse().slice(0,5)" :key="`${i}-item`" row wrap>
        <v-flex xs8>
          <span class="text-xs-left name">{{i.name}}</span>
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
    <v-dialog
    v-model="dialog"
    width="500"
    >
    <v-card>
      <v-container>
        <v-text-field v-model="name" dark flat clearable solo label="Name" required></v-text-field>
        <v-btn @click.prevent="$_emitData" color="secondary">
          Create
        </v-btn>
      </v-container>
    </v-card>
  </v-dialog>
  </v-container>
</v-content>
</div>
</template>

<script>
/* eslint-disable */
import { mapState, mapActions } from 'vuex'
import layoutheader from '@/components/LayoutHeader'
export default {
  components:{
    layoutheader
  },
  data () {
     return {
       dialog: false,
       name:'',
     }
   },
   methods:{
      ...mapActions('content', ['create','get_All']),
     $_emitData () {
       this.create(this.name)
   }
 },
 mounted(){
   this.get_All()
 },
 computed:{
       ...mapState({content: 'content',})
 }
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
