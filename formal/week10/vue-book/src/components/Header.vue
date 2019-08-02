<template>
  <div class="header">
    <slot></slot>
    <i class="iconfont icon-fanhui"
       @click="goBack"
       v-if="back"></i>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    back: {
      default: false
    }
  },
  methods: {
    goBack () {
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped>
  .header {
    position: fixed;
    top: 0;
    z-index: 100;
    height: 40px;
    width: 100%;
    font-size: 20px;
    line-height: 40px;
    text-align: center;
    background: #afd9ee;
  }
  .iconfont {
    position: absolute;
    left: 10px;
  }
</style>
