import i18n from "@/locale";

export const handleError = (err, vm, info) => {
  console.log(err, vm, info);
};

export const makeError = (err, msg) => {
  const networkError = i18n.t("errorMessages.networkError");

  if (err) {
    let exc = new Error(err.networkError ? networkError : msg);
    exc.customMessage = true;
    return exc;
  }

  return null;
};
