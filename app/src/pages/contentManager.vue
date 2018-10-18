<template lang="html">
<div class="">
  <layoutheader/>
  <v-content>
  <v-container>
    <v-card>
      <v-layout class="main-content" row wrap>
        <v-flex v-for="i in content.items.content" :key="`${i}-item`" xs4 class="content-box">
          <v-card class="layout-item item">
            <v-container>
              <v-layout>
              <p class="layout-name subheading">{{i.name}}</p>
              </v-layout>
              <v-layout>
                <p>{{i._id}}</p>
              </v-layout>
              <v-btn icon class="edit-icon" small fab dark color="accent">
               <v-icon dark>edit</v-icon>
              </v-btn>

            </v-container>
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
  methods:{
     ...mapActions('content', ['create','get_All']),
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
.content-box{
  padding: 12px;
}
.layout-item{
  background-color: #F5F5F5 !important;
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
  float: right !important;
}
 .item {
   margin-bottom: 18px;
 }
 .main-content{
   padding: 16px;
 }
</style>
