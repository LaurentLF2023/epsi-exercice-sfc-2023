<script>
import axios from "axios"
const artistById =  "https://api.deezer.com/artist/"
export default {
  data() {
    return {
      artists: [],
      name: "",
      nbAlbum: "",
    };
  },
  mounted() {
    this.fetchArtists();
  },
  methods: {
    async fetchArtists() {
      try {
        const artistIds = ["1", "2", "3"];
        const requests = artistIds.map((id) => axios.get(artistById+id));
        const responses = await Promise.all(requests);

        this.artists = responses.map((response) => response.data)
        this.name = responses.map((response) => response.data.name);
        this.nbAlbum = responses.map((response) => response.data.nb_album);
      } catch (error) {
        console.error('Erreur lors de la récupération du titre depuis Deezer', error);
      }
    },
  },
}
</script>

<template>
  <div id="demo">
    <h1> Liste des artistes : </h1>
      <li v-for="artist in artists">
          {{ artist.name }}
        <img src="{{artist.picture}}">
      </li>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
