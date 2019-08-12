import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    /*vuex 中的数据是存在内存中的，一刷新就没有了*/
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
