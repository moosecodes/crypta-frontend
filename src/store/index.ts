import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    list: [],
    input: '',
    cipher: '',
    response: '',
  },
  mutations: {
    SET_CIPHERS_LIST(state, payload) {
      state.list = payload;
    },
    SET_INPUT(state, payload) {
      state.input = payload;
    },
    SET_CIPHER(state, payload) {
      state.cipher = payload;
    },
    SET_RESPONSE(state, payload) {
      state.response = payload;
    },
  },
  actions: {
    fetchList({ commit, state }) {
      axios
        .get(`http://${process.env.VUE_APP_DOMAIN}/api/encryption/list`)
        .then((response) => {
          state.list = response.data;
        })
        .catch(function (error: string) {
          // err = error;
        });
      commit('SET_CIPHERS_LIST');
      console.log('input');
    },
    sendInput({ commit }, input) {
      commit('SET_CIPHER', input);
      console.log('input');
    },
    setCipher({ commit }, cipher) {
      commit('SET_CIPHER', cipher);
      console.log('cipher');
    },
    setResponse({ commit }, response) {
      commit('SET_RESPONSE', response);
      console.log('response');
    },
  },
  modules: {},
});
