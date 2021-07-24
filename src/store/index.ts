import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cipher: 'nothing',
  },
  mutations: {
    setCipher(state, payload){
      state.cipher = payload;
    }
  },
  actions: {},
  modules: {},
});
