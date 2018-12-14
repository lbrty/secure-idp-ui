import i18n from "@/locale";

export const handleError = (err, vm, info) => {
  console.log(err, vm, info);
};

export const makeError = (err, msg) => {
  const networkError = i18n.t("errorMessages.networkError");

  if (err && err !== null) {
    let message = msg;
    const statusCode = err.networkError.statusCode;

    if (statusCode === 401) {
      message = i18n.t("login.loginRequired");
    }

    if (statusCode >= 500) {
      message = networkError;
    }

    let exc = new Error(message);

    exc.customMessage = true;

    // We need to keep original error
    // so later we can access and process
    // if we will need it.
    exc.error = err;

    return exc;
  }

  return null;
};
