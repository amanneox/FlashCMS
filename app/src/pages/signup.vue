<template lang="html">
  <div class="main">
    <brand/>
    <signup/>
    <version/>
  </div>
</template>

<script>
/* eslint-disable */
import signup from '@/components/SignUp.vue'
import brand from '@/components/Brand.vue'
import version from '@/components/Footer.vue'
export default {
  components:{
    signup,
    brand,
    version
  }
}
</script>

<style lang="css">
</style>
