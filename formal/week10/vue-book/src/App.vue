<template>
  <div id="app">
    <!--这个app.vue 里面用来装导航和router-view-->
    <!--导航就是 router-link，router-link 的 to 属性时指向的路由-->
    <Tab></Tab>
    <router-view/>
    <!--router-view 负责根据不同的路由展示不同的组件；但是我们需要知道哪个路由展示哪个组件，这些映射关系就放在 router.js 中-->
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
<style>
/*一般app.vue的style标签中写的是全局样式*/
  * {
    margin: 0;
    padding: 0;
  }
  ul, li {
    list-style: none;
  }
  a {
    text-decoration: none;
  }
  .content {
    /*内容区域的样式*/
    position: absolute;
    top: 40px;
    bottom: 50px;
    width: 100%;
  }
</style>
