<template>

  <v-container>
  <v-list two-line subheader>
    <v-subheader inset>Shopping Cart</v-subheader>

    <v-list-tile
      v-for="beer in beers"
      :key="beer.id"
      avatar
    >

      <v-list-tile-avatar >
        <img :src="beer.image_url">
      </v-list-tile-avatar>
      <v-list-tile-content>
        <v-list-tile-title >
          <router-link :to="{name: 'BeerDetail', params: { id: beer.key}}">{{ beer.name }}</router-link>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <a href="#" v-on:click="removeItemCart(beer)">
            <v-icon>remove_shopping_cart</v-icon>
          </a>
        </v-list-tile-title>

        <v-list-tile-sub-title>Qtde:

          <v-btn flat icon color="red" v-on:click="removeQtdeCart(beer)">
            <v-icon>remove</v-icon>
          </v-btn>

          {{ beer.quantity }}

          <v-btn flat icon color="green" v-on:click="addQtdeCart(beer)">
              <v-icon>add</v-icon>
          </v-btn>

        </v-list-tile-sub-title>
      </v-list-tile-content>




    </v-list-tile>

    <v-divider inset></v-divider>



  </v-list>
    <v-chip label color="success" text-color="white">
      <v-icon left>attach_money</v-icon>TOTAL: {{totalRequest}}
    </v-chip>

    <v-btn flat  dark color="teal" :to="{name: 'Checkout'}">
          <v-icon color="grey lighten-1">money</v-icon> Checkout
        </v-btn>
    </v-container>
</template>


<script>
import store from "@/store/cart.js";

export default {
  computed: {
    beers() {
      return store.state.beers;
    },
    totalRequest() {
      return store.state.beers.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    }
  },
  methods: {
    addQtdeCart(beer) {
      store.commit("AddQtdeCartItem", beer);
    },
    removeQtdeCart(beer) {
      store.commit("RemoveQtdeCartItem", beer);
    },
    removeItemCart(beer){
      store.commit("removeItemCart", beer);
    }
  }
};
</script>
