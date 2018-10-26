<template lang="html">
<div class="">
  <layoutheader/>
  <v-content>
    <v-container>
      <v-card>
      <v-container>
      <v-layout row wrap>
        <v-flex class="item-col" v-for="item in field.field" :key="item._id" xs6>
            <p class="text-xs-left subheading">{{item.name}}&nbsp;Field</p>
            <p class="text-xs-left subheading">{{item.value}}</p>
            <v-text-field v-if="`${item.name}`!=='String'&&`${item.name}`!=='Image'" :label="`${item.value}`" dark flat disable solo></v-text-field>
            <v-textarea v-if="`${item.name}`==='String'" :label="`${item.value}`" dark flat disable solo></v-textarea>
            <file-pond v-if="`${item.name}`==='Image'" name="test" ref="pond" label-idle="Drop files here..." allow-multiple="true" accepted-file-types="image/jpeg, image/png" server="/api" v-on:init="handleFilePondInit" />
        </v-flex>
      </v-layout>
      <v-layout>
        <v-btn to="/manage" color="error">Cancel</v-btn>
        <v-btn
        class="white--text"
        :loading="loading"
        :disabled="loading"
        @click.native="loader = 'loading'" color="success">Save</v-btn>
      </v-layout>
    </v-container>
      </v-card>
    </v-container>
  </v-content>
</div>
</template>

<script>
/* eslint-disable*/
import { mapState, mapActions } from 'vuex'
import layoutheader from '@/components/LayoutHeader'
import * as FilePond from 'filepond';

export default {
  data () {
      return {
        loader: null,
        loading: false,
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
  components:{
    layoutheader
  },
  methods:{
      ...mapActions('field', ['createField','getFields']),
      handleFilePondInit: function() {
          console.log('FilePond has initialized');

          // FilePond instance methods are available on `this.$refs.pond`
      }
  },
  mounted(){
    this.getFields(this.$route.params.id)
},
  computed:{
     ...mapState({field: 'field'}),
  }
}
</script>

<style lang="css">
.item-col{
  padding: 12px;
}
.v-text-field__slot,.v-input__slot{
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
