import Vue from 'vue'
import Vuex from 'vuex'

import { toLogin, toGetAuth } from './api/user'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {}, // 存储用户的登录信息
    auth: [] // 存储用户的权限信息
  },
  mutations: {
    changeUser (state, payload) {
      state.user = payload
    },
    changeAuth (state, payload) {
      state.auth = payload
    }
  },
  actions: {
    async login ({ commit, dispatch }, payload) {
      let res = await toLogin(payload.payload)
      commit('changeUser', {token: res.data.token})
      localStorage.setItem('ACCESS_TOKEN', res.data.token)

      // 如果在某个 action 之后还有后续的操作，这个 action 可以返回一个 Promise 实例
      return res
    },
    async getAuth ({ commit }) {
      let res = await toGetAuth()
      commit('changeAuth', res.data)
      localStorage.setItem('AUTH', JSON.stringify(res.data))
    }
  }
})
