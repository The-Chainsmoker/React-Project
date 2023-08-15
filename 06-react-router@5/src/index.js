import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, HashRouter } from 'react-router-dom'
import App from './App'

//18版本以上的写法,相当于ReactDOM.render()
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  //React.StrictMode :检测App组件的代码不合理地方,如使用“已弃用的语法 ref='String' ”会警告
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
)
