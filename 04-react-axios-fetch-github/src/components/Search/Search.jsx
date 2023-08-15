import React, { Component } from 'react'
import './Search.css'
import axios from 'axios'

export default class Search extends Component {
  change = () => {
    return async () => {
      //解构赋值,获取节点值
      const {
        inputDom: { value: keyword },
      } = this
      const { updateGitList } = this.props
      //http://localhost:5000/search/users?q=xxx
      //https://api.github.com/search/users?q=123
      updateGitList({ isFist: false, isLoading: true })

      //#region
      // axios 请求
      /* axios
        .get(`/api1/search/users?q=${keyword}`)
        .then((res) => {
          const { items } = res.data
          updateGitList({ gitList: items, isLoading: false })
        })
        .catch((err) => {
          // console.log(err)
          updateGitList({ isLoading: false, err: err.message })
        }) */
      //#endregion

      //#region
      //fetch 请求 一般写法
      /* fetch(`/api1/search/users?q=${keyword}`)
        .then(
          (res) => {
            console.log('联系服务器成功', res)
            // return res.text()
            return res.json()
          },
          (err) => {
            console.log('联系服务器失败', err)
            // return new Promise(() => {})
          }
        )
        .then((res) => {
          console.log('获取数据成功', res)
        })
        .catch((err) => {
          console.log('获取数据失败', err)
          // return new Promise(() => {})
        }) */
      //#endregion

      //fetch 请求 async await 写法 (try catch 捕获同步任务异常)
      try {
        const response = await fetch(`/api1/search/users?q=${keyword}`)
        const data = await response.json()
        const { items } = data
        updateGitList({ gitList: items, isLoading: false })
      } catch (err) {
        console.log('错误异常:', err)
      }
    }
  }

  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">Search Github Users</h3>
        <div>
          <input
            ref={(dom) => (this.inputDom = dom)}
            type="text"
            placeholder="enter the name you search"
          />
          &nbsp;<button onClick={this.change()}>Search</button>
        </div>
      </section>
    )
  }
}
