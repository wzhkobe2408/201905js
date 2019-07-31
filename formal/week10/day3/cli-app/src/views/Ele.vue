<template>
  <div>
    <el-row>
      <!--el-row 行-->
      <el-col :span="12">
        <el-input v-model="input"
                  @focus="inputFocus"
                  clearable
                  placeholder="请输入你的银行卡密码"></el-input>
      </el-col>
      <el-col :span="4">
        {{input}}
      </el-col>
    </el-row>
  </div>
</template>

<script>
// 1. 表单元素 input radio checkbox select textarea form
// 2. table message messageBox
// 3. dialog
export default {
  name: 'Ele',
  data () {
    return {
      input: ''
    }
  },
  methods: {
    inputFocus () {
      console.log(this.input)
    }
  }
}
</script>

<style scoped>

</style>
