import { authenticate, verifyToken } from "@/graphql/auth";
import { checkToken, login } from "./action-types";
import { setToken } from "./mutation-types";
import { noop } from "@/helpers";

import { setUser, setCurrentUser } from "./mutation-types";

export default {
  /**
   * @param {loginInfo} Object containing username and password
   * @param {cb} Function callback function called with auth data
   */
  [login]: ({ commit }, { loginInfo, cb = noop }) => {
    authenticate(loginInfo, ({ response, err }) => {
      cb(response, err);

      if (!err && response.data) {
        commit(setToken, response.data.tokenAuth.token);
      }
    });
  },

  [setCurrentUser]: ({ commit }, user) => commit(setUser, user),

  /*
   * Verify token and redirect to login page
   * if it is invalid and cleanup localStorage
   */
  [checkToken]: (_, payload) => verifyToken(payload)
};
