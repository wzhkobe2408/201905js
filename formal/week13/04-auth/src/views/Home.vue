<template>
  <div class="home">
    <div class="login" v-if="!getToken">
      <p>用户名：<input type="text" v-model="user.username"></p>
      <p>密  码：<input type="text" v-model="user.password"></p>
      <p><button @click="doLogin">登录</button></p>
    </div>
    <div v-if="getToken">
      <!-- 根据权限判断某个页面中的元素（按钮、表格...）是不是该展示 -->
      <router-link to="/list" v-if="hasAuth('/list')">List</router-link>
      <router-link to="/edit" v-if="hasAuth('/edit')">| Edit</router-link>
      <router-link to="/add" v-if="hasAuth('/add')">| Add</router-link>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
  data () {
    return {
      user: {
        username: '',
        password: ''
      }
    }
  },
  computed: {
    getToken () {
      console.log(this.$store.state.user)
      return this.$store.state.user.token
    },
    getAuth () {
      return this.$store.state.auth
    }
  },
  methods: {
    hasAuth (auth) {
      // 这个方法返回一个 bool 值，表示该用户是否拥有这些权限
      let isShow = this.getAuth.some(item => item.auth === auth)
      return isShow
    },
    doLogin () {
     // this.$store.dispatch('login', this.user)
      this.$store.dispatch({
        type: 'login',
        payload: {
          ...this.user
        }
      }).then(res => {
        // console.log(res)
        // 登录成功请求用户的权限数据
        if (res.code === 0) {
          this.$store.dispatch('getAuth')
        }
      })
    }
  },
  components: {}
}
</script>
