import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./registerServiceWorker";

import Buefy from "buefy";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faSignInAlt);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");

Vue.use(Buefy);
