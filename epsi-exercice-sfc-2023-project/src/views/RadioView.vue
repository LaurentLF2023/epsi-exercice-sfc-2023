<template>
  <div class="card">
    <RouterLink to="/">Home</RouterLink>
    <h1>Radios</h1>
    <RadioComponent />
  </div>
</template>

<script>
import RadioComponent from "@/components/RadioComponent.vue";

export default {
  name: 'RadioCard',
  components: {RadioComponent},
  data() {
    return {

    }
  }
}

</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
