<template>
  <div>
    <Header :back="true">详情页</Header>
    <div class="content">
      <div class="container">
        <ul>
          <li>
            <label>书名</label>
            <input type="text" v-model="book.bookName" />
          </li>
          <li>
            <label>信息</label>
            <input type="text" v-model="book.bookInfo" />
          </li>
          <li>
            <label>价格</label>
            <input type="text" v-model="book.bookPrice" />
          </li>
        </ul>
        <button class="btn">确认修改</button>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '../components/Header.vue'

export default {
  name: 'Detail',
  data () {
    return {
      book: {
        bookName: '',
        bookInfo: '',
        bookPrice: ''
      }
    }
  },
  components: {
    Header
  }
}
</script>

<style scoped lang="less">
  .container {
    position: fixed;
    top: 40px;
    left: 0;
    bottom: 0;
    right: 0;
    height: 100%;
    z-index: 101;
    background: #fff;
    padding: 20px;

    li {
      padding-left: 10px;
      label {
        display: block;
        font-size: 20px;
        font-weight: bold;
        margin-bottom: 10px;
      }
      input {
        display: block;
        width: 260px;
        height: 40px;
        font-size: 20px;
        padding-left: 15px;
        margin-bottom: 10px;
      }
    }
    .btn {
      margin-left: 20px;
      border: none;
      border-radius: 8px;
      display: block;
      width: 260px;
      height: 40px;
      line-height: 40px;
      text-align: center;
      font-size: 20px;
      color: #fff;
      background: red;
    }
  }
</style>
