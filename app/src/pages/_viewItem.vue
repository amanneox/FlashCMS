<template lang="html">
<div class="">
  <layoutheader />
  <v-content>
    <v-container>
      <v-card>
        <v-layout class="main-content" row wrap>
          <v-flex xs12>
            <v-btn @click="dialog = true" class="plus-icon" dark color="accent">
              <v-icon dark>add</v-icon>Create
            </v-btn>
          </v-flex>
          <v-flex v-for="i in pages" :key="`${i._id}-item`" xs12 md4 class="content-box">
            <v-card class="layout-item item">
              <v-container>
                <v-layout>
                  <p class="layout-name subheading">{{i.data.name}}</p>
                </v-layout>
                <v-layout>
                  <p>{{i._id}}</p>
                </v-layout>
                <v-btn @click="dialog = true" icon class="edit-icon" small fab dark color="accent">
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
    </v-container>
  </v-content>
  <v-dialog v-model="dialog" width="600" class="diloag">
    <v-container>
      <v-layout row wrap>
        <v-flex class="item-col" v-for="item in field.field" :key="item._id" xs6>
          <p class="text-xs-left subheading">{{item.name}}&nbsp;Field</p>
          <p class="text-xs-left subheading">{{item.value}}</p>
          <v-text-field v-model="form.form_data[item.value]" v-if="`${item.name}`=='Text'" :label="`${item.value}`" dark flat disable solo></v-text-field>
          <v-text-field v-model="form.form_data[item.value]" v-if="`${item.name}`=='Number'" :label="`${item.value}`" dark flat disable solo></v-text-field>
          <v-text-field v-model="form.form_data[item.value]" v-if="`${item.name}`=='Boolean'" :label="`${item.value}`" dark flat disable solo></v-text-field>
          <v-textarea v-model="form.form_data[item.value]" v-if="`${item.name}`==='String'" :label="`${item.value}`" dark flat disable solo></v-textarea>
          <file-pond v-model="form.form_data[item.value]" v-if="`${item.name}`==='Image'" name="test" ref="pond" label-idle="Drop files here..." allow-multiple="true" accepted-file-types="image/jpeg, image/png" server="/api" v-on:init="handleFilePondInit" />
        </v-flex>
      </v-layout>
      <v-layout>
        <v-btn @click="dialog = false" color="error">Cancel</v-btn>
        <v-btn class="white--text" :loading="loading" :disabled="loading" @click.prevent="$_emitdata" @click.native="loader = 'loading'" color="success">Save</v-btn>
      </v-layout>
    </v-container>
  </v-dialog>
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
      loader: null,
      loading: false,
       dialog: false,
       page: 1,
       currentPage: 1,
       itemsPerPage: 12,
       resultCount: 0,
       maxVisibleButtons: 4,
       form:{
         form_data:[]
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
      ...mapActions('field', ['createField','getFields']),
     ...mapActions('item', ['createItem','getItems']),
      handleFilePondInit: function() {
         console.log('FilePond has initialized')
       },
       $_emitdata(){
      //   console.log(this.form.form_data)
         const item = {
           id:this.$route.params.id,
           data:this.form.form_data
         }
         this.createItem(item)

       }
},
  mounted(){
    this.getItems(this.$route.params.id)
    this.getFields(this.$route.params.id)

  },

  computed:{
        ...mapState({field: 'field'}),
         ...mapState({item: 'item'}),
         pages() {
    const range = []
    for (let i = this.startPage;
         i < Math.min(this.startPage + this.itemsPerPage);
         i+= 1 ) {
        const item = this.item.items.item[i]
          if (typeof item != 'undefined') {
            range.push({
              ...item
            })
          }

       }
         return range
         },
         totalPages: function() {
           if(this.item.items.item.length < 1){
            return this.resultCount = 0;
        }
        else {
          this.resultCount = this.item.items.item.length
          return Math.ceil(this.resultCount / this.itemsPerPage)
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
  },
}
</script>

<style lang="css">
.v-dialog{
  background: white !important
}
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
.plus-icon{
  float: right !important;
}
 .item {
   margin-bottom: 18px;
 }
 .main-content{
   padding: 16px;
 }
 .item-col{
   padding: 12px;
 }
 .edit-icon{
   float: right !important;
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
 .custom-loader {
    animation: loader 1s infinite;
    display: flex;
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
