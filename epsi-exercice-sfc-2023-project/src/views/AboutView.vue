<template>
  <div class="card">
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
