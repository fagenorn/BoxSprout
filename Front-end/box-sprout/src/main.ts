import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./registerServiceWorker";

import Buefy from "buefy";

import axios from "./axios";
import VueAxios from "vue-axios";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faSignInAlt,
  faEnvelope,
  faLock,
  faUser
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faSignInAlt);
library.add(faEnvelope);
library.add(faLock);
library.add(faUser);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");

Vue.use(VueAxios, axios, Buefy);
