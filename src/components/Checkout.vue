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
            <router-link :to="{name: 'BeerDetail', params: { id: beer.id }}">{{ beer.name }}</router-link>
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

        <v-list-tile-action>

          <v-btn flat fab dark color="teal" v-on:click="removeItemCart(beer)">
            <v-icon color="grey lighten-1">remove_shopping_cart</v-icon>
          </v-btn>
        </v-list-tile-action>
      </v-list-tile>

      <v-divider inset></v-divider>

    </v-list>

    <v-chip label color="success" text-color="white">
      <v-icon left>attach_money</v-icon>TOTAL: {{totalRequest}}
    </v-chip>

    <v-chip label color="red" text-color="white">
      <v-icon left>attach_money</v-icon>DESC: {{totalDiscount}}
    </v-chip>

    <v-chip label color="success" text-color="white">
      <v-icon left>attach_money</v-icon>TOTAL COM DESC: {{totalRequest-totalDiscount}}
    </v-chip>

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
    },
  },
  data: { totalDiscount: 0 },
  created(){
      this.updatePromo();
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
    },
    updatePromo(){
      if(store.state.beers.length >= 10){
        this.totalDiscount = (this.totalRequest / 100) * 10;
      }else{
        this.totalDiscount = 0;
      }
    }
  },
  watch:{
    totalRequest: function () {
      this.updatePromo();
    }

  }
};
</script>
