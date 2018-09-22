import tokenAuth from "./queries/login.gql";
import { login } from "./action-types";
import { apolloClient } from "@/apollo";

export default {
  [login]: async ({ commit }, payload) => {
    const { data } = await apolloClient.matate({
      mutation: tokenAuth,
      variables: payload
    });

    commit("saveToken", { tokenInfo: data.tokenAuth });
  }
};
