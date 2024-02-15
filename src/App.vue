<template>
  <v-app id="inspire">
    <v-app-bar class="app-bar">
      <div class="branding">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/2367px-Vue.js_Logo_2.svg.png" alt="Vue logo" class="vue-logo" />
        <span class="vue-arts-name">VUEArts</span>
      </div>

      <v-spacer></v-spacer> 
      <div id="nav" class="navigation-links">
        <router-link to="/" class="nav-link">ART</router-link> 
        <router-link to="/about" class="nav-link">ABOUT</router-link>
      </div>
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
    // ...
  }),
};
</script>

<style scoped>
.app-bar {
  background-color: #2C3E50;
  color: white;
}

.branding {
  display: flex;
  align-items: center;
}

.vue-logo {
  height: 40px; 
}

.vue-arts-name {
  color: black;
  margin-left: 10px;
  font-size: 1.2em;
  font-weight: 500;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.navigation-links {
  display: flex;
  align-items: center;
}

.nav-link {
  color: black;
  margin-left: 30px; 
  text-decoration: none;
  font-weight: 500;
  font-size: 1.4em; 
  padding-bottom: 5px; 
  border-bottom: 2px solid transparent; 
}

.nav-link:hover {
  color: #1ABC9C;
  border-bottom: 2px solid black; 
}


@media (max-width: 600px) {
  .nav-link {
    font-size: 1.1em; 
    margin-left: 15px; 
    border-bottom: 1px solid black; 
  }
}
</style>
