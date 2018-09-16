<template>
  <div id="app">
    <v-navigation-drawer
      :clipped="$vuetify.breakpoint.lgAndUp"
      v-model="drawer"
      fixed
      app
    >
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
          <v-list-tile v-else :key="item.text">
            <v-list-tile-action>
              <font-awesome-icon size="lg" :icon="`${ item.icon }`" />
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
    <v-toolbar color="white" class="elevation-0" :clipped-left="$vuetify.breakpoint.lgAndUp" app fixed>
      <v-btn icon  @click.stop="drawer = !drawer" >
          <font-awesome-icon size="lg" icon="bars" />
      </v-btn>
      <v-toolbar-title style="width: 300px" class="ml-0 pl-3">
        <span class="hidden-sm-and-down">Flash CMS</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn color="" icon>
            <font-awesome-icon class="user-icon" size="lg" icon="user" />
      </v-btn>
      <v-btn icon color="red">
              <font-awesome-icon class="power-off-icon" size="lg" icon="power-off" />
      </v-btn>

      <v-avatar size="48px" tile>
        <img src="./assets/ic_logo.png" alt="FlashCMS">
      </v-avatar>
    </v-toolbar>

    <v-content>
      <v-container fill-height>
        <router-view/>
      </v-container>
    </v-content>

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

    ]
  }),
  props: {
    source: String
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.power-off-icon{
  color: #fff;
}
.user-icon{
  color: #BDBDBD;
}
</style>
