import { SET_FIBONACCI_NUMBER } from "./constants";

const actions = {
  setFibonacciNumber(context, payload) {
    console.log(payload);
    context.commit(SET_FIBONACCI_NUMBER, payload);
  },
};

export default actions;
