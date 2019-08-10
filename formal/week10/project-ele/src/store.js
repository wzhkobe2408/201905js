import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    accessToken: ''
  },
  mutations: {
    updateToken (state, payload) {
      state.accessToken = payload.token
    }
  },
  actions: {
  }
})
