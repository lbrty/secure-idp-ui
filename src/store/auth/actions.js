import { authenticate, verifyToken } from "@/graphql/auth";
import { checkToken, login } from "./action-types";
import { noop } from "@/helpers";

import { setUser, setCurrentUser } from "./mutation-types";

export default {
  [login]: (_, { loginInfo, cb = noop }) => {
    authenticate(loginInfo, ({ response, err }) => cb(response, err));
  },

  [setCurrentUser]: ({ commit }, user) => {
    commit(setUser, user);
  },

  /*
   * Verify token and redirect to login page
   * if it is invalid and cleanup localStorage
   */
  [checkToken]: (_, payload) => verifyToken(payload)
};
