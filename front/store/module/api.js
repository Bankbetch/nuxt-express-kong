import qs from "qs";
import https from "https";
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
    this.$axios.setHeader("Authorization", "Basic YmFuazoxMjM0");
    try {
      const response = await this.$axios.$get(`get`);
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
    this.$axios.setHeader("Authorization", "Basic YmFuazoxMjM0");
    try {
      return await this.$axios
        .post(`post`, JSON.stringify(data), {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          }
        })
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
