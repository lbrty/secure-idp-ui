import { apolloClient } from "@/apollo";
import { toLoginPage, mayBeCheckIn } from "@/router/util";
import router from "@/router";
import verifyQuery from "./queries/verify-token.gql";

export default function verifyToken({ token, isLoginPage }) {
  if (token) {
    // If token exists
    // Then verify token
    apolloClient
      .mutate({
        mutation: verifyQuery,
        variables: { token }
      })
      .then(mayBeCheckIn) // Update check-in time
      .catch(_ => {
        // If invalid token
        // Then redirect to login page
        console.log(_);
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
