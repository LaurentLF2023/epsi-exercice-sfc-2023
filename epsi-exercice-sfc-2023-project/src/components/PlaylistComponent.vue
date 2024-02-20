<template>
  <div>
    <form @submit.prevent="createPlaylist">
      <input type="text" v-model="playlistName" placeholder="Enter playlist name" required>
      <button type="submit">Create Playlist</button>
    </form>
  </div>
</template>

<script setup>
export default {
  data() {
    return {
      playlistName: '',
    };
  },
}
</script>



<style scoped>

</style>