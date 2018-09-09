<template lang="html">
  <v-container>
    <v-card class="elevation-0">
      <div class="main">
        <v-layout row wrap>
          <v-flex class="text-xs-left">
            <span class="text-capitalize title">Login in to use app</span>
          </v-flex>
        </v-layout>
        <v-layout class="email-row" row wrap>
          <p class="text-capitalize text-xs-left">Enter Email</p>
          <v-flex xs12>
          <v-text-field
          ></v-text-field>
        </v-flex>
        </v-layout>
        <v-layout class="password-row" row wrap>
          <p class="text-capitalize text-xs-left">Enter Password</p>
          <v-flex xs12>
          <v-text-field
          ></v-text-field>
        </v-flex>
        </v-layout>
      </div>
    </v-card>
  </v-container>
</template>

<script>
/* eslint-disable*/
export default {
}
</script>

<style lang="css">
.email-row{
  margin-top: 16px;
}
.main{
  padding: 16px;
}
</style>
