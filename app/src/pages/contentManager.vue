<template lang="html">
<div class="">
  <layoutheader/>
  <v-content>
  <v-container>
    <v-card>
      <v-layout class="main-content" row wrap>
        <v-flex v-for="i in pages" :key="`${i._id}-item`" xs4 class="content-box">
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
  <div class="text-xs-right pagination-holder">
  <v-pagination v-model="currentPage" :length="totalPages"></v-pagination>
</div>
{{currentPage}}
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
       page: 1,
       currentPage: 1,
       itemsPerPage: 4,
       resultCount: 0,
       maxVisibleButtons: 4
    }
  },
  methods:{
     ...mapActions('content', ['create','get_All']),
},
  mounted(){
    this.get_All()
  },

  computed:{
         ...mapState({content: 'content'}),
         pages() {
    const range = []
    for (let i = this.startPage;
         i < Math.min(this.startPage + this.itemsPerPage);
         i+= 1 ) {
        const item = this.content.items.content[i]
         range.push({
           ...item
         });
       }
         return range
         },
         totalPages: function() {
         this.resultCount = this.content.items.content.length
         return Math.ceil(this.resultCount / this.itemsPerPage)
       },
       startPage() {
        // When on the first page
        if (this.currentPage === 1) {
          return 0
        }
        // When on the last page
        if (this.currentPage === this.totalPages) {
          return this.totalPages*this.itemsPerPage - this.itemsPerPage
        }
        // When in between
        return this.currentPage*this.itemsPerPage - this.itemsPerPage
      },
  },
}
</script>

<style lang="css">
.pagination-holder{
  margin-top: 16px;
}
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
