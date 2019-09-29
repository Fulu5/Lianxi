import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  getters: {
    /**
     *获取token
     * @param {*} state vuex对象
     * @returns
     */
    GET_TOKEN(state) {
      state.token = localStorage.getItem('token');
      return state.token;
    }
  },
  mutations: {
    /**
     *添加Token
     * @param {*} state vuex对象
     * @param {*} token token
     */
    ADD_TOKEN(state, token) {
      // 第一个参数为 state 用于变更状态 登录
      localStorage.setItem('token', token);
      state.token = token;
    }
  },
  actions: {}
});
