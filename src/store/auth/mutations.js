import { setUser } from "./mutation-types";

export default {
  [setUser](state, { user }) {
    state.user = user;
  }
};
