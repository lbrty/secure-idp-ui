import Vue from "vue";
import iView from "iview";
import Viser from "viser-vue";

import App from "./App.vue";
import router from "./router";
import store from "./store";
import apolloProvider from "./apollo";
import i18n from "./locale";
import { handleError } from "./helpers/errorHandler";
import registerComponents from "./components/register";

import "./registerServiceWorker";

Vue.use(Viser);
Vue.use(iView, {
  transfer: true
});

registerComponents();

Vue.config.errorHandler = handleError;
Vue.config.productionTip = false;

new Vue({
  i18n,
  apolloProvider,
  router,
  store,
  render: h => h(App)
}).$mount("#app");
