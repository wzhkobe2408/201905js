<template>
  <div id="app">
    <el-row>
      <!--导航栏菜单不登录的时候不可见，从 vuex 中取得 accessToken ，如果accessToken 为空表示未登录-->
      <el-col :span="4" v-if="isLogin" class="fixed">
        <Menu></Menu>
      </el-col>
      <el-col :span="20" :style="reactStyle">
        <router-view/>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Menu from '@/components/Menu.vue'

export default {
  name: 'App',
  mounted () {
    // alert('mounted')
    // 在mounted 之后去ls 中读取 token ，如果读取到，证明之前已经登录过了
    // 因为一刷新，vuex中的数据就没有了，所以如果token读取到了，手动更新一次 vuex 中的 token
    let token = localStorage.getItem('ACCESS_TOKEN')
    if (token) this.$store.commit('updateToken', {token})
  },
  computed: {
    isLogin () {
      return !!this.$store.state.accessToken
    },
    reactStyle () {
      if (this.$store.state.accessToken) {
        return {
          left: '205px',
          position: 'absolute'
        }
      } else {
        return {
          left: '0',
          position: 'absolute'
        }
      }
    }

  },
  components: {
    Menu
  }
}
</script>

<style lang="less">
  * {
    margin: 0;
    padding: 0;
  }

  .el-menu {
    border-right: none !important;
  }
  .nav {
    position: absolute;
    left: 0;
    top: 0;
  }
  .fixed {
    position: fixed;
    z-index: 100;
  }
  .content {
    padding: 15px;
  }
</style>
