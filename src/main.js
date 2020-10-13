import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";
import Routes from "./Routes";

export const EventBus = new Vue();

// Installed numeral.js to help with number formatting
var numeral = require("numeral");

Vue.filter("formatNumber", function (value) {
  return numeral(value).format("0,0"); // displaying other groupings/separators is possible, look at the docs
});

Vue.config.productionTip = false
Vue.use(VueRouter);


const router = new VueRouter({
  routes:Routes,
  mode:"history"
});

new Vue({
  render: h => h(App),
  router:router
}).$mount('#app')
