<template lang="html">
  <div class="">
    <layoutheader/>
    <v-content>
      <v-container>
      <profile :user="[account.user]"/>
  </v-container>
  </v-content>

  </div>
</template>

<script>
import { mapState } from 'vuex'
import profile from '@/components/Profile.vue'
import layoutheader from '@/components/LayoutHeader'
export default {
  components: {
    profile,
    layoutheader
  },
  computed: {
    ...mapState({account: 'account', status: ['status'], user: ['user']})
  }
}
</script>

<style lang="css">
</style>
