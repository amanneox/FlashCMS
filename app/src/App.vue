<template>
    <v-app id="app">
      <router-view/>
    </v-app>
</template>

<script>
/*  eslint-disable */
export default {
  data () {
   return {
   }
 },
  mounted(){
  
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
