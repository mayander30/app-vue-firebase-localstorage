<template>
  <v-container fluid>

    <!-- Nosso primeiro componente -->
    <Login />

  </v-container>
</template>

<script>
// Importação do componente
import Login from "../components/Login.vue";

export default {
  // Registro do componente
  components: {
    Login
  }
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
