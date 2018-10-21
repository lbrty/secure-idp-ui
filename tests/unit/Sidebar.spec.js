import { mount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";

import i18n from "@/locale";
import Sidebar from "@/components/sidebar/Sidebar.vue";

const localVue = createLocalVue();

localVue.use(Vuex);

describe("Sidebar.vue", () => {
  it("shows menu items", () => {
    const store = new Vuex.Store({
      modules: {
        auth: {
          namespaced: true,
          state: {},
          getters: {
            isAdmin: _ => true
          }
        }
      }
    });

    const wrapper = mount(Sidebar, {
      i18n,
      store,
      localVue,
      stubs: ["router-link"]
    });

    expect(wrapper.find(".sidebar__menu").exists()).toBe(true);
    expect(wrapper.findAll(".sidebar__menu__item").length).toBe(2);
  });

  it("hides menu items if user is not admin", () => {
    const store = new Vuex.Store({
      modules: {
        auth: {
          namespaced: true,
          state: {},
          getters: {
            isAdmin: _ => false
          }
        }
      }
    });

    const wrapper = mount(Sidebar, {
      i18n,
      store,
      localVue,
      stubs: ["router-link"]
    });

    expect(wrapper.find(".sidebar__menu").exists()).toBe(true);
    expect(wrapper.findAll(".sidebar__menu__item").length).toBe(1);
  });
});
