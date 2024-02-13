<template>
  <v-app id="inspire">
    <v-app-bar>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-app-bar-title>
        Umjetnička djela
      </v-app-bar-title>

      <v-spacer></v-spacer>

      <v-btn icon="mdi-dots-vertical">
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
