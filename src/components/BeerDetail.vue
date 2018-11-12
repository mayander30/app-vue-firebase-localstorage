<template>
<div>
<div class="text-xs-center">

    <v-dialog
      v-model="dialog"
      hide-overlay
      persistent
      width="300"
    >
      <v-card
        color="primary"
        dark
      >
        <v-card-text>
          Carregando item...
          <v-progress-linear
            indeterminate
            color="white"
            class="mb-0"
          ></v-progress-linear>
        </v-card-text>
      </v-card>
    </v-dialog>
</div>


  <v-btn fab dark color="teal" @click="$router.go(-1)">
    <v-icon dark>keyboard_backspace</v-icon>
  </v-btn>

  <!-- Adicionando o componente de card -->
  <v-card>
    <!-- Atualizando para melhoria visual -->
    <v-img
      :src="beer.image_url"
      aspect-ratio="1"
      height="200px"
      contain
    ></v-img>

    <v-card-title primary-title>
      <div>
        <h3 class="headline mb-0">{{beer.name}}</h3>
        <div>{{beer.tagline}}</div>
        <br/>
        <div><b>Descripton:</b> {{beer.description}}</div>

        <h4>Ingredientes</h4>
        <div v-for="(value, key) in beer.ingredients" :key="key">
            {{key}}
        </div>

      </div>
    </v-card-title>

    <v-card-actions>

      <v-btn dark color="success" v-on:click="addToCart(beer)">
        <v-icon dark>add_shopping_cart</v-icon> Adicionar ao Carrinho
      </v-btn>
    </v-card-actions>


  </v-card>

  </div>

</template>



<script>

import axios from "axios";
import router from '../router.js';
import store from "@/store/cart.js";
import { db } from '../db/config.js';

export default {
  mounted() {


  },
  data() {
    return {
      key: 0,
      beer: {},
      dialog: true
    };
  },
  created() {
    this.setBeers();
  },
  beforeMount(){

  },
  firebase: {
    beers: db.ref('beers'),
    beersObj: {
      source: db.ref('beers'),
      asObject: true,
       cancelCallback(err) {
          window.alert(err)
        }
    }
  },
  watch: {
    $route (to, from) {
      this.setBeers();
    },
    dialog (val) {
      if (!val) return
      setTimeout(() => (this.dialog = false), 4000)
    }
  },
  methods: {
    addToCart(beer) {
      store.commit("addToCart", beer);
    },
    setBeers(){
      this.beer = {};
      //this.dialog = false;
      var _self = this;

      db.ref('beers').orderByChild('id').equalTo(this.$route.params.id).on("child_added", function(snapshot) {
        const myObjStr = JSON.stringify(snapshot.val());
        var rl = JSON.parse(myObjStr);
        _self.beer = rl;
        _self.dialog = false;
      });
    }
  }
};
</script>

