<template>
  <v-app id="inspire">
    <v-navigation-drawer class="white" v-model="drawer" app>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="display-5 font-weight-bold">
            Elearning web version
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <v-list shaped>
        <v-subheader>MENU</v-subheader>
        <v-list-item-group v-model="selectedItem" color="primary">
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
            :to="item.route"
            link
          >
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="item.text"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
      <template v-slot:append>
        <div class="pa-2">
          <v-btn class="primary white--text" block to="/login"
            ><v-icon left>mdi-logout</v-icon>
            Logout
          </v-btn>
        </div>
      </template>
    </v-navigation-drawer>

    <v-app-bar app color="primary" dark>
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
        ></v-img>
      </template>

      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Elearning</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'MainLayout',
  data: () => ({
    drawer: null,
    selectedItem: 0,
    items: [
      { text: 'Home', icon: 'mdi-home', route: '/' },
      { text: 'Students', icon: 'mdi-account-group', route: '/students' },
      { text: 'My Courses', icon: 'mdi-account', route: '/my-courses' },
      { text: 'All Courses', icon: 'mdi-school', route: '/all-courses' },
    ],
  }),
};
</script>
