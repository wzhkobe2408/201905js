<template>
  <div>
    <Header :back="true">列表页</Header>
    <div class="content">
      <ul class="container">
        <li v-for="(item, index) in allBooks" :key="index">
          <img :src="item.bookCover" alt="">
          <div class="right">
            <h4>{{item.bookName}}</h4>
            <p>{{item.bookInfo}}</p>
            <p class="price">{{item.bookPrice}}</p>
            <button class="btn" @click="remove(item.bookId)">删除</button>
            <button class="btn" @click="collect(item)">收藏</button>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import { getAllBooks } from '../model/list'

export default {
  name: 'List',
  data () {
    return {
      allBooks: []
    }
  },
  created () {
    this.getAllBook()
  },
  methods: {
    async getAllBook () {
      this.allBooks = await getAllBooks()
    },
    remove (id) {},
    collect (book) {}
  },
  components: {
    Header
  }
}
</script>

<style scoped>

</style>
