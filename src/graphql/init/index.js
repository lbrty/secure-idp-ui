import { apolloClient } from "@/apollo";
import i18n from "@/locale";
import init from "./queries/init.gql";
import { makeError } from "@/helpers/errorHandler";
import { waiter } from "@/helpers/asyncHelper";

/**
 * Load all initial data and
 * @param {Function} cb callback function
 */
export default async function bootstrap(cb) {
  const [err, response] = await waiter(apolloClient.query({ query: init }));

  cb({
    response,
    error: makeError(err, i18n.t("errorMessages.common")),
    errorInfo: err
  });
}
