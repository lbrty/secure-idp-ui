import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import apolloProvider from "./apollo";
import i18n from "./locale";
import "./registerServiceWorker";

Vue.config.productionTip = false;

new Vue({
  i18n,
  apolloProvider,
  router,
  store,
  render: h => h(App)
}).$mount("#app");
