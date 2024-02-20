<template>
  <div>
    <div class="card" v-for="(radio, index) in radioDetails" :key="index">
      <h1>{{ radio.title }}</h1>
      <a :href="radio.tracklist" target="_blank">Tracklist</a>
      <div class="image">
        <img :src="radio.image" alt="Image radio">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RadioCard',
  // props: {
  //   radios: {
  //     type: Array,
  //     required: true
  //   }
  // },
  data() {
    return {
      radioDetails: [],
      radios: [37151, 36491, 165, 1501],
    }
  },
  methods: {
    async getRadioDetails() {
      this.radioDetails = [];
      for (let radioId of this.radios) {
        let apiUrl = `https://api.deezer.com/radio/${radioId}`;
        try {
          const response = await fetch(apiUrl);
          const data = await response.json();
          const radioInfo = {
            title: data.title,
            tracklist: data.tracklist,
            image: data.picture_big
          };
          this.radioDetails.push(radioInfo);
          console.log(data)
        } catch (error) {
          console.error(error);
        }
      }
    }
  },
  created() {
    this.getRadioDetails();
  }
  // watch: {
  //   radios: {
  //     handler() {
  //       this.getRadioDetails();
  //     },
  //     deep: true,
  //     immediate: true
  //   }
  // }
}
</script>

<style scoped>
.card {
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  margin-bottom: 20px; /* Ajoute de l'espace entre les cartes */
  padding: 20px;

}

.image {
  margin: 20px;
}

.card img {
  width: 100%;
  height: auto;
}
</style>
