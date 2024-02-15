<template>
  <v-app id="inspire">
    <v-app-bar class="app-bar">
      <div class="branding">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/2367px-Vue.js_Logo_2.svg.png" alt="Vue logo" class="vue-logo" />
        <span class="vue-arts-name">VUEArts</span>
      </div>

      <v-spacer></v-spacer> <!-- Spacer to push navigation links to the right -->

      <div id="nav" class="navigation-links">
        <router-link to="/" class="nav-link">ART</router-link> <!-- Updated text -->
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
  height: 40px; /* Adjust the size as needed */
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
  margin-left: 30px; /* Increased spacing between links */
  text-decoration: none;
  font-weight: 500;
  font-size: 1.4em; /* Larger font size for the links */
  padding-bottom: 5px; /* Padding for the underline */
  border-bottom: 2px solid transparent; /* Transparent border for a consistent line height */
}

.nav-link:hover {
  color: #1ABC9C;
  border-bottom: 2px solid black; /* Underline on hover */
}

/* Responsive styling */
@media (max-width: 600px) {
  .nav-link {
    font-size: 1.1em; /* Adjust font size on smaller screens */
    margin-left: 15px; /* Adjust spacing on smaller screens */
    border-bottom: 1px solid black; /* Thinner underline for mobile */
  }
}
</style>
