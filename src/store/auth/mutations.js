import { setToken } from "./mutation-types";

export default {
  [setToken](state, { tokenInfo }) {
    state.token = tokenInfo.token;
    localStorage.setItem("token", tokenInfo.token);
  }
};
