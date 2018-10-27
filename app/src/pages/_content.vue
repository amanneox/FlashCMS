<template lang="html">
<div class="">
  <layoutheader />
  <v-content>
    <v-container>
      <v-card>
        <v-layout>
          <p class="text-xs-left title main-title">Configure Content</p>
          <v-btn :to="`view/${this.$route.params.id}`" color="accent" class="edit-btn"><v-icon dark>edit</v-icon>Edit</v-btn>
        </v-layout>
        <v-layout row wrap>
          <v-flex md2 xs4 v-for="item in options" :key="item.name" class="layout-item-option">
            <v-card :class="`${item.name}-color`">
              <p @click="dialog = true" @click.prevent="updateModel(item.name)" class="subheading name-text white--text">{{item.name}}</p>
            </v-card>
          </v-flex>
        </v-layout>
          <v-layout row wrap>
          <v-flex xs12>
              <p class="text-xs-left title main-title">Content Structure</p>
          </v-flex>
          <v-flex>
            <v-list>
         <v-list-group
           v-for="f in field.field"
           :key="f._id"
           no-action
         >
           <v-list-tile slot="activator">
             <v-list-tile-content>
               <v-list-tile-title>{{ f.name }}</v-list-tile-title>
             </v-list-tile-content>
           </v-list-tile>

           <v-list-tile>
             <v-list-tile-content>
               <v-list-tile-title>{{ f.value }}</v-list-tile-title>
             </v-list-tile-content>

           </v-list-tile>
         </v-list-group>
       </v-list>
          </v-flex>

        </v-layout>
      </v-card>
    </v-container>
  </v-content>
  <v-dialog v-model="dialog" width="500">
    <v-card>
      <v-card-title class="headline grey lighten-2" primary-title>
        Create&nbsp;{{currentModel}}&nbsp;Field
      </v-card-title>
      <v-container v-if="ModelType">
        <v-text-field v-model="emitData.name" v-validate="'required'" name="name" dark flat clearable solo label="Field Name" required></v-text-field>
      </v-container>
      <v-container v-if="!ModelType">
        <v-layout row wrap>
          <v-select v-model="emitData.current" label="Current Content" solo disabled></v-select>
        </v-layout>
        <v-layout row wrap>
          <v-select v-model="emitData.relation" :items="options" label="Solo field" solo></v-select>
        </v-layout>
      </v-container>
      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="red" class="white--text" @click="dialog = false">
          Cancel
        </v-btn>
        <v-btn color="accent" @click="dialog = false" @click.prevent="$_emitData">
          Create
        </v-btn>
      </v-card-actions>
    </v-card>
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
  data(){
    return{
      dialog: false,
      emitData:{
        name:'',
        current:'',
        relation:'',
        type:''
      },
      currentModel:'',
      ModelType:true,
      options:[
        {name:'Text'},
        {name:'Boolean'},
        {name:'String'},
        {name:'Image'},
        {name:'Number'},
        {name:'Relation'}
      ]
    }
  },
  methods:{
    ...mapActions('field', ['createField','getFields']),
    updateModel(name){
      this.currentModel = name
      if (name=='Relation') {
      this.ModelType = false
      }
      else {
          this.ModelType = true
      }
    },
    $_emitData(){
      if (this.ModelType) {
        const field = {
          name:this.currentModel,
          value:this.emitData.name,
          id:this.$route.params.id
        }
        this.createField(field)
      }
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
.Text-color{
  background: #8E2DE2;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #4A00E0, #8E2DE2);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #4A00E0, #8E2DE2); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

}
.Boolean-color{
  background: #232526;  /* fallback for old browsers */
background: -webkit-linear-gradient(to left, #414345, #232526);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to left, #414345, #232526); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

}
.String-color{
  background: #FF416C;  /* fallback for old browsers */
background: -webkit-linear-gradient(to top, #FF4B2B, #FF416C);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to top, #FF4B2B, #FF416C); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

}
.Number-color{
  background: #ffb347;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to top, #ffcc33, #ffb347);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to top, #ffcc33, #ffb347); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

}
.Relation-color{
  background: #396afc;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #2948ff, #396afc);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #2948ff, #396afc); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

}
.Image-color{
  background: #FF512F;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #F09819, #FF512F);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #F09819, #FF512F); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

}
.name-text{
  padding: 12px;
}
.main-title{
  padding: 16px;
}
.layout-item-option{
  padding: 12px;
}
.edit-btn{

}
</style>
