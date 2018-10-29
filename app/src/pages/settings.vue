<template lang="html">
<div class="">
  <layoutheader />
  <v-content>
    <v-container>
      <v-card>
        <v-layout row wrap>
          <v-flex v-for="item in settings" :key="item.name" xs12>
            <div class="row-item">
              <span class="subheading text-xs-left setting-name text-capitalize">{{item.name}}
              &nbsp;
              <font-awesome-icon class="setting-icon" :icon="`${item.icon}`" />
              </span>
              <v-switch
              v-if="`${item.type}`=='switch'"
              class="setting-switch"
              color="info"
              hide-details
            ></v-switch>
            <v-btn
            @click="dialog = true"
            v-if="`${item.type}`=='button'"
            class="setting-button"
            color="error"
            >
            {{item.name}}
            </v-btn>
            </div>
            <v-divider class="divider"></v-divider>
          </v-flex>
        </v-layout>
      </v-card>
    </v-container>
  </v-content>
  <v-dialog
  v-model="dialog"
  max-width="290"
>
  <v-card>
    <v-card-title class="headline">Are you sure you want to clear cache?</v-card-title>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn
        color="green darken-1"
        flat="flat"
        @click="dialog = false"
      >
        Cancel
      </v-btn>
      <v-btn
        @click.prevent="$_emitdata"
        color="red darken-1"
        flat="flat"
        @click="dialog = false"
      >
        Clear
      </v-btn>
    </v-card-actions>
  </v-card>
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
  data(){
    return{
      dialog:false,
      settings:[
        {name:'notifications',type:'switch',icon:'bell'},
        {name:'feedback',type:'switch',icon:'comments'},
        {name:'clear cache',type:'button','icon':'database'}
      ]
    }
  }
}
</script>

<style lang="css">
.row-item{
  padding: 26px;
}
.setting-name{
  float: left;
  padding: 12px;
}
.setting-switch{
  float: right;
}
.divider{
  margin-top: 32px;
}
.setting-icon{
  color: #2196F3;
}
.setting-button{
  float: right;
}
</style>
