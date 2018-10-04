import { LoadingBar } from "iview";
import { browserOnLoad, browserReloaded } from "@/helpers/browser";
import { isLoginPage, getToken, checkInExpired } from "./util";
import store from "@/store";
import { checkToken } from "@/store/auth/action-types";

export const routerBefore = (to, from, next) => {
  const token = getToken();
  LoadingBar.start();

  if (token) {
    const loadOrReload = browserReloaded() || browserOnLoad();

    // Check token info only if current route is not /login
    // and only if browser was reloaded or link was opened
    if (!isLoginPage(to.name) && loadOrReload) {
      if (checkInExpired()) {
        store.dispatch(`auth/${checkToken}`, {
          token,
          isLoginPage: isLoginPage(to.name)
        });
      }
    }

    next();
  } else {
    if (!isLoginPage(to.name)) {
      next({ path: "/login" });
    } else {
      next();
    }
  }
};

export const routerAfter = (to, from, next) => {
  LoadingBar.finish();
  window.scrollTo(0, 0);
};
