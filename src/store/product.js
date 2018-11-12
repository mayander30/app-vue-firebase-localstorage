import Vue from 'vue'
import Vuex from 'vuex'

import { db } from '../db/config.js';

import {
} from 'lodash-es'
Vue.use(Vuex);

export default new Vuex.Store({
  data() {
    return {
      beers: []
    }
  },
  state: {
    products: []
  },
  firebase: {
    beers: db.ref('beers')
  },
  getters: {
    alcoholicBeers(state, getters) {
      return state.products.filter(product => product.abv > 13)
    },
  },
  mutations: {
    setProducts(state, products) {
      // update products
      state.products = products
    },
  },
  actions: {
    fetchProducts({
      commit
    }) {
      var _self = this;

      db.ref('beers').orderByChild('abv').on("value", function(snapshot) {

        var arr = Object.values(snapshot.val());

        _self.beers = arr;
        commit('setProducts', _self.beers);
      });
    },
  }
});
