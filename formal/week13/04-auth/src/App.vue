<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  mounted () {
    let token = localStorage.getItem('ACCESS_TOKEN')
    if (token) {
      this.$store.commit('changeUser', { token })
    }
    let auth = localStorage.getItem('AUTH')

    if (auth) {
      this.$store.commit('changeAuth', JSON.parse(auth))
      console.log(this.$store.state.auth)
    }
  }
}
</script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
