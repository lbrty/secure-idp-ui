import { setLogoURL } from "./mutation-types";

export default {
  [setLogoURL]: (state, url) => {
    state.logoUrl = url;
  }
};
