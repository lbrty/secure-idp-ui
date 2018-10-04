import Vue from "vue";
import Vuex from "vuex";

// Store modules
import auth from "./auth";
import init from "./init";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth,
    init
  }
});
