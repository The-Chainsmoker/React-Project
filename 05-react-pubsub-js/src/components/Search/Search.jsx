import React, { Component } from 'react'
import './Search.css'
import axios from 'axios'
import PubSub from 'pubsub-js'

export default class Search extends Component {
  change = () => {
    return () => {
      //解构赋值,获取节点值
      const {
        inputDom: { value: keyword },
      } = this

      //http://localhost:5000/search/users?q=xxx
      //https://api.github.com/search/users?q=123

      //消息发布
      PubSub.publish('change', { isFist: false, isLoading: true })

      axios
        .get(`/api1/search/users?q=${keyword}`)
        .then((res) => {
          const { items } = res.data
          // updateGitList({ gitList: items, isLoading: false })
          PubSub.publish('change', { gitList: items, isLoading: false })
        })
        .catch((err) => {
          // console.log(err)
          // updateGitList({ isLoading: false, err: err.message })
          PubSub.publish('change', { isLoading: false, err: err.message })
        })
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
