import { shallowMount, createLocalVue } from "@vue/test-utils";
import Bootstrap from "@/components/Bootstrap.vue";

const localVue = createLocalVue();

describe("Bootstrap.vue", () => {
  it("calls bootstrap when created", () => {
    const boo = jest.fn();
    shallowMount(Bootstrap, {
      localVue,
      methods: {
        bootstrap: boo
      }
    });

    expect(boo).toHaveBeenCalled();
  });

  it("renders spinner if state is loading", () => {
    const wrapper = shallowMount(Bootstrap, { localVue });
    wrapper.setData({ loading: true });
    expect(wrapper.find("spin-stub").exists()).toBe(true);
  });

  it("renders default slot when loading finished", () => {
    const wrapper = shallowMount(Bootstrap, { localVue });
    wrapper.setData({ loading: false });
    expect(wrapper.find("spin-stub").exists()).toBe(false);
  });
});
