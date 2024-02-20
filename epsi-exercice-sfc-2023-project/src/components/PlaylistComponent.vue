<template>
  <div>
    <form @submit.prevent="createPlaylist">
      <input type="text" v-model="playlistName" placeholder="Enter playlist name" required>
      <button type="submit">Create Playlist</button>
    </form>
  </div>
</template>

<script setup>
import axios from "axios";

export default {
  data() {
    return {
      playlistName: '',
    };
  },
  methods: {
    createPlaylist() {
      this.$emit('playlist-created', this.playlistName);
      this.playlistName = '';
    },
    searchTracks(query) {
      const apiUrl = 'https://api.deezer.com/search?q=${query}&limit=10&type=track';
      axios.get(apiUrl)
          .then(response => {
            const tracks = response.data.data;
          })
          .catch(error => {
            console.error('Error searching for tracks:', error);
          });
    },
  },
};
</script>

<style scoped>

</style>