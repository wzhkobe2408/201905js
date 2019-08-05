<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <h1>
      <!--来自app的Num： {{num}}-->
      <!--在小胡子语法中从this中取东西，不需要写this-->
      来自app的Num：{{$store.state.num}}
    </h1>
    <router-view/>
  </div>
</template>

<script>
import eventBus from './eventBus'
export default {
  name: 'App',
  data () {
    return {
      // num: 14
    }
  },
  created () {
    // eventBus.$on('addNum', this.addOne)
    //
    // // 监听getNum
    // eventBus.$on('getNum', () => {
    //   console.log('Home.vue 惦记上 Num 了')
    //   // 接下来把数据发给Home.vue
    //   eventBus.$emit('receiveNum', this.num)
    // })
  },
  methods: {
    addOne (val) {
      this.num++
      eventBus.$emit('receiveNum', this.num)
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
