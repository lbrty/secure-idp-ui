import { init } from "./action-types";
import { setProjects } from "@/store/projects/action-types";
import bootstrap from "@/graphql/init";

export default {
  [init]: ({ dispatch }, done) => {
    bootstrap(({ response: { data }, err }) => {
      if (!err) {
        const { projects } = data;
        dispatch(`projects/${setProjects}`, projects, { root: true });
      }

      done();
    });
  }
};
