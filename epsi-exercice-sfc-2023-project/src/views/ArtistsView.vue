<script setup>
  import Artists from '../components/Artists.vue';
</script>

<template>
    <div class="artist">
        <h1>Liste de mes artistes préférés :</h1>
        <Artists></Artists>
    </div>
</template>

<style>
    @media (min-width: 1024px){
    .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
}
}
</style>
