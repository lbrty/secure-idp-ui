import { setProjects, createProject } from "./action-types";
import { addProjects, addProject } from "./mutation-types";
import { newProject } from "@/graphql/projects";

export default {
  [createProject]: ({ commit }, { projectInfo, cb }) => {
    newProject(projectInfo, ({ result, response, err }) => {
      cb(result, response, err);

      if (!err && result.createProject.errors.length == 0) {
        commit(addProject, result.createProject);
      }
    });
  },

  [setProjects]: ({ commit }, projects) => {
    commit(addProjects, projects);
  }
};
