<template lang="html">
  <v-layout class="login-form" justify-center>
   <v-flex xs12 sm6>
     <v-card>
<v-container>
  <v-text-field dark flat flat clearable class="elevation-0" solo label="Name" required></v-text-field>
  <v-text-field dark flat clearable solo label="E-mail" required></v-text-field>
   <v-btn color="accent">Continue</v-btn>
</v-container>
     </v-card>
   </v-flex>
 </v-layout>
</template>

<script>
/* eslint-disable */
  export default {}
</script>

<style lang="css">
.login-form{
  margin-top: 22px;
}
a{
  text-decoration: none !important;
}

</style>
