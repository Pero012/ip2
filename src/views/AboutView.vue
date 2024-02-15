<template>
  <v-container class="about-page">
    <v-row justify="center" align="center" class="about-content">
      <v-col cols="12" sm="10" md="8">
        <h1 class="title">O projektu</h1>
        <p class="description">
          Projekt napravljen u sklopu kolegija "Informatički projekt 2" koristeći Vue.js, Vuetify i <a href="https://api.artic.edu/docs/" target="_blank">The Art Institute of Chicago API </a>  za dohvaćanje podataka.
        </p>
        <p class="description">
          Aplikacija omogućuje pregled svih imena djela, umjetnika i njihovo porijeklo koji su pohranjeni u ovoj bazi podataka.
        </p>
       
        <p class="description">
          Kod se može pronaći na <a href="https://github.com/Pero012/ip2" target="_blank">GitHub</a>.
        </p>
        <p class="description">
          Made by students: Petar Ereš i Jure Tolić
        </p>
        <v-btn color="primary" @click="goBack">Idi nazad</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'AboutPage',
  methods: {
    goBack() {
      this.$router.go(-1); 
    }
  }
};
</script>

<style scoped>
.about-page {
  padding: 40px;
  min-height: 100vh;
  background-color: #f5f5f5; 
}

.about-content {
  text-align: center;
}

.title {
  margin-bottom: 20px;
  font-size: 4em; /* Further increased font size */
  font-weight: bold; /* Make the title bold */
  color: #2C3E50;
}
.description {
  font-size: 1.2em;
  color: #34495E;
  margin-bottom: 20px;
  line-height: 1.6;
}

/* Button styling */
.v-btn {
  margin-top: 20px;
}
</style>
