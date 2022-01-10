import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

const domain = process.env.VUE_APP_DOMAIN;

export default new Vuex.Store({
  state: {
    list: [],
    input: "",
    cipher: "",
    algorithm: "",
    response: "",
  },
  mutations: {
    SET_CIPHER_LIST(state, payload) {
      state.list = payload;
    },
    SET_INPUT(state, payload) {
      state.input = payload;
    },
    SET_CIPHER(state, payload) {
      state.cipher = payload;
    },
    SET_ALGORITHM(state, payload) {
      state.algorithm = payload;
    },
    SET_RESPONSE(state, payload) {
      state.response = payload;
    },
  },
  actions: {
    fetchAlgorithms({ commit }) {
      axios
        .get(`http://${domain}/api/encryption/list`)
        .then((response) => {
          commit("SET_CIPHER_LIST", response.data);
        })
        .catch(function (error: string) {
          console.log(error);
        });
    },
    sendInput({ state, dispatch }) {
      const params = `cipher=${state.algorithm}&text=${state.input}`;
      const url = `http://${domain}/api/encryption/encrypt?${params}`;

      axios
        .get(url)
        .then((response) => {
          dispatch("setResponse", response);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    setAlgorithm({ commit }, algorithm) {
      commit("SET_ALGORITHM", algorithm);
    },
    setCipher({ commit }, cipher) {
      commit("SET_CIPHER", cipher);
    },
    setResponse({ commit }, response) {
      const data = JSON.stringify(response.data, null, 2);
      commit("SET_RESPONSE", data);
    },
  },
  modules: {},
});
