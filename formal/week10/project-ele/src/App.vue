<template>
  <div id="app">
    <el-row>
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
