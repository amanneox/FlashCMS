<template>
  <v-app light>
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
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
/* eslint-disable*/
  import Vue from 'vue'
  export default {
    data () {
      return {
        cordova: Vue.cordova,
        clipped: false,
        drawer: true,
        items: [
          {
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
          }],
  miniVariant: false,
  right: true,
  rightDrawer: false,
  title: 'FlashCMS'
}    },
    created () {
      var self = this
      this.cordova.on('deviceready', () => {
        self.onDeviceReady()
      })
    },
    methods: {
      onDeviceReady: function () {
        // Handle the device ready event.
        this.cordova.on('pause', this.onPause, false)
        this.cordova.on('resume', this.onResume, false)
        if (this.cordova.device.platform === 'Android') {
          document.addEventListener('backbutton', this.onBackKeyDown, false)
        }
      },
      onPause () {
        // Handle the pause lifecycle event.
        console.log('pause')
      },
      onResume () {
        // Handle the resume lifecycle event.
        // SetTimeout required for iOS.
        setTimeout(function () {
          console.log('resume')
        }, 0)
      },
      onBackKeyDown () {
        // Handle the back-button event on Android. By default it will exit the app.
        navigator.app.exitApp()
      }
    }
  }
</script>

<style>
	body {
    padding-top: constant(safe-area-inset-top);
    padding-top: env(safe-area-inset-top);
	}
  .footer{ /* Apply this to v-bottom-nav if necessary. */
    margin-bottom: constant(safe-area-inset-bottom);
    margin-bottom: env(safe-area-inset-bottom);
  }
</style>
