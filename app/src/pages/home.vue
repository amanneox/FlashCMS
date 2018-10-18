<template lang="html">
  <div class="">
    <layoutheader/>
    <v-content>
      <v-container>
      <span>Home</span>
  </v-container>
  </v-content>
  </div>

</template>

<script>
/* eslint-disable*/
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
}
}
</script>

<style lang="css">
</style>
