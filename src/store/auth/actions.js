import tokenAuth from "./queries/login.gql";
import { login } from "./action-types";
import { apolloClient } from "@/apollo";

export default {
  [login]: async ({ commit }) => {
    const { data } = await apolloClient.query({ query: tokenAuth });
    commit("saveToken", { tokenInfo: data.tokenAuth });
  }
};
