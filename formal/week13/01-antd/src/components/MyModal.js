import React, { Component } from 'react'

import { Modal, Button } from 'antd'

export default class MyModal extends Component {
  constructor (props, context) {
    super()
    this.state = {
      visible: false
    }
  }

  showModal = () => {
    this.setState({
      visible: true
    })
  }

  handleOk = () => {
    console.log('确定')
    this.setState({
      visible: false
    })
  }

  handleCancel = () => {
    console.log('取消')
    this.setState({
      visible: false
    })
  }
  render () {
    return (<div>
      <Button type='primary' onClick={this.showModal} >Open Modal</Button>
      <Modal title='model标题'
             visible={this.state.visible}
             onOk={this.handleOk}
             onCancel={this.handleCancel} >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>

    </div>)
  }
}
