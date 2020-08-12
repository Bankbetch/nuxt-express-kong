import qs from "qs";
import https from "https";
import { json } from "body-parser";
const state = () => ({
  list: [],
  listOption: []
});

const mutations = {
  setList(state, data) {
    state.list = data;
  }
};
const actions = {
  async findAll({ commit }, search) {
    let auth = {
      username: 'bank',
      password: '1234'
    }
    // this.$axios.setHeader("Authorization", "Basic YmFuazoxMjM0");
    try {
      const response = await this.$axios.$get(`http://127.0.0.1:8000/test2`);
      if (response) {
        commit("setList", response);
        return response;
      }
    } catch (e) {
      // this.$auth.logout();
      commit("setList", null);
    }
  },
  async post({ commnt }, data) {
    // this.$axios.setHeader("Authorization", "Basic YmFuazoxMjM0");
    try {
      return await this.$axios
        .post(`http://127.0.0.1:8000/test2`, qs.stringify(data))
        .then(res => res);
    } catch (e) {
      return e;
    }
  }
};
const getters = {
  getList: state => {
    return state.list;
  }
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
};
