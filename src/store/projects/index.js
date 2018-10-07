import state from "./initial-state";
import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
};
