<template>
  <div>
    <Header>首页</Header>
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
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Swiper from '../components/Swiper.vue'
import { getSliders, getHotBook } from '../model/home' // 导入请求轮播图的方法

export default {
  name: 'home',
  data () {
    return {
      slidesAry: [],
      hotBooks: []
    }
  },
  async created () {
    // getSliders().then((data) => {
    //   this.slidesAry = data
    // })
    this.slidesAry = await getSliders()
    this.hotBooks = await getHotBook()
    console.log(this.hotBooks)
  },
  methods: {},
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
