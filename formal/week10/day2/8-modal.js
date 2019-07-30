let template = `<div class="modal" v-show="open">
    <div class="content">
      
      <!--<slot name="before"></slot> 
      <button @click="closeModal">关闭</button>
      <slot></slot>   -->
      <slot></slot> <!--匿名slot-->
      <slot name="header"></slot> <!--具名slot-->
      <slot name="body"></slot>
      <slot name="footer"></slot>
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