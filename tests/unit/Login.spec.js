import { mount, createLocalVue } from "@vue/test-utils";
import iView from "iview/dist/iview.min";

import i18n from "@/locale";
import Login from "@/views/Login.vue";

const localVue = createLocalVue();

localVue.use(iView);

describe("Login.vue", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(Login, {
      i18n,
      localVue
    });
  });

  it("renders login form", () => {
    expect(wrapper.find(".login__form__submit").text()).toMatch("Log in");
  });

  it("login form title presents", () => {
    const el = wrapper.find(".login__bg");
    expect(el.exists()).toBe(true);
  });
});
