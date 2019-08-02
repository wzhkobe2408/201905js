<template>
  <div>
    <Header :back="true">列表页</Header>
    <div class="content">
      <ul class="container">
        <li v-for="(item, index) in allBooks"
            @click="go(item.bookId)"
            :key="index">
          <img :src="item.bookCover" alt="">
          <div class="right">
            <h4>{{item.bookName}}</h4>
            <p>{{item.bookInfo}}</p>
            <p class="price">{{item.bookPrice}}</p>
            <button class="btn" @click.stop="remove(item.bookId)">删除</button>
            <button class="btn" @click.stop="collect(item)">收藏</button>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import { getAllBooks, deleteBook, collectBook } from '../model/list'

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
    async remove (id) {
      await deleteBook(id)
      this.getAllBook() // 删除之后要重新请求列表数据
    },
    async collect (book) {
      await collectBook(book)
      // 在这里还可以提示收藏成功
    },
    go (id) {
      // this.$router.push('/detail/' + item.bookId)

      this.$router.push({
        name: 'detail',
        params: {
          id: id
        }
      })
    }
  },
  components: {
    Header
  }
}
</script>

<style scoped lang="less">
  .container {
    margin-bottom: 50px;
    li {
      padding: 10px;
      overflow: hidden;

      img {
        float: left;
        width: 160px;
      }
      .right {
        padding-top: 20px;
        float: left;

        .price {
          margin-bottom: 10px;
          font-size: 20px;
          color: red;
        }

        .btn {
          border: none;
          border-radius: 5px;
          width: 60px;
          height: 30px;
          color: #fff;
          font-size: 18px;
          background: red;

          &:nth-of-type(1) {
            margin-right: 5px;
          }
        }
      }
    }
  }
</style>
