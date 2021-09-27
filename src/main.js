import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
Vue.component("font-awesome-icon", FontAwesomeIcon)

import "./index.css";

import Vuelidate from "vuelidate";
import i18n from './i18n'
Vue.use(Vuelidate);

Vue.config.productionTip = false;

new Vue({
  el: "#app",
  router,
  store,
  i18n,
  render: (h) => h(App)
}).$mount("#app");
