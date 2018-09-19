<template lang="html">
  <div class="">
    <layoutheader/>
    <v-content>
      <v-container>
      <profile/>
  </v-container>
  </v-content>

  </div>
</template>

<script>
import profile from '@/components/Profile.vue'
import layoutheader from '@/components/LayoutHeader'
export default {
  components: {
    profile,
    layoutheader
  }
}
</script>

<style lang="css">
</style>
