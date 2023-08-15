import React from 'react'
import ReactDOM from 'react-dom'
//引入App组件
import App from './App'

//渲染App到页面
ReactDOM.render(<App />, document.getElementById('root'))

//使用了react-redux后也不用再自己检测redux中状态的改变了，容器组件可以自动完成这个工作
// store.subscribe(() => {
//   ReactDOM.render(<App />, document.getElementById('root'))
// })
