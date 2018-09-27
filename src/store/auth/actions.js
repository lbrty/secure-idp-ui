import { apolloClient } from "@/apollo";
import { checkToken, login } from "./action-types";
import { setToken, setUser } from "./mutation-types";
import { setCookies } from "@/helpers/browser";
import router from "@/router";
import tokenAuth from "./queries/login.gql";

export default {
  [login]: async ({ commit }, payload) => {
    const { data } = await apolloClient.mutate({
      mutation: tokenAuth,
      variables: payload
    });

    // Commit initial user info
    const { token, user } = data.tokenAuth;
    commit(setToken, { token });
    commit(setUser, { user });

    // Setup session for user and
    // redirect to homepage
    setCookies(token);
    localStorage.setItem("token", token);
    router.push({ name: "home" });
  },

  /*
   * Check if token exists in ``localStorage``
   * and if it exists then copy it into state
   */
  [checkToken]({ commit }) {
    if (!localStorage.getItem("token")) {
      // TODO:
      // if no token
      // then verify token
      // if invalid token
      // then redirect to login page
    }
  }
};
