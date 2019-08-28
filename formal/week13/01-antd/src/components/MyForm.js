import React, { Component } from 'react'

import {
  Form,
  Input,
  Tooltip,
  Icon,
  Cascader,
  Select,
  Row,
  Col,
  Checkbox,
  Button,
  AutoComplete,
  DatePicker, // 日期拾取器
  TimePicker // 时间拾取器
} from 'antd'

const { Option } = Select
const { Option: AutoCompleteOption } = AutoComplete

const { Item: FormItem } = Form

const { RangePicker } = DatePicker
const residences = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
          },
        ],
      },
    ],
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
          },
        ],
      },
    ],
  },
];

class MyForm extends Component {
  constructor () {
    super()
    this.state = {
      confirmDirty: false,
      autoCompleteResult: [],
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    // validateFieldsAndScroll 是 Form 的方法，通过 Form.create() 包装后，可以通过 this.props.form 调用 Form 上面的方法
    this.props.form.validateFieldsAndScroll((err, values) => {
      // 如果表单校验失败 err 是个对象；如果校验通过 err 就是 null
      // values 就是表单的值
      console.log(err)
      if (!err) {
        console.log('表单的值是', values)
      }
    })
  }

  handleDate = () => {
    // 把日期时间拾取器获取到的日期或者时间转换成 unix 时间戳
    // let formData = this.props.form.getFieldsValue([]) // getFieldsValue 方法获取当前表单中表单元素的值；如果不传参获取的是全部表单元素的值，如果要获取指定的表单元素的值，需要传递一个数组，数组项是你要获取的字段名
    let formData = this.props.form.getFieldsValue(['date1', 'datetime1', 'dateTimeRange1'])
    // console.log(formData)

    let { date1, datetime1, dateTimeRange1: [r1, r2] } = formData

    // ANTD 日期拾取器返回的是 Moment 类型的对象；Moment.js 文档：http://momentjs.cn
    // Moment 类型的对象上有一个 unix() 可以直接把 Moment 类型的对象转成 UNIX 时间戳

    console.log(date1.unix())
    console.log(datetime1.unix())
    console.log(r1.unix())
    console.log(r2.unix())

  }

  handleConfirmBlur = e => {
    const { value } = e.target
    this.setState({ confirmDirty: this.state.confirmDirty || !!value})
  }

  compareToFirstPassword = (rule, value, callback) => {
    // rule 表单的校验规则
    // value 表单的值
    // callback 控制权函数
    const { form } = this.props
    // this.props.form.getFieldValue() 是用来获取表单中某个表单元素的值的
    if (value && value !== form.getFieldValue('password')) {
      callback('两次输入的密码不同')
    } else {
      callback()
    }
  }

  validateToNextPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && this.state.confirmDirty) {
      // this.props.form.validateFields 用来校验某些表单的
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  };

  handleWebsiteChange = value => {
    let autoCompleteResult;
    if (!value) {
      autoCompleteResult = [];
    } else {
      autoCompleteResult = ['.com', '.org', '.net'].map(domain => `${value}${domain}`);
    }
    this.setState({ autoCompleteResult });
  };
   render () {
     const { getFieldDecorator } = this.props.form
     const { autoCompleteResult } = this.state

     const formItemLayout = {
       labelCol: {
         xs: { span: 24 },
         sm: { span: 8 },
       },
       wrapperCol: {
         xs: { span: 24 },
         sm: { span: 16 },
       },
     };
     const tailFormItemLayout = {
       wrapperCol: {
         xs: {
           span: 24,
           offset: 0,
         },
         sm: {
           span: 16,
           offset: 8,
         },
       },
     };

     // this.props.form.getFieldDecorator 让表单双向数据绑定；
     // 第一次执行：第一个参数是字段名；第二个参数是一个对象，是对组件的配置
     // 第二次执行：传入要双向数据绑定的组件

     const prefixSelector = getFieldDecorator('prefix', {
       initialValue: '86'
     })(<Select>
       <Option value='86'>+86</Option>
       <Option value='87'>+87</Option>
     </Select>)

     const websiteOptions = autoCompleteResult.map(website => (
       <AutoCompleteOption key={website}>{website}</AutoCompleteOption>
     ))

     const config = {
       rules: [
         {
           type: 'object',
           required: true,
           message: '请选择日期1'
         }
       ]
     }

     const rangeConfig = {
       rules: [
         {
           type: 'array',
           required: true,
           message: '请选择时间范围1'
         }
       ]
     }


      return (<Form {...formItemLayout} onSubmit={this.handleSubmit}>
        <FormItem label='EMAIL'>
          {
            getFieldDecorator('email', {
              rules: [
                {
                  type: 'email',
                  message: '邮箱地址不合法'
                },
                {
                  require: true,
                  message: '邮箱是个必填字段'
                }
              ]
            })(<Input />)
          }
        </FormItem>
        <FormItem label='密码' hasFeedback>
          {
            getFieldDecorator('password', {
              rules: [
                {
                  required: true,
                  message: '密码是必填字段'
                },
                {
                  validator: this.validateToNextPassword
                }
              ]
            })(<Input.Password />)
          }
        </FormItem>
        <FormItem label='重复确认密码'>
          {
            getFieldDecorator('confirm', {
              rules: [
                {
                  required: true,
                  message: '重复密码必填'
                },
                {
                  validator: this.compareToFirstPassword
                }
              ]
            })(<Input.Password onBlur={this.handleConfirmBlur}/>)
          }
        </FormItem>
        <FormItem label='选择日期'>
          {
            getFieldDecorator('date1', config)(<DatePicker />)
          }
        </FormItem>
        <FormItem label='请选择日期和时间'>
          {
            getFieldDecorator('datetime1', config)(<DatePicker showTime format='YYYY-MM-DD HH:mm:ss' />)
          }
        </FormItem>
        <FormItem label='请选择日期和时间范围'>
          {
            getFieldDecorator('dateTimeRange1', rangeConfig)(<RangePicker showTime format='YYYY-MM-DD HH:mm:ss' />)
          }
        </FormItem>
        <FormItem {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            注册
          </Button>
        </FormItem>
        <FormItem {...tailFormItemLayout}>
          <Button type="primary" onClick={this.handleDate}>
            输出时间
          </Button>
        </FormItem>
      </Form>)
  }
}

// 创建的表单需要用 Form.create() 包装
const WrappedRegistrationForm = Form.create({ name: 'register' })(MyForm)

export default WrappedRegistrationForm
