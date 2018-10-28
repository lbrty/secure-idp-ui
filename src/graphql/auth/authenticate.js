import { apolloClient } from "@/apollo";
import { waiter } from "@/helpers/asyncHelper";
import i18n from "@/locale";
import tokenAuth from "./queries/login.gql";
import { makeError } from "@/helpers/errorHandler";
import { setupSession } from "@/helpers/browser";

/**
 * Authenticate user and if credentials are valid then
 * delegate control to callback function else raise
 * related error if there is a network issue
 * then raise and exception for network problems.
 * This function also sets all necessary cookie values
 * and obtained token in browsers.
 * @param {Object} payload credentials (email, passowrd)
 * @param {Function} cb callback function
 */
export default async function authenticate(payload, cb) {
  let authData = {};

  const [err, response] = await waiter(
    apolloClient.mutate({
      mutation: tokenAuth,
      variables: payload
    })
  );

  if (response !== null) {
    authData = setupSession(response.data || {});
  }

  cb({
    authData,
    response,
    err: makeError(err, i18n.t("login.loginError"))
  });
}
