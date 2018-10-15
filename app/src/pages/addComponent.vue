<template lang="html">

</template>

<script>
/* eslint-disable */
import { mapState, mapActions } from 'vuex'
export default {
  data () {
    return {
      filters:[
        {name:'add-button', type:'button',value:'Add Component'},
        {name:'layout-name', type:'text',value:'Add Component'},
        {name:'component-list', type:'list',value:'null'},
      ]
    }
  },
  computed:{
    ...mapActions('content', ['create']),
  }
}
</script>

<style lang="css">
</style>
