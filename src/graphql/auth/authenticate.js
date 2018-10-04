import { apolloClient } from "@/apollo";
import { setCookies } from "@/helpers/browser";
import { waiter } from "@/helpers/asyncHelper";
import i18n from "@/locale";
import tokenAuth from "./queries/login.gql";

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
  let user = {};
  let exc = null;

  const networkError = i18n.t("errorMessages.networkError");
  const [err, response] = await waiter(
    apolloClient.mutate({
      mutation: tokenAuth,
      variables: payload
    })
  );

  if (response) {
    const data = response.data || {};
    const token = data.tokenAuth.token;
    user = data.tokenAuth.user;

    // Setup session for user
    setCookies(token);
    localStorage.setItem("token", token);
  }

  if (err) {
    const errorMessage = i18n.t("login.loginError");
    exc = new Error(err.networkError ? networkError : errorMessage);
    exc.customMessage = true;
  }

  cb({ user, response, err: exc });
}
