import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'

//18版本以上的写法,相当于ReactDOM.render()
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  //React.StrictMode :检测App组件的代码不合理地方,如使用“已弃用的语法 ref='String' ”会警告
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

//测量应用程序的性能
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
