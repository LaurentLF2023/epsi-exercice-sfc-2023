<script>
import axios from "axios"

export default {
  data() {
    return {
      tracks: [],
      titre: "",
      artist: "",
      duration: "",
    };
  },
  mounted() {
    this.fetchDeezerTrack();
  },
  methods: {
    async fetchDeezerTrack() {
      try {
        const trackIds = ["3135556", "3135557", "3135558"];
        const requests = trackIds.map((trackId) => axios.get(`https://api.deezer.com/track/${trackId}`));
        const responses = await Promise.all(requests);

        this.tracks = responses.map((response) => response.data)
        this.titre = responses.map((response) => response.data.title);
        this.artist = responses.map((response) => response.data.artist);
        this.duration = responses.map((response) => response.data.duration);
      } catch (error) {
        console.error('Erreur lors de la récupération du titre depuis Deezer', error);
      }
    },
  },
}
</script>

<template>
  <div v-for="track in tracks" :key="track.id" class="">
    <p>{{ track.title }}</p>
    <p>{{ track.artist.name }}</p>
    <p>{{ track.duration }}</p>
  </div>
</template>

<style scoped>

</style>