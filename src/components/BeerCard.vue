<template>
  <!-- Adicionando o componente de card -->


  <v-card color="cyan blue-grey" class="white--text">
    <v-layout>
      <v-flex xs5>
        <v-img
          :src="beer.image_url"
          height="125px"
          contain
        ></v-img>
      </v-flex>
      <v-flex xs7>
        <v-card-title primary-title>
          <div>
            <div class="headline">{{beer.name}}</div>
            <div>{{beer.tagline}}</div>
          </div>
        </v-card-title>
      </v-flex>
    </v-layout>
    <v-divider light></v-divider>
    <v-card-actions class="pa-3">

      <v-btn fab dark small color="success" v-on:click="addToCart(beer)">
        <v-icon dark>add_shopping_cart</v-icon>
      </v-btn>

      <v-btn fab dark small color="primary"
          :to="{name: 'BeerDetail', params: { id: beer.id }}">
        <v-icon dark>info</v-icon>
      </v-btn>

      <v-spacer></v-spacer>

    </v-card-actions>

    </v-card>

</template>

<script>
import store from "@/store/cart.js";

export default {
  //Recebendo a prop beer
  props: ["beer"],
  data() {
    return { };
  },

  methods: {
    addToCart(beer) {
      store.commit("addToCart", beer);
    }
  }
};
</script>

