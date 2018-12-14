import { apolloClient } from "@/apollo";
import { waiter } from "@/helpers/asyncHelper";
import i18n from "@/locale";
import createProjectMutation from "./queries/createProject.gql";
import { makeError } from "@/helpers/errorHandler";

export default async function createProject(payload, cb) {
  const [err, response] = await waiter(
    apolloClient.mutate({
      mutation: createProjectMutation,
      variables: payload
    })
  );

  cb({
    result: (response || {}).data,
    response,
    err: makeError(err, i18n.t("errorMessages.common"))
  });
}
