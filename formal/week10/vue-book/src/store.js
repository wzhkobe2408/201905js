import Vue from 'vue'
import Vuex from 'vuex'
import { getSliders, getHotBook } from './model/home'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    slidesAry: [], // 空数组是初始值，最终的值会是通过 ajax 从服务端获取的数据
    hotBooks: []
  },
  mutations: {
    // 时刻记住mutation中只能同步更新状态
    updateSlider (state, payload) {
      state.slidesAry = payload
    },
    updateHotBooks (state, payload) {
      state.hotBooks = payload
    }
  },
  actions: {
    async getSlider ({ commit }) {
      let sliders = await getSliders() // 通过ajax获取 轮播图的图片
      commit('updateSlider', sliders)
    },
    async getHotBook (context) {
      let hot = await getHotBook()
      context.commit('updateHotBooks', hot)
    }

  }
})
