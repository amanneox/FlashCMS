<template lang="html">
  <v-container>
    <v-card v-for="item in user" :key="`${item}-n`" >
      <v-layout>
        <v-flex class="avatar-holder">
          <v-avatar class="avatar" size="100px" tile>
            <img class="avatar-thumb" src="../assets/man.svg" alt="avatar">
          </v-avatar>
            <span class="title text-capitalize user-name">Hi, {{item.name}}</span>
        </v-flex>
      </v-layout>
      <v-container>
      <v-layout>
        <v-flex sm6>
          <v-text-field :value="`${item.email}`" dark flat disable solo></v-text-field>
        </v-flex>
        <v-btn icon class="edit-icon">
          <font-awesome-icon class="" size="lg" icon="edit" />
        </v-btn>
      </v-layout>
      <v-layout>
        <v-flex  sm6>
          <v-text-field :value="`${item.number}`" dark flat solo></v-text-field>
        </v-flex>
        <v-btn icon class="edit-icon">
          <font-awesome-icon class="" size="lg" icon="edit" />
        </v-btn>
      </v-layout>
      <v-layout>
        <v-flex sm6>
          <v-text-field :value="`${item.password}`" dark flat solo></v-text-field>
        </v-flex>
        <v-btn icon class="edit-icon">
          <font-awesome-icon class="" size="lg" icon="edit" />
        </v-btn>
      </v-layout>
    </v-container>
    </v-card>
  </v-container>
</template>

<script>
/* eslint-disable*/
export default {
  props:{
  user: Array
},
}
</script>

<style lang="css">
.user-name{
  float: left;
  margin: 38px;
}
.v-text-field__slot,.v-input__slot{
background-color: #E0E0E0 !important;
}
input{
  color: black !important;
}
.avatar{
  float: left;
}
.avatar-holder{
  margin: 16px;
}
.avatar-thumb{
  border-radius: 50px !important;
  background: wheat;
}
</style>
