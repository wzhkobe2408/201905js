<template>
  <div>
    <div class="block">
      <span class="demonstration">默认</span>
      <el-date-picker
        v-model="value1"
        @change="ch1"
        type="datetime"
        placeholder="选择日期时间">
      </el-date-picker>
    </div>
    <div class="block">
      <span class="demonstration">带快捷选项</span>
      <el-date-picker
        v-model="value2"
        type="datetime"
        placeholder="选择日期时间"
        align="right"
        :picker-options="pickerOptions1">
      </el-date-picker>
    </div>
    <div class="block">
      <span class="demonstration">设置默认时间</span>
      <el-date-picker
        v-model="value3"
        type="datetime"
        placeholder="选择日期时间"
        default-time="12:00:00">
      </el-date-picker>
    </div>

    <div class="block">
      <span class="demonstration">默认</span>
      <el-date-picker
        @change="ch2"
        v-model="value4"
        type="datetimerange"
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期">
      </el-date-picker>
    </div>
    <div class="block">
      <span class="demonstration">带快捷选项</span>
      <el-date-picker
        v-model="value5"
        type="datetimerange"
        :picker-options="pickerOptions2"
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
        align="right">
      </el-date-picker>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pickerOptions1: {
        shortcuts: [{
          text: '今天',
          onClick (picker) {
            picker.$emit('pick', new Date())
          }
        }, {
          text: '昨天',
          onClick (picker) {
            const date = new Date()
            date.setTime(date.getTime() - 3600 * 1000 * 24)
            picker.$emit('pick', date)
          }
        }, {
          text: '一周前',
          onClick (picker) {
            const date = new Date()
            date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
            picker.$emit('pick', date)
          }
        }]
      },
      value1: '',
      value2: '',
      value3: '2019-08-08 08:08:08', // 如果要默认值，只需要给它设置一个默认值
      pickerOptions2: {
        shortcuts: [{
          text: '最近一周',
          onClick (picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
            picker.$emit('pick', [start, end])
          }
        }, {
          text: '最近一个月',
          onClick (picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
            picker.$emit('pick', [start, end])
          }
        }, {
          text: '最近三个月',
          onClick (picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
            picker.$emit('pick', [start, end])
          }
        }]
      },
      value4: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],
      value5: ''
    }
  },
  methods: {
    ch1 () {
      // 事件选择器会返回一个 Date 类型的时间对象，服务端一般要Unix时间戳
      console.log( Math.floor(this.value1.getTime() / 1000))
      console.log( Math.floor(+this.value1 / 1000))
    },
    ch2 () {
      console.log(this.value4)
      // 选择时间范围时，value4是数组，数组第一项是起始时间，第二项是结束时间，而一般服务端需要时间戳
      let [start, end] = this.value4
      let obj = {
        start_time: Math.floor(+start / 1000),
        end_time: Math.floor(+end / 1000)
      }
    }
  }
}
</script>
