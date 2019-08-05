<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <div>
      <button @click="addToAppNum">给app.vue中的num++</button>
      <button @click="add2">给app.vue中的+2</button>
    </div>
    <div>
      <!-- 我想拿到app.vue 中的 num -->
      <!--{{numFromApp}}-->
      从store中获取的num：{{$store.state.num}}
    </div>
    <p>
      从store中获取的num：{{$store.state.num}}
    </p>
    <p>
      <button @click="addAsync">点击过，1s后给num加一</button>
    </p>
  </div>
</template>

<script>
// @ is an alias to /src
// import eventBus from '../eventBus'
// 当一个数据被多个地方依赖，同时多个地方还要修改这个数据，此时用 eventBus 就会导致逻辑复杂；类似这种情况 vuex 来解决

export default {
  name: 'home',
  data () {
    return {
      numFromApp: 0
    }
  },
  created () {
    // 获取App.vue 中的num
    // eventBus.$on('receiveNum', (val) => {
    //   console.log('来自app.vue的num ' + val)
    //   this.numFromApp = val
    // })
    // eventBus.$emit('getNum')
  },
  methods: {
    addToAppNum () {
      // ??
      // eventBus.$emit('addNum', 1)
      // 要修改 store 中的数据，需要提交mutation
      this.$store.commit('addNum')
    },
    add2 () {
      // 给 store 中的num加 2
      // commit(type, payload)
      // type mutation的名字
      // payload 传递给mutation方法的载荷
      this.$store.commit('addNumByNum', { num: 3 })
    },
    addAsync () {
      // 异步更新 store 中的num
      // 异步更新需要 分发 action
      // this.$store.dispatch(type) 用来分发action
      // type 是 action 的名字

      this.$store.dispatch('asyncAdd', '这个是payload')
    }
  }
}
</script>
