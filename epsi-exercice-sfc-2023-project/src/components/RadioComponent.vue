<template>
  <div>
    <div class="card" v-for="(radio, index) in radioDetails" :key="index">
      <h1>{{ radio.title }}</h1>
      <p>{{ radio.description }}</p>
      <img :src="radio.image" alt="Image radio">
      <p>pouete</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RadioCard',
  data() {
    return {
      radioDetails: [],
      radios: [37151, 30771, 41782, 31061],
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
            description: `Some description for ${data.title}`, // Ajustez selon les données disponibles
            image: data.picture_medium // Ou une autre clé d'image selon l'API
          };
          this.radioDetails.push(radioInfo);
        } catch (error) {
          console.error(error);
        }
      }
    }
  },
  created() {
    this.getRadioDetails();
  }
}
</script>

<style scoped>
.card {
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  margin-bottom: 20px; /* Ajoute de l'espace entre les cartes */
  padding: 20px;
}

.card img {
  width: 100%;
  height: auto;
}
</style>
