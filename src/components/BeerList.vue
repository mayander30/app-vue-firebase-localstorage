<template>
  <div>
    <v-container grid-list-md>
      <v-layout row wrap>
        <!-- Laço com os dados de cervejas -->
        <!-- Notem que usamos a id devido ao object observer -->
        <v-flex v-for="beer in alcoholicBeers" :key="beer.id" xs4>
          <!-- Passamos a prop com a nossa cerveja específica para ser renderizada no card. -->
          <BeerCard :beer="beer" />
        </v-flex>

      </v-layout>
    </v-container>
  </div>


</template>

<script>
// Como padrão, importamos nosso componente de card.
import BeerCard from "../components/BeerCard.vue";
import store from "@/store/product.js";

import { mapState, mapGetters, mapActions } from "vuex";

export default {
  computed: {
   alcoholicBeers() {
      return store.getters.alcoholicBeers;
    },

    // ...mapState({
    //   products: state => state.products
    // }),

    // ...mapGetters(['alcoholicBeers', 'bitterBeers'])
  },

  data() {
    return {
      // Criamos um dado para fazer o storage das nossas cervejas
      beers: []
    };
  },

  components: {
    // Como padrão, registramos o componente
    BeerCard
  },

  methods: {
    // ...mapActions({
    //   fetchProducts: 'fetchProducts'
    // })
  },

  created(){
   // this.fetchProducts();
    store.dispatch('fetchProducts');
  }

};
</script>
