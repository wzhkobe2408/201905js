<template>
  <div>
    <el-row>
      <el-col :span="12">
        <!--带校验的form，rules就是检验规则-->
        <el-form :model="ruleForm"
                 :rules="rules"
                 ref="ruleForm"
                 label-width="100px"
                 class="demo-ruleForm">
          <el-form-item label="活动名称" prop="name">
            <el-input v-model="ruleForm.name"></el-input>
          </el-form-item>
          <el-form-item label="活动区域" prop="region">
            <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="活动时间" required>
            <el-col :span="11">
              <el-form-item prop="date1">
                <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1" style="width: 100%"></el-date-picker>
              </el-form-item>
            </el-col>
            <el-col class="line" :span="2">-</el-col>
            <el-col :span="11">
              <el-form-item prop="date2">
                <el-time-picker type="fixed-time" placeholder="选择时间" v-model="ruleForm.date2" style="width: 100%"></el-time-picker>
              </el-form-item>
            </el-col>
          </el-form-item>
          <el-form-item label="即时配送" prop="delivery">
            <el-switch v-model="ruleForm.delivery"></el-switch>
          </el-form-item>
          <el-form-item label="活动性质" prop="type">
            <el-checkbox-group v-model="ruleForm.type">
              <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
              <el-checkbox label="地推活动" name="type"></el-checkbox>
              <el-checkbox label="线下主题活动" name="type"></el-checkbox>
              <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <el-form-item label="特殊资源" prop="resource">
            <el-radio-group v-model="ruleForm.resource">
              <el-radio label="线上品牌商赞助"></el-radio>
              <el-radio label="线下场地免费"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="活动形式" prop="desc">
            <el-input type="textarea" v-model="ruleForm.desc"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary"
                       @click="submitForm('ruleForm')">立即创建</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      ruleForm: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      rules: {
        /*  在el-form-item 中配置prop属性，prop的属性值表示当前的form-item使用哪个规则，例如 prop="name" ，使用的就是 rules.name 对应的规则 */
        // required: true 表示必传，而且label上会有红色 *
        // message 当不满足条件时的提示信息
        // trigger 触发表单校验的时机，blur 表示 onblur的时候校验；一般input用blur，其他如select、checkbox、radio用change
        name: [
         /* { required: true, message: '请输入活动名称222', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }*/
          {
            // 还可以使用自定义的校验规则
            validator (rule, value, cb) {
              // console.log(rule) // 规则
              // console.log(value) // 当前表单的值
              // console.log(cb) // 控制权函数，
              if (value.length > 5) {
                // 提示太长了
                cb(new Error('太长了'))
              } else {
                // 正常
                cb()
              }
              // 不管能不能通过校验都要执行一次cb，如果不合法执行cb(new Error(提示信息))，如果通过执行 cb() 放行
            },
            trigger: 'blur' // 自定义表单需要的触发时机
          }
        ],
        region: [
          { required: true, message: '请选择活动区域', trigger: 'change' }
        ],
        date1: [
          { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
        ],
        date2: [
          { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
        ],
        type: [
          { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
        ],
        resource: [
          { required: true, message: '请选择活动资源', trigger: 'change' }
        ],
        desc: [
          { required: true, message: '请填写活动形式', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      // form 表单的validate方法可以校验当前form下面所有的表单元素是否合法，如果不合法页面中会出现对应的提示
      // validate 接收一个回调函数，回调会接受一个valid参数，如果表单校验合法就是true，否则就是false
      this.$refs['ruleForm'].validate((valid) => {
        console.log(valid)
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm (formName) {
      // resetFields() 方法会重置表单，把当前form表单中的值都清空
      this.$refs[formName].resetFields()
    }
  }
}
</script>
