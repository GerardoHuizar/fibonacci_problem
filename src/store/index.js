import Vue from 'vue';
import Vuex, { Store } from 'vuex';
import Home from '../containers/home/container';

Vue.use(Vuex);


const store = new Store({
  modules: {
    home: Home
  },
});

export default store;
