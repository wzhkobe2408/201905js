// 用模块化创建的组件：导出一个Vue实例的配置对象

export default {
  template: `<div @click="fn">mabin {{msg}}</div>`,
  data() {
    return {
      msg: 'Hello Everyone'
    }
  },
  methods: {
    fn() {
      console.log('马宾 来了');
    }
  }
}