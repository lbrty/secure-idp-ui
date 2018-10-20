import { setLogoURL } from "./action-types";

export default {
  [setLogoURL]: ({ commit }, url) => {
    commit(setLogoURL, url);
  }
};
