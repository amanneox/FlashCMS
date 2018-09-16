<template lang="html">
  <div class="main">
    <brand/>
    <login/>
    <version/>
  </div>
</template>

<script>
/* eslint-disable */
import login from '@/components/Login.vue'
import brand from '@/components/Brand.vue'
import version from '@/components/Footer.vue'
export default {
  components:{
    login,
    brand,
    version
  }
}
</script>

<style lang="css">
</style>
