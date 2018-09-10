<template lang="html">
<v-container>
  <v-card class="">
    <v-toolbar class="elevation-0" dark color="primary">
      <v-toolbar-title>CMS Login</v-toolbar-title>
      <v-spacer></v-spacer>
      <font-awesome-icon size="lg" icon="sign-out-alt" />
    </v-toolbar><v-container class="main">
  <v-text-field v-validate="'required|email'" type="text" name="email" clearable class="elevation-0" label="Email" required></v-text-field>
  <span v-show="errors.has('email')">{{ errors.first('email') }}</span>
  <v-text-field v-validate="'required'" type="password" name="password" clearable label="Password" required></v-text-field>
  <span v-show="errors.has('email')">{{ errors.first('email') }}</span>
</v-container>
    <div class="text-xs-center">
      <v-btn
        :loading="loading"
        :disabled="loading"
        color="accent"
        @click.native="loader = 'loading'"
      >
        Continue
      </v-btn>
       <v-btn outline color="primary">Register</v-btn>
    </div>

  </v-card>
</v-container>
</template>

<script>
/* eslint-disable*/
export default {
  data() {
      return {
        loader: null,
        loading: false,
      }
    },
    watch: {
      loader() {
        const l = this.loader
        this[l] = !this[l]

        setTimeout(() => (this[l] = false), 3000)

        this.loader = null
      }
    }
  }
</script>

<style lang="css">
.custom-loader {
   animation: loader 1s infinite;
   display: flex;
 }
 @-moz-keyframes loader {
   from {
     transform: rotate(0);
   }
   to {
     transform: rotate(360deg);
   }
 }
 @-webkit-keyframes loader {
   from {
     transform: rotate(0);
   }
   to {
     transform: rotate(360deg);
   }
 }
 @-o-keyframes loader {
   from {
     transform: rotate(0);
   }
   to {
     transform: rotate(360deg);
   }
 }
 @keyframes loader {
   from {
     transform: rotate(0);
   }
   to {
     transform: rotate(360deg);
   }
 }
.email-row{
  margin-top: 16px;
}
.main{
  padding: 22px;
}
</style>
