import React, { Component } from 'react'
import Detail from './Detail'
import { Link, Route } from 'react-router-dom'
export default class message extends Component {
  state = {
    messageArr: [
      { id: '1', message: '消息一' },
      { id: '2', message: '消息二' },
      { id: '3', message: '消息三' },
    ],
  }

  replace = (id, message) => {
    this.props.history.replace(`/home/message/detail/${id}/${message}`)
  }

  push = (id, message) => {
    this.props.history.push(`/home/message/detail/${id}/${message}`)
  }

  render() {
    return (
      <ul>
        {/* param 传参 */}
        {/* {this.state.messageArr.map((item) => {
          return (
            <li key={item.id}>
              <Link
                replace
                to={`/home/message/detail/${item.id}/${item.message}`}
              >
                {item.message}
              </Link>
              <button onClick={() => this.replace(item.id, item.message)}>
                replace
              </button>
              <button onClick={() => this.push(item.id, item.message)}>
                push
              </button>
              &nbsp;&nbsp;
            </li>
          )
        })} */}
        <hr />

        {/* search 传参 */}
        {/* {this.state.messageArr.map((item) => {
          return (
            <li key={item.id}>
              <Link
                to={{
                  pathname: `/home/message/detail?id=${item.id}&message=${item.message}`,
                }}
              >
                {item.message}
              </Link>
              &nbsp;&nbsp;
            </li>
          )
        })} */}

        {/* state 传参 */}
        {this.state.messageArr.map((item) => {
          return (
            <li key={item.id}>
              <Link
                to={{
                  pathname: '/home/message/detail',
                  state: { id: item.id, message: item.message },
                }}
              >
                {item.message}
              </Link>
              &nbsp;&nbsp;
            </li>
          )
        })}

        {/* param 传参路径 */}
        {/* <Route
          path="/home/message/detail/:id/:message"
          component={Detail}
        ></Route> */}

        {/* search、state 传参路径 */}
        <Route path="/home/message/detail" component={Detail}></Route>
      </ul>
    )
  }
}
