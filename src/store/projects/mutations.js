import { addProjects, addProject } from "./mutation-types";

export default {
  [addProject]: (state, project) => {
    state.projects = [project, ...state.projects];
  },

  [addProjects]: (state, projects) => {
    state.projects = projects;
  }
};
