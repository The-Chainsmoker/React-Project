import React, { Component } from 'react'
import qs from 'qs'
export default class Detail extends Component {
  arrList = [
    { id: '1', context: '中国', title: '你好' },
    { id: '2', context: '美国', title: '篮球' },
    { id: '3', context: '西班牙', title: '足球' },
  ]

  render() {
    console.log(this.props)

    // 接收 params 参数
    // const {
    //   params: { id, message },
    // } = this.props.match

    //接收 search 参数
    // const { search } = this.props.location
    // const { id } = qs.parse(search.slice(1))
    // console.log(id)

    //接收 state 参数
    const { id, message } = this.props.location.state || {}
    console.log(id, message)

    const obj = this.arrList.find((item) => item.id === id) || {}

    return (
      <ul>
        <li>ID:{obj.id}</li>
        <li>TITLE:{obj.title}</li>
        <li>CONTEXT:{obj.context}</li>
      </ul>
    )
  }
}
