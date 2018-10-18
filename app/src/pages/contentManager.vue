<template lang="html">
<div class="">
  <layoutheader/>
  <v-content>
  <v-container>
    <v-card>
      <v-layout class="main-content" row wrap>
        <v-flex xs3>
          <v-card class="layout-item item">
            <span class="layout-name">This is a dummy content</span>
            <v-btn icon class="edit-icon">
              <font-awesome-icon class="" size="lg" icon="edit" />
            </v-btn>
          </v-card>
        </v-flex>
      </v-layout>
    </v-card>
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
    }
  },
  computed:{
    ...mapActions('content', ['get_All']),
    contentlist(){
      return this.get_All()
    }
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
 .main-content{
   padding: 16px;
 }
</style>
