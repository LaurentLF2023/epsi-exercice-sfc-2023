<script>
import axios from "axios"
export default {
  data() {
    return {
      track: "",
    };
  },
  mounted() {
    this.fetchDeezerTrack();
  },
  methods: {
    async fetchDeezerTracks() {
      try {
        const trackId = "3135556";
        const response = await axios.get(`https://api.deezer.com/track/${trackId}`);

        // Mettez à jour le titre avec le titre récupéré depuis l'API Deezer
        this.track = response.data;
      } catch (error) {
        console.error('Erreur lors de la récupération du titre depuis Deezer', error);
      }
    },
  },
}
</script>

<template>
  <p>{{track}}</p>
</template>

<style scoped>

</style>