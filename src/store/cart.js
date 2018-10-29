import Vue from 'vue'
import Vuex from 'vuex'

import VuexPersist from 'vuex-persist'

import {
  findIndex
} from 'lodash-es'
Vue.use(Vuex)

const vuexPersist = new VuexPersist({
  key: 'appbeers',
  storage: localStorage
})

export default new Vuex.Store({
  plugins: [vuexPersist.plugin],
  state: {
    beers: [],
    qty: 0
  },
  mutations: {

    addToCart(state, beer) {

      let index = findIndex(state.beers, (o) => o.id == beer.id)

      if (index === -1) {
        state.beers.push({
          key: beer['.key'],
          id: beer.id,
          name: beer.name,
          price: 2.5,
          quantity: 1,
          image_url: beer.image_url
        })
      } else {
        state.beers[index].quantity++;
      }

    },
    AddQtdeCartItem(state, beer){
      let index = findIndex(state.beers, (o) => o.id == beer.id);
      state.beers[index].quantity++;
    },
    RemoveQtdeCartItem(state, beer){
      let index = findIndex(state.beers, (o) => o.id == beer.id);

      if(state.beers[index].quantity == 1){
        state.beers.splice(index, 1);
      }else{
        state.beers[index].quantity--;
      }
    },
    removeItemCart(state, beer){
      let index = findIndex(state.beers, (o) => o.id == beer.id);

      state.beers.splice(index, 1);

    }
  },
  actions: {

  }
})
