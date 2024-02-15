<template>
  <v-container>
    <v-row class="mb-5">
      <v-col cols="12">
        <v-text-field 
          v-model="searchQuery" 
          label="Search Artworks" 
          outlined
          dense
          solo-inverted
          append-icon="mdi-magnify"
          @input="handleSearchInput"
          @click:append="searchArtworks"
          @keyup.enter="searchArtworks"
        ></v-text-field>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" class="text-right">
        <v-btn color="primary" @click="showAddArtworkDialog = true">Add Artwork</v-btn>
      </v-col>
    </v-row>

    <v-row v-if="loading" class="my-5">
      <v-col cols="12" class="text-center">
        <v-progress-circular indeterminate></v-progress-circular>
      </v-col>
    </v-row>

    <v-row v-if="!loading && artworks.length === 0" class="my-5">
      <v-col cols="12" class="text-center">
        <span class="no-artworks-message">No artworks found.</span>
      </v-col>
    </v-row>

    <v-row>
      <v-col
        v-for="artwork in artworks"
        :key="artwork.id"
        cols="12"
        md="4"
      >
        <v-card class="mx-auto my-2" outlined elevation="2">
          <v-card-title>{{ artwork.title }}</v-card-title>
          <v-card-subtitle>{{ artwork.place_of_origin }}</v-card-subtitle>
          <v-card-text>{{ artwork.artist_display }}</v-card-text>
          <v-card-actions>
          <v-btn color="primary" @click="openImageDialog(artwork.image_id)">IMAGE</v-btn>
        </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    
  
  <v-dialog v-model="imageDialog" max-width="600px">
    <v-img :src="selectedImageUrl" contain></v-img>
  </v-dialog>

    <v-row v-if="artworks.length > 0" class="my-5">
      <v-col cols="12">
        <v-pagination
          v-model="currentPage"
          :length="totalPages"
          circle
          class="elevation-1"
          total-visible="6"
        ></v-pagination>
      </v-col>
    </v-row>

    
    <v-dialog v-model="showAddArtworkDialog" max-width="600px">
      <v-card>
        <v-card-title>Add New Artwork</v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field v-model="newArtwork.title" label="Title" required></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field v-model="newArtwork.artist_display" label="Artist Display" required></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field v-model="newArtwork.place_of_origin" label="Place of Origin"></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="showAddArtworkDialog = false">Cancel</v-btn>
          <v-btn color="green darken-1" text @click="submitNewArtwork">Submit</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    
    <v-snackbar
      v-model="showSnackbar"
      :timeout="snackbarTimeout"
      color="success"
      top
    >
      Artwork added successfully!
      <v-btn color="white" text @click="showSnackbar = false">Close</v-btn>
    </v-snackbar>
  </v-container>
</template>

<script>
import axios from 'axios';

export default {
  name: 'HomeView',

  data() {
    return {
      artworks: [],
      currentPage: 1,
      totalArtworks: 0,
      artworksPerPage: 20,
      totalPages: 0,
      searchQuery: '',
      loading: false,
      debounceTimeout: null,
      showAddArtworkDialog: false,
      newArtwork: {
        title: '',
        artist_display: '',
        place_of_origin: ''
      },
      showSnackbar: false,
      snackbarTimeout: 3000,
      imageDialog: false,
      selectedImageUrl: '',
      
      iiifBaseURL: 'https://www.artic.edu/iiif/2',
    }
  },

  created() {
    this.fetchArtworks();
  },

  methods: {
    handleSearchInput() {
      clearTimeout(this.debounceTimeout);
      this.debounceTimeout = setTimeout(() => {
        this.searchArtworks();
      }, 500);
    },

    fetchArtworks() {
      this.loading = true;
      let api = this.searchQuery 
        ? `https://api.artic.edu/api/v1/artworks/search?q=${encodeURIComponent(this.searchQuery)}&page=${this.currentPage}&limit=${this.artworksPerPage}`
        : `https://api.artic.edu/api/v1/artworks?page=${this.currentPage}&limit=${this.artworksPerPage}`;

      axios.get(api).then((response) => {
        this.artworks = response.data.data;
        this.totalArtworks = response.data.pagination.total;
        this.totalPages = Math.ceil(this.totalArtworks / this.artworksPerPage);
      }).catch((error) => {
        console.error("Error fetching data: ", error);
      }).finally(() => {
        this.loading = false;
      });
    },

    searchArtworks() {
      this.currentPage = 1;
      this.fetchArtworks();
    },

    submitNewArtwork() {
      console.log("New Artwork Data:", this.newArtwork);
      
      this.showSnackbar = true; 
      this.resetAddArtworkForm();
      this.showAddArtworkDialog = false;
    },
    openImageDialog(image_id) {
      this.selectedImageUrl = `${this.iiifBaseURL}/${image_id}/full/843,/0/default.jpg`;
      this.imageDialog = true;
    },

    resetAddArtworkForm() {
      this.newArtwork = {
        title: '',
        artist_display: '',
        place_of_origin: ''
      };
    }
  },

  watch: {
    currentPage: function(newPage, oldPage) {
      if (newPage !== oldPage) {
        this.fetchArtworks();
      }
    }
  }
}
</script>

<style scoped>
.no-artworks-message {
  color: #757575;
  font-size: 1.2em;
}

.v-card {
  transition: all 0.3s ease;
  cursor: pointer;
}

.v-card:hover {
  transform: scale(1.02);
}
</style>
