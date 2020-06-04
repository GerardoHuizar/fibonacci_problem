import mutations from './mutations';
import actions from './actions';
import getters from './getters';
import state from './state';

const Home = {
    state: () => (state),
    mutations: mutations,
    actions: actions,
    getters: getters
}

export default Home;
