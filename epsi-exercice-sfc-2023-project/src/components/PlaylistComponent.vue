<template>
  <div>
    <form @submit.prevent="createPlaylist">
      <input type="text" v-model="playlistName" placeholder="Enter playlist name" required>
      <button type="submit">Create Playlist</button>
    </form>
  </div>
</template>


<script setup>
import { ref, emit } from 'vue';

const playlistName = ref('');

const createPlaylist = () => {
  emit('playlist-created', playlistName.value);
  playlistName.value = '';
}
</script>

<style scoped>

.form-container {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.input-field {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.submit-button {
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.submit-button:hover {
  background-color: #0056b3;
}
</style>