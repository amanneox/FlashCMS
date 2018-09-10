<template lang="html">
  <v-navigation-drawer
    fixed
    :mini-variant="miniVariant"
    :clipped="clipped"
    v-model="drawer"
    app
  >
    <v-list>
      <v-list-tile
        value="true"
        v-for="(item, i) in items"
        :key="i"
        exact
      >
        <v-list-tile-action>
          <font-awesome-icon  size="lg" :icon="`${item.icon}`" />
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title v-text="item.title"></v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
    <v-divider></v-divider>
  </v-navigation-drawer>
  <v-toolbar dark color="primary" fixed app :clipped-left="clipped">
    <v-toolbar-side-icon dark @click.stop="drawer = !drawer" light></v-toolbar-side-icon>
    <v-toolbar-title v-text="title"></v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn icon>
      <font-awesome-icon size="lg" icon="bell" />
    </v-btn>
    <v-btn to="/login" icon>
      <font-awesome-icon size="lg" icon="user-circle" />
    </v-btn>
    <v-btn icon>
      <font-awesome-icon size="lg" icon="sign-out-alt" />
    </v-btn>
  </v-toolbar>
</template>

<script>
/* eslint-disable*/
  import Vue from 'vue'
  export default {
    data() {
      return {
        cordova: Vue.cordova,
        clipped: false,
        drawer: true,
        items: [{
            icon: 'columns',
            title: 'Dashboard',
          }, {
            icon: 'file',
            title: 'Pages',
          }, {
            icon: 'user-circle',
            title: 'Users',
          }, {
            icon: 'plug',
            title: 'Plugins',
          },
          {
            icon: 'sliders-h',
            title: 'Settings'
          }
        ],
        miniVariant: false,
        right: true,
        rightDrawer: false,
        title: 'FlashCMS'
      }
},
    }
</script>

<style>

</style>
