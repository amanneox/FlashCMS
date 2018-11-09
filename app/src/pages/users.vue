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
          <v-layout class="header-row" row wrap>
            <v-flex xs4 md3>
              <span class="subheading font-weight-bold">User&nbsp;Name</span>
            </v-flex>
            <v-flex xs4 md3>
              <span class="subheading text-xs-left font-weight-bold">User&nbsp;Email</span>
            </v-flex>
            <v-flex xs4 md3>
              <span class="subheading font-weight-bold">User&nbsp;Role</span>
            </v-flex>
          </v-layout>
          <div v-if="users.all.loading" class="text-xs-center loading-icon">
            <v-progress-circular indeterminate color="primary"></v-progress-circular>
          </div>
          <v-layout v-for="user in pages" :key="user._id" row wrap>
            <v-flex class="name-div" xs4 md3>
              <span>{{user.name}}</span>
            </v-flex>
            <v-flex  xs4 md3>
              <div class="email-div">{{user.email}}</div>
            </v-flex>
            <v-flex class="role-div" xs4 md3>
              <span>{{user.role}}</span>
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
    <v-dialog v-model="dialog" width="600" class="diloag">
      <v-container>
        <v-layout row wrap>
          <v-flex class="item-col" xs6>
              <v-text-field v-model="userModel.name" v-validate="'required'" name="name" label="Name" dark flat solo></v-text-field>
                <span>{{errors.first('name')}}</span>
          </v-flex>
          <v-flex class="item-col" xs6>
              <v-text-field v-model="userModel.email" v-validate="'required|email'" clearable name="email" label="Email" dark flat solo></v-text-field>
                <span>{{ errors.first('email') }}</span>
          </v-flex>
          <v-flex class="item-col" xs6>
              <v-text-field v-model="userModel.password" v-validate="'required'" type="password" clearable name="password" label="Password" dark flat solo></v-text-field>
                <span>{{ errors.first('password') }}</span>
          </v-flex>
          <v-flex class="item-col" xs6>
              <v-text-field v-model="userModel.number" v-validate="'required|digits:10'" clearable name="number" label="Number" dark flat solo></v-text-field>
              <span>{{errors.first('number')}}</span>
          </v-flex>
          <v-flex class="item-col" xs6>
              <v-select v-model="userModel.role" v-validate="'required'"
               name="role"
              :items="options"
              item-text="name"
              item-value="value"
              :hint="`${userModel.role.name}, ${userModel.role.value}`"
              label="Select" solo
              persistent-hint
              return-object
              single-line></v-select>
              <span>{{errors.first('role')}}</span>
          </v-flex>

        </v-layout>
        <v-layout>
          <v-btn @click="dialog = false" color="error">Cancel</v-btn>
          <v-btn class="white--text" :loading="loading" :disabled="loading"
          @click.prevent="$_emitdata" @click.native="loader = 'loading'" color="success">Create</v-btn>
        </v-layout>
      </v-container>
    </v-dialog>
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
  created(){
    const user =  localStorage.getItem('user')
    if (JSON.parse(user).role === 400 || JSON.parse(user).role === 600) {
      this.$router.push('/forbidden')
    }
  },
  data(){
    return{
      dialog:false,
      page: 1,
      loader: null,
      loading: false,
      currentPage: 1,
      itemsPerPage: 8,
      resultCount: 0,
      maxVisibleButtons: 4,
      options:[
      {name:'Admin (SuperUser)',value:'0700'},
      {name:'Write & Read',value:'0600'},
      {name:'Read Only',value:'0400'},
      ],
      userModel:{
        name:'',
        email:'',
        password:'',
        number:'',
        role:{name:'Read Only',value:'0400'},
      }
    }
  },
  watch: {
  loader () {
    const l = this.loader
    this[l] = !this[l]

    setTimeout(() => (this[l] = false), 3000)

    this.loader = null
  }
},
    methods:{
      ...mapActions('users', ['get_All']),
      ...mapActions('account', ['createUsers']),
      $_emitdata(){
        const user = {
          name:this.userModel.name,
          number:this.userModel.number,
          email:this.userModel.email,
          password:this.userModel.password,
          role:this.userModel.role.value,
        }
        this.$validator.validateAll()
          if (this.errors.any()) {
            return
          }
          else {
             this.createUsers(user)
             //console.log(user)
          }
      }
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
.header-row{
  margin-bottom: 16px;
}
.v-dialog{
  background: white !important
}
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
.item-col{
  padding: 12px;
}
.custom-loader {
   animation: loader 1s infinite;
   display: flex;
 }
 .v-text-field__slot,.v-input__slot,textarea{
 background-color: #E0E0E0 !important;
 color: black !important;
 }
 input{
   color: black !important;
 }
 label{
   color: #757575 !important;
 }
 .loading-icon{
   margin-bottom: 22px;
 }
 @-moz-keyframes loader {
   from {
     transform: rotate(0);
   }
   to {
     transform: rotate(360deg);
   }
 }
 @-webkit-keyframes loader {
   from {
     transform: rotate(0);
   }
   to {
     transform: rotate(360deg);
   }
 }
 @-o-keyframes loader {
   from {
     transform: rotate(0);
   }
   to {
     transform: rotate(360deg);
   }
 }
 @keyframes loader {
   from {
     transform: rotate(0);
   }
   to {
     transform: rotate(360deg);
   }
 }

</style>
