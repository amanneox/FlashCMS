<template lang="html">
  <div class="">
    <layoutheader/>
    <v-content>
      <v-container>
    <maincon/>
  </v-container>
  </v-content>
  </div>

</template>

<script>
/* eslint-disable*/
import maincon from '@/components/AddComponent.vue'
import layoutheader from '@/components/LayoutHeader'
export default {
  components:{
    maincon,
    layoutheader
  }
}
</script>

<style lang="css">
</style>
