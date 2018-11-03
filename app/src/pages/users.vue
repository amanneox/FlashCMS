<template lang="html">
  <div class="">
    <layoutheader />
    <v-content>
      <v-container>
        <v-card>
          <v-layout row wrap>
            <v-flex xs12>
              <v-btn @click="dialog = true" class="create-btn" dark color="accent">
                <v-icon dark>add</v-icon>Add User
              </v-btn>
            </v-flex>
          </v-layout>
          <v-layout row wrap>
            <v-flex xs4 md3>
              <span class="subheading">User&nbsp;Name</span>
            </v-flex>
            <v-flex xs4 md3>
              <span class="subheading text-xs-left">User&nbsp;Email</span>
            </v-flex>
            <v-flex xs4 md3>
              <span class="subheading">User&nbsp;Role</span>
            </v-flex>
          </v-layout>
          <v-layout v-for="user in pages" :key="user._id" row wrap>
            <v-flex class="name-div" xs4 md3>
              <span>{{user.name}}</span>
            </v-flex>
            <v-flex  xs4 md3>
              <div class="email-div">{{user.email}}</div>
            </v-flex>
            <v-flex class="role-div" xs4 md3>
              <span>{{user.name}}</span>
            </v-flex>
            <v-flex xs12 md3>
              <v-layout row wrap>
                <v-flex xs3 md3>
                  <v-btn icon>
                    <font-awesome-icon class="delete-icon" icon="trash" size="lg" />
                  </v-btn>
                </v-flex>
                <v-flex xs3 md3>
                  <v-btn icon class="edit-icon">
                    <v-icon dark>edit</v-icon>
                  </v-btn>
                </v-flex>
              </v-layout>
            </v-flex>
          </v-layout>
        </v-card>
        <div class="text-xs-right pagination-holder">
          <v-pagination v-model="currentPage" :length="totalPages"></v-pagination>
        </div>
      </v-container>
    </v-content>
  </div>
</template>

<script>
/* eslint-disable*/
import { mapState, mapActions } from 'vuex'
import layoutheader from '@/components/LayoutHeader'
export default {
  components:{
    layoutheader
  },
  data(){
    return{
      page: 1,
      currentPage: 1,
      itemsPerPage: 8,
      resultCount: 0,
      maxVisibleButtons: 4,
    }
  },
    methods:{
      ...mapActions('users', ['get_All']),
  },
  mounted(){
    this.get_All()
  },
  computed:{
        ...mapState({users: 'users'}),
        pages() {
   const range = []
   for (let i = this.startPage;
        i < Math.min(this.startPage + this.itemsPerPage);
        i+= 1 ) {
          try {
            const item = this.users.all.items[i]
            if (typeof item != 'undefined') {
              range.push({
                ...item
              })
            }
          } catch (e) {

          }

      }
        return range
        },
        totalPages: function() {
          try {
            if((this.users.all.items.length) < 1){
             return this.resultCount = 0;
         }
         else {
           this.resultCount = this.users.all.items.length
           return Math.ceil(this.resultCount / this.itemsPerPage)
         }
          } catch (e) {

          }


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
      }
}
</script>

<style lang="css">
.create-btn{
  margin: 16px;
  float: right;
}
.delete-icon:hover{
  color: red;
}
.edit-icon:hover{
  color: blue;
}
.pagination-holder{
  margin-top: 16px;
}
.email-div{
  width: 5px !important;
  text-overflow: ellipsis !important;
}
</style>
