<template>
    <v-app id="app">
    <layoutheader v-if="showMenu"/>
    <v-content>
      <v-container>
        <router-view/>
      </v-container>
    </v-content>
</v-app>
</template>

<script>
/*  eslint-disable */
import layoutheader from '@/components/LayoutHeader'
export default {
  components:{
    layoutheader
  },
  data () {
   return {
   }
 },
  mounted(){
    console.log(this.$router)
  },
  computed:{
    showMenu() {
    return this.$router.currentRoute.path !== '/login' && this.$router.currentRoute.path !== '/register';
}
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Lato');
#app {
  font-family: 'Lato', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
