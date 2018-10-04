import { authenticate, verifyToken } from "@/graphql/auth";
import { checkToken, login } from "./action-types";
import { noop } from "@/helpers";

import { setUser } from "./mutation-types";

export default {
  [login]: ({ commit }, { loginInfo, cb = noop }) => {
    authenticate(loginInfo, ({ user, response, err }) => {
      cb(response, err);
      commit(setUser, { user });
    });
  },

  /*
   * Verify token and redirect to login page
   * if it is invalid and cleanup localStorage
   */
  [checkToken]: (_, payload) => {
    verifyToken(payload);
  }
};
