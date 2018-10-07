import { init } from "./action-types";
import bootstrap from "@/graphql/init";

export default {
  [init]: ({ commit }, done) => {
    bootstrap(({ response, err }) => {
      done();
    });
  }
};
