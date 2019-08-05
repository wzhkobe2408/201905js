<template>
  <div>
    <Header>首页-ByVuex</Header>
    <div class='content'>
      <swiper :sliders='slidesAry'></swiper>
      <div class="container">
        <h2>热门图书</h2>
        <ul>
          <li v-for="(book, index) in hotBooks" :key="index">
            <img :src="book.bookCover" alt="">
            <b>{{book.bookName}}</b>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
// vue全家桶：vue + vue-router + vuex + vue-cli(webpack+vue)

// @ is an alias to /src
import Header from '@/components/Header.vue'
import Swiper from '../components/Swiper.vue'
import { getSliders, getHotBook } from '../model/home' // 导入请求轮播图的方法

// 导入多个状态、mutation、action
// mapState mapMutations mapActions
import { mapState, mapMutations, mapActions } from 'vuex'

export default {
  name: 'home',
  data () {
    return {}
  },
  computed: {
    // 取 Vuex 的 store 中状态（数据）通常用计算属性的方式
   /* slidesAry () {
      return this.$store.state.slidesAry
    },
    hotBooks () {
      return this.$store.state.hotBooks
    }*/
    ...mapState(['slidesAry', 'hotBooks']) // 用 mapState 从store中获取数据，和上面的通过 this.$store.state.xxxx 的方式等价
    // mapState 从 store 中获取 slidesAry 和 hotBook以后，会通过 ... 展开到计算属性中，
  },
  created () {
    // 请求数据要触发 action
    // this.$store.dispatch('getSlider')
    // this.$store.dispatch('getHotBook')
    this.getSlider() // 等价于 this.$store.dispatch('getSlider')
    this.getHotBook() // 等价于 this.$store.dispatch('getHotBook')
  },
  methods: {
    // mapMutations 和 mapActions 要写在methods里面
    ...mapActions(['getSlider', 'getHotBook']) // mapActions 从store 中获取到 getSlider和getHotBook，然后通过 ... 展开到 methods中，就会个 methods 中增加 getSlider 和 getHotBook 方法，这两个方法可以直接通过 this 调用
  },
  components: {
    Header,
    Swiper
  }
}
</script>

<style scoped lang="less">
  .container {
    margin-bottom: 50px;
    box-sizing: border-box;
    overflow-x: hidden;

    h2 {
      padding-left: 30px;
    }
    li {
      float: left;
      width: 50%;
      margin: 20px 0;

      img {
        display: block;
      }
      b {
        display: block;
        padding-left: 30px;
      }
    }
  }
</style>
