import { addProjects } from "./mutation-types";

export default {
  [addProjects]: (state, projects) => {
    state.projects = projects;
  }
};
