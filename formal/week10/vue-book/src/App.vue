<template>
  <div id="app">
    <!--这个app.vue 里面用来装导航和router-view-->
    <Tab></Tab>
    <router-view/>
  </div>
</template>

<script>
import Tab from './components/Tab.vue'

export default {
  name: 'App',
  components: {
    Tab
  }
}
</script>
<style lang="less">
/*一般app.vue的style标签中写的是全局样式*/
</style>
