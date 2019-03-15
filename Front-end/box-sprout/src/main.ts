import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./registerServiceWorker";

import axios from "@/models/axios";
import VueAxios from "vue-axios";

import Loading from "vue-loading-overlay";

import User from "@/models/user";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faSignInAlt } from "@fortawesome/free-solid-svg-icons/faSignInAlt";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons/faSignOutAlt";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons/faEnvelope";
import { faLock } from "@fortawesome/free-solid-svg-icons/faLock";
import { faUser } from "@fortawesome/free-solid-svg-icons/faUser";
import { faGlobe } from "@fortawesome/free-solid-svg-icons/faGlobe";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faSignInAlt, faSignOutAlt, faEnvelope, faLock, faUser, faGlobe);

Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.component("loading", Loading);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");

Vue.use(VueAxios, axios);

User.initialize();
