import { setUser, setToken } from "./mutation-types";

export default {
  [setUser]: (state, user) => {
    state.user = user;
  },

  [setToken]: (state, token) => {
    state.token = token;
  }
};
