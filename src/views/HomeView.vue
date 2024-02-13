<template>
  <v-container>
        <v-row>
          <v-col
            v-for="djelo in djela"
            :key="djelo.title"
            cols="12"
            md="4"
          >
            <v-card height="150">
              {{ djelo.title }}
            </v-card>
          </v-col>
        </v-row>
      </v-container>
</template>

<script>
  //import HelloWorld from '../components/HelloWorld'
  import axios from 'axios';
  export default {
  name: 'HomeView',

  data() {
    return {
      djela: [],
    }
  },
  created() {
    console.log('created');
    this.getData(); // Corrected to call the method
  },

  methods: {
    getData() {
      let api = 'https://api.artic.edu/api/v1/artworks';
      
      axios.get(api).then((response) => {
        console.log(response.data);
        this.djela = response.data.data;
      }).catch((error) => {
        console.error("Error fetching data: ", error);
      });
    }
  }
}
</script>
