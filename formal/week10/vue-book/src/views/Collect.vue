<template>
  <div>
    <Header :back="true">收藏夹</Header>
    <div class="content">
      <ul class="container">
        <router-link v-for="(item, index) in allBooks"
                     tag="li"
                     :to="{name: 'detail', params: {id: item.bookId}}"
                     :key="index">
          <img :src="item.bookCover" alt="">
          <div class="right">
            <h4>{{item.bookName}}</h4>
            <p>{{item.bookInfo}}</p>
            <p class="price">{{item.bookPrice}}</p>
            <button class="btn" @click.stop="remove(item.bookId)">删除</button>
          </div>
        </router-link>
      </ul>
    </div>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import { getCollectBook, removeCollect } from '../model/collect'

export default {
  name: 'Collect',
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
      this.allBooks = await getCollectBook()
    },
    async remove (id) {
      await removeCollect(id)
      this.getAllBook() // 删除之后要重新请求列表数据
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
