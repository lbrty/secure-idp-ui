import { init } from "./action-types";

export default {
  [init]: async ({ commit }, done) => {
    done();
  }
};
