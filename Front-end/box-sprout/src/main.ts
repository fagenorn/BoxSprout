import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./registerServiceWorker";

import Buefy from "buefy";

import axios from "@/models/axios";
import VueAxios from "vue-axios";

import User from "@/models/user";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faSignInAlt,
  faSignOutAlt,
  faEnvelope,
  faLock,
  faUser
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faSignInAlt);
library.add(faSignOutAlt);
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

User.initialize();
