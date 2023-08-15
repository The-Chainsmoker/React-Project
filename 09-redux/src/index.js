import React from 'react'
import ReactDOM from 'react-dom'
import store from './redux/store'
//引入App组件
import App from './App'

//渲染App到页面
ReactDOM.render(<App />, document.getElementById('root'))

//当store的 data 状态发生改变,既发布订阅
store.subscribe(() => {
  ReactDOM.render(<App />, document.getElementById('root'))
})
