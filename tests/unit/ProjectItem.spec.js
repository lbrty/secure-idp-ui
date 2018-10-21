import { mount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";

import i18n from "@/locale";
import ProjectItem from "@/components/project/ProjectItem.vue";

const localVue = createLocalVue();

localVue.use(Vuex);

describe("ProjectItem.vue", () => {
  it("project item renders correctly", () => {
    const wrapper = mount(ProjectItem, {
      i18n,
      localVue,
      propsData: {
        project: {
          id: 123,
          projectName: "Test project",
          peopleCount: 10000,
          aidCount: 10000
        }
      },
      stubs: ["router-link"]
    });

    expect(wrapper.find(".project-item").exists()).toBe(true);
    expect(wrapper.find(".project-item__title").text()).toEqual("Test project");
    expect(wrapper.find(".project-item__controls").exists()).toBe(true);
  });
});
