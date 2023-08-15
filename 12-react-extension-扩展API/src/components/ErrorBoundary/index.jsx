import React, { Component } from 'react'

export default class Parent extends Component {
  state = {
    errorMsg: '',
  }
  // 生命周期函数，一旦后台组件报错，就会触发
  static getDerivedStateFromError(error) {
    console.log('getDerivedStateFromError:', error)

    return {
      //相对于执行 this.setState({})
      errorMsg: true,
    }
  }

  componentDidCatch(error) {
    // 统计页面的错误。发送请求发送到后台去
    console.log(error)
  }

  render() {
    return (
      <div>
        index
        {this.state.errorMsg ? <h1>网络请求异常,请稍后再试</h1> : <Childern />}
      </div>
    )
  }
}

class Childern extends Component {
  state = {
    name: '小明',
  }

  componentDidMount() {
    setTimeout(() => this.setState({ name: {} }), 2000)
  }

  render() {
    //抛出不可解析对象错误
    return <div>Childern {this.state.name}</div>
  }
}
