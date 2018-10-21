import { shallowMount, createLocalVue } from "@vue/test-utils";

import i18n from "@/locale";
import Home from "@/views/Home.vue";

const localVue = createLocalVue();

describe("Home.vue", () => {
  it("home page renders project list", () => {
    const wrapper = shallowMount(Home, {
      i18n,
      localVue,
      stubs: ["router-link"]
    });

    expect(wrapper.find("projectlist-stub").exists()).toBe(true);
  });
});
