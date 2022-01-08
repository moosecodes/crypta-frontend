import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    list: [],
    input: "",
    cipher: "",
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
          console.log(error);
          console.log("THERE WAS AN ERROR IN fetchList!!!");
        });
      commit("SET_CIPHER_LIST");
    },
    sendInput({ commit }, input) {
      commit("SET_CIPHER", input);
      console.log("sendInput");
    },
    setCipher({ commit }, cipher) {
      commit("SET_CIPHER", cipher);
    },
    setResponse({ commit }, response) {
      commit("SET_RESPONSE", response);
    },
  },
  modules: {},
});
