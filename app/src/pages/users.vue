<template lang="html">
  <div class="">
    <layoutheader />
    <v-content>
      <v-container>
        <v-card>
          <v-layout row wrap>
            <v-flex xs12>
              <v-btn @click="dialog = true" class="create-btn" dark color="accent">
                <v-icon dark>add</v-icon>Add User
              </v-btn>
            </v-flex>
          </v-layout>
          <v-layout row wrap>
            <v-flex>
              <span>UserName</span>
            </v-flex>
            <v-flex>
              <span>Email</span>
            </v-flex>
            <v-flex>
              <span>Role</span>
            </v-flex>
            <v-flex>
              <span>Delete</span>
            </v-flex>
            <v-flex>
              <v-btn icon>
                <v-icon dark>edit</v-icon>
              </v-btn>
            </v-flex>
          </v-layout>
        </v-card>
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
}
</script>

<style lang="css">
.create-btn{
  margin: 16px;
  float: right;
}
</style>
