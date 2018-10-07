import { setProjects } from "./action-types";
import { addProjects } from "./mutation-types";

export default {
  [setProjects]: ({ commit }, projects) => {
    commit(addProjects, projects);
  }
};
