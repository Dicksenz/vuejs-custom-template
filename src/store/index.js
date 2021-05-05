import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    status: '',
    token: localStorage.getItem('token') || '',
    test: 'testvalue',
    user: {},
  },
  mutations: {
    saveToken: (state, token) => {
      state.token = token;
    },
  },

  getters: {
    isLoggedIn: (state) => !!state.token,
    getToken: (state) => state.token,
  },
  actions: {},
  modules: {},
});
