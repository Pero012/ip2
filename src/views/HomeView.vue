<template>
  <v-container>
        <v-row>
          <v-col
            v-for="n in 24"
            :key="n"
            cols="4"
          >
            <v-card height="200"></v-card>
          </v-col>
        </v-row>
      </v-container>
</template>

<script>
  //import HelloWorld from '../components/HelloWorld'

  export default {
    name: 'HomeView',

    //components: {
      //HelloWorld,
    //},
  }
</script>
