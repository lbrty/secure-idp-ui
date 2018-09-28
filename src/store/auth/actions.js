import { apolloClient } from "@/apollo";
import { setCookies } from "@/helpers/browser";
import router from "@/router";
import { toLoginPage, mayBeCheckIn } from "@/router/util";
import { checkToken, login } from "./action-types";
import { setUser } from "./mutation-types";
import tokenAuth from "./queries/login.gql";
import verifyToken from "./queries/verify-token.gql";

export default {
  [login]: async ({ commit }, payload) => {
    const { data } = await apolloClient.mutate({
      mutation: tokenAuth,
      variables: payload
    });

    // Commit initial user info
    const { token, user } = data.tokenAuth;
    commit(setUser, { user });

    // Setup session for user and
    // redirect to homepage
    setCookies(token);
    localStorage.setItem("token", token);
    router.push({ name: "home" });
  },

  /*
   * Verify token and redirect to login page
   * if it is invalid and cleanup localStorage
   */
  [checkToken]: (_, { token, isLoginPage }) => {
    if (token) {
      // If token exists
      // Then verify token
      apolloClient
        .mutate({
          mutation: verifyToken,
          variables: { token }
        })
        .then(mayBeCheckIn) // Update check-in time
        .catch(_ => {
          // If invalid token
          // Then redirect to login page
          if (!isLoginPage) {
            toLoginPage(router);
          }
        });
    } else {
      // If no token
      // Then cleanup storage
      // And redirect to login page
      if (!isLoginPage) {
        toLoginPage(router);
      }
    }
  }
};
