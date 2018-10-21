import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";

import i18n from "@/locale";
import ProjectList from "@/components/project/ProjectList.vue";

const localVue = createLocalVue();

localVue.use(Vuex);

describe("ProjectList.vue", () => {
  it("project list rendered correctly", () => {
    const wrapper = shallowMount(ProjectList, {
      i18n,
      localVue,
      propsData: {
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
      stubs: ["router-link"]
    });

    expect(wrapper.find(".project-list").exists()).toBe(true);
    expect(wrapper.findAll("projectitem-stub").length).toBe(2);
  });
});
