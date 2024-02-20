<script>
import axios from "axios"
export default {
  data() {
    return {
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
        const trackId = "3135556";
        const response = await axios.get(`https://api.deezer.com/track/${trackId}`);

        // Mettez à jour le titre avec le titre récupéré depuis l'API Deezer
        this.titre = response.data.title;
        this.artist = response.data.artist;
        this.duration = response.data.duration;
      } catch (error) {
        console.error('Erreur lors de la récupération du titre depuis Deezer', error);
      }
    },
  },
}
</script>

<template>
  <p>{{titre}}</p>
  <p>{{artist.name}}</p>
  <p>{{duration}}</p>
</template>

<style scoped>

</style>