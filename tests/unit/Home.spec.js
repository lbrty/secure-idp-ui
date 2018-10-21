import { mount, shallowMount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";

import i18n from "@/locale";
import Home from "@/views/Home.vue";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("Home.vue", () => {
  it("full render of project list works as expected", () => {
    const store = new Vuex.Store({
      modules: {
        projects: {
          namespaced: true,
          state: {
            projects: [
              {
                id: 1,
                projectName: "Test project",
                peopleCount: 10000,
                aidCount: 10000
              },

              {
                id: 2,
                projectName: "Test project 2",
                peopleCount: 10000,
                aidCount: 10000
              }
            ]
          },
          getters: {
            projects: s => s.projects
          }
        }
      }
    });

    const wrapper = mount(Home, {
      i18n,
      localVue,
      store,
      stubs: ["router-link"]
    });

    expect(wrapper.find(".project-list").exists()).toBe(true);
    expect(wrapper.findAll(".project-item").length).toEqual(2);
  });

  it("home page renders project list", () => {
    const store = new Vuex.Store({
      modules: {
        projects: {
          namespaced: true,
          state: {
            projects: [
              {
                id: 2,
                projectName: "Test project 2",
                peopleCount: 10000,
                aidCount: 10000
              }
            ]
          },
          getters: {
            projects: s => s.projects
          }
        }
      }
    });

    const wrapper = shallowMount(Home, {
      i18n,
      localVue,
      store,
      stubs: ["router-link"]
    });

    expect(wrapper.find("projectlist-stub").exists()).toBe(true);
  });

  it("displays no projects if project list is empty", () => {
    const store = new Vuex.Store({
      modules: {
        projects: {
          namespaced: true,
          state: {
            projects: []
          },
          getters: {
            projects: s => s.projects
          }
        }
      }
    });

    const wrapper = shallowMount(Home, {
      i18n,
      localVue,
      store,
      stubs: ["router-link"]
    });

    expect(wrapper.text().indexOf("No projects found.") > -1).toBe(true);
    expect(wrapper.text().indexOf("Start your first project.") > -1).toBe(true);
  });
});
