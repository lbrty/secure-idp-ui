import { init } from "./action-types";
import { setProjects } from "@/store/projects/action-types";
import { setCurrentUser } from "@/store/auth/mutation-types";
import bootstrap from "@/graphql/init";
import { showBanner } from "@/helpers/browser";

export default {
  [init]: ({ dispatch }, done) => {
    bootstrap(({ response: { data }, err }) => {
      if (!err && data) {
        const { projects, currentUser } = data;
        dispatch(`projects/${setProjects}`, projects, { root: true });
        dispatch(`auth/${setCurrentUser}`, currentUser, { root: true });
      }

      showBanner();
      done();
    });
  }
};
