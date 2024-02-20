<script setup>

const artistsId= [1, 2, 3];
const required= true;

const artistById =  "https://api.deezer.com/artist/"

let artists = [];


const artist = (artistId => {
  artistId.forEach((elem) => {
    fetch(artistById + elem, {
      method: "GET",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      }
    }).then(response => {
      console.log(response.json())
      return artists.add(response.json())
    })
  })
});

artist(artistsId);

</script>

<template>
  <div id="demo">
    <h1> Liste des artistes : </h1>
      <li v-for="artist in artists">
          {{ artist.name }}
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
