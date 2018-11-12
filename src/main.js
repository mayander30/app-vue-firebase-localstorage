import '@babel/polyfill'
import Vue from 'vue'
import  './plugins/vuetify'
import Vuetify from 'vuetify'
import App from './App.vue'
import router from './router'
import store from './store'

import VueFire from 'vuefire'

Vue.use(VueFire);

Vue.use(Vuetify, {
  theme: {
    "primary": "#9e9e9e",
    "secondary": "#424242",
    "accent": "#82B1FF",
    "error": "#FF5252",
    "info": "#2196F3",
    "success": "#4CAF50",
    "warning": "#FFC107"
  }
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')



// render: function (createElement) {
//   return createElement(App);
// }
// ...
// render(createElement) {
//   return createElement(App);
// }
// ...
// render(h) {
//   return h(App);
// }
// ...
// render: h => h(App);
