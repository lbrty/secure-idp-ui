import i18n from "@/locale";

export const handleError = (err, vm, info) => {
  console.log(err, vm, info);
};

export const makeError = (err, msg) => {
  const networkError = i18n.t("errorMessages.networkError");

  if (typeof err === "object") {
    let message = msg;

    if (err.networkError.statusCode === 401) {
      message = i18n.t("login.loginRequired");
    }

    if (err.networkError.statusCode >= 500) {
      message = networkError;
    }

    let exc = new Error(message);
    exc.customMessage = true;
    exc.error = err;
    return exc;
  }

  return null;
};
