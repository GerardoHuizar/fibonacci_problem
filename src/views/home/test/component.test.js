import { createLocalVue, shallow } from "vue-test-utils";
import Home from "../Component.vue";
import Vuex from "vuex";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("ThisVueFile.test.js", () => {
  console.log(Home);

  // I need to fill propsData: with some local data here
  //     because it is server data
  // I need to have access to the method
  // I need to use local data for `foo` in the test.

  it(" When foo is set to -diddly- then set bar to true ", () => {
    foo = "diddly";
    // run the method in the component here
    doSomeWork();

    expect(OjbectWithStuffInIt[0].bar.equals(true));
  });
});
