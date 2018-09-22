import { mount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import iView from "iview/dist/iview.min";

import i18n from "@/locale";
import Login from "@/views/Login.vue";

const localVue = createLocalVue();

localVue.use(iView);
localVue.use(Vuex);

describe("Login.vue", () => {
  let wrapper;
  let actions;
  let store;

  beforeEach(() => {
    actions = {
      login: jest.fn()
    };

    store = new Vuex.Store({
      modules: {
        auth: {
          state: {},
          actions
        }
      }
    });

    wrapper = mount(Login, {
      i18n,
      store,
      localVue
    });
  });

  it("renders login form with login button", () => {
    expect(wrapper.find(".login__form__submit").text()).toMatch("Log in");
  });

  it("login form has background set", () => {
    const el = wrapper.find(".login__bg");
    expect(el.exists()).toBe(true);
  });

  it("calls related Vuex action upon submission", () => {
    const el = wrapper.find(".login__form");
    expect(el.exists()).toBe(true);
    el.trigger("submit");
    expect(actions.login).toHaveBeenCalled();
  });
});
