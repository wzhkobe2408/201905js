export default {
  template: `<div>CXK <span v-for="(item, index) in ary" :key="index">{{item}}；</span></div>`,
  data() {
    return {
      ary: [
        'SING',
        'DANCE',
        'RAP',
        'BASKETBALL'
      ]
    }
  }
}