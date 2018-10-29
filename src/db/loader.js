import axios from "axios";
// Como padrão, importamos nosso componente de card.
import BeerCard from "../components/BeerCard.vue";

import { db } from '../db/config.js';

export default {
  mounted() {
    axios
      .get("https://api.punkapi.com/v2/beers?brewed_before=11-2012&abv_gt=6")
      .then(response => (this.beers = response.data));
  },
  firebase: {
    beers: db.ref('beers')
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
    addAllItens(){
      for(var i =0; i<this.beers.length; i++){
          this.$firebaseRefs.beers.push(this.beers[i]);
      }
    }
  }
};
