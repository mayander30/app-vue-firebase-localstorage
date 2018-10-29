<template>
  <v-container fluid>

    <!-- Nosso primeiro componente -->
    <Checkout />

  </v-container>
</template>

<script>
// Importação do componente
import Checkout from "../components/Checkout.vue";

export default {
  // Registro do componente
  components: {
    Checkout
  }
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
