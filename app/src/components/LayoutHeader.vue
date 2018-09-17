<template>
    <div>
    <v-navigation-drawer
      :clipped="$vuetify.breakpoint.lgAndUp"
      v-model="drawer"
      fixed
      app
      dark
      color="primary"
      class="navbar"
    >
    <v-toolbar flat class="transparent">
        <v-list class="pa-0">
          <v-list-tile avatar>
            <v-list-tile-avatar>
              <img src="../assets/ic_logo.png">
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title>FlashCMS</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-toolbar>

      <v-list dense>
        <template v-for="item in items">
          <v-layout
            v-if="item.heading"
            :key="item.heading"
            row
            align-center
          >
            <v-flex xs6>
              <v-subheader v-if="item.heading">
                {{ item.heading }}
              </v-subheader>
            </v-flex>
            </v-layout>
          <v-list-tile color="white" v-else :key="item.text">
            <v-list-tile-action>
              <font-awesome-icon class="nav-icon" size="lg" :icon="`${ item.icon }`" />
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>
                {{ item.text }}
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </template>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="primary" class="elevation-0" :clipped-left="$vuetify.breakpoint.lgAndUp" app fixed>
      <v-btn icon color="white"  @click.stop="drawer = !drawer" >
          <font-awesome-icon size="lg" icon="bars" />
      </v-btn>
      <v-toolbar-title style="width: 300px" class="ml-0 pl-3">
        <span  class="hidden-sm-and-down white--text font-weight-black">FlashCMS</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn color="white" icon>
            <font-awesome-icon class="user-icon" size="lg" icon="user" />
      </v-btn>
      <v-btn  @click="dialog = true" icon color="red">
              <font-awesome-icon class="power-off-icon" size="lg" icon="power-off" />
      </v-btn>

      <v-avatar size="48px" tile>
        <img src="../assets/ic_logo.png" alt="FlashCMS">
      </v-avatar>
    </v-toolbar>
    <v-dialog
    v-model="dialog"
    max-width="290"
  >
    <v-card>
      <v-card-title class="headline">Are you sure you want to logout?</v-card-title>
      <v-card-actions>
        <v-spacer></v-spacer>

        <v-btn
          color="green darken-1"
          flat="flat"
          @click="dialog = false"
        >
          Cancel
        </v-btn>

        <v-btn
          to="/login"
          color="red darken-1"
          flat="flat"
          @click="dialog = false"
        >
          Logout
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</div>
</template>

<script>
export default {
  data: () => ({
    drawer: true,
    items: [
      { icon: 'plus-square', text: 'Create Content' },
      { icon: 'file', text: 'Content Manager' },
      { icon: 'user-circle', text: 'Users' },
      { icon: 'plug', text: 'Plugins' },
      { icon: 'sliders-h', text: 'Settings' },
      { icon: 'question-circle', text: 'Help' }

    ],
    dialog: false
  }),
  props: {
    source: String
  }
}
</script>

<style>

.power-off-icon{
  color: #fff;
}
.navbar{
  background: #1C2541 !important;
}
</style>
