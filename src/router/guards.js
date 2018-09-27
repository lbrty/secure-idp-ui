import { LoadingBar } from "iview";
import { browserOnLoad, browserReloaded } from "@/helpers/browser";

const isLoginPage = route => String(route).toLowerCase() === "login";

export const routerBefore = (to, from, next) => {
  const token = localStorage.getItem("token");

  LoadingBar.start();

  if (token) {
    const loadOrReload = browserReloaded() || browserOnLoad();

    // Check token info only if current route is not /login
    // and only if browser was reloaded or link was opened
    if (!isLoginPage(to.name) && loadOrReload) {
      console.log("check auth...");
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
