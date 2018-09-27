import { setToken, setUser } from "./mutation-types";

export default {
  [setToken](state, { token }) {
    state.token = token;
  },

  [setUser](state, { user }) {
    state.user = user;
  }
};
