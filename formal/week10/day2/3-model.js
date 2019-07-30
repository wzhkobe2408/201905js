let template = `<div class="modal" v-show="open">
    <div class="content">
      <button @click="closeModal">关闭</button>
    </div>
  </div>`;

export default {
  template,
  data() {
    return {
      // open: false
    }
  },
  props: ['open'],
  methods: {
    closeModal() {
      // this.$emit('shutdown', false)
      this.$emit('update:open', false)
    }
  },
  mounted() {
    console.log('x');
  }
}