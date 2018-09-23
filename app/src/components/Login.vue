<template lang="html">
  <v-layout class="login-form" justify-center>
   <v-flex xs10 sm6 md4>
     <v-card>
  <v-container>
  <v-text-field dark flat clearable solo label="Name" required></v-text-field>
  <v-text-field dark flat clearable solo label="E-mail" required></v-text-field>
   <v-btn to="/" class="continue-btn white--text">Continue</v-btn>
   <v-layout justify-start>
     <v-flex>
       <span class="text-xs-left forgot">Forgot Password?</span>
     </v-flex>
     <v-flex>
       <router-link to="/signup"><span class="text-xs-left signup">Sign Up</span>
       </router-link>
     </v-flex>
   </v-layout>
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
.continue-btn{
  background: #00c6ff;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #0072ff, #00c6ff);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #0072ff, #00c6ff); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
.forgot{
  text-transform: capitalize;
  float: left;
}
.signup{
  text-transform: capitalize;
  float: right;
}
a{
  text-decoration: none !important;
}
.v-text-field__slot,.v-input__slot{
background-color: #E0E0E0 !important;
}
input{
  color: black !important;
}
label{
  color: black !important;
}
</style>
