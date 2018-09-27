import tokenAuth from "./queries/login.gql";
import { login } from "./action-types";
import { apolloClient } from "@/apollo";
import { setToken } from "./mutation-types";
import { setCookies } from "@/helpers/browser";
import router from "@/router";

export default {
  [login]: async ({ commit }, payload) => {
    const { data } = await apolloClient.mutate({
      mutation: tokenAuth,
      variables: payload
    });

    commit(setToken, { tokenInfo: data.tokenAuth });
    setCookies(data.tokenAuth);
    router.push({ name: "home" });
  }
};
