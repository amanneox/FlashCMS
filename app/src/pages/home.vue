<template lang="html">
  <div class="">
    <layoutheader/>
    <v-content>
      <v-container>
        <v-layout row wrap>
         <span class="title text-capitalize user-name">Welcome, {{account.user.name}}</span>
        </v-layout>
      <v-layout row wrap>
        <span  v-if="`${account.user.role}`== 700">(Admin User)</span>
        <span  v-if="`${account.user.role}`=== 600">(Write & Read)</span>
        <span  v-if="`${account.user.role}`== 400">(Read Only)</span>
      </v-layout>
      <v-layout row wrap>
        <v-flex xs6 md4 v-for="(index,i) in 4">
          <v-card :class="`item-card color-${i}`">
            <v-container>
              {{i}}
            </v-container>
          </v-card>
        </v-flex>
      </v-layout>
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
  created(){
    const loggedIn = localStorage.getItem('user')
    if (!loggedIn) {
      this.$router.push('/login')
    }
},
computed: {
  ...mapState({account: 'account', status: ['status'], user: ['user']})
}
}
</script>

<style lang="css">
.item-card{
  margin: 12px;
}
.color-0{
  background: #8E2DE2;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #4A00E0, #8E2DE2);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #4A00E0, #8E2DE2); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

}
.color-1{
  background: #FF512F;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #F09819, #FF512F);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #F09819, #FF512F); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

}
.color-2{
  background: #FF416C;  /* fallback for old browsers */
background: -webkit-linear-gradient(to top, #FF4B2B, #FF416C);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to top, #FF4B2B, #FF416C); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

}
.color-3{
  background: #396afc;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #2948ff, #396afc);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #2948ff, #396afc); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
</style>
