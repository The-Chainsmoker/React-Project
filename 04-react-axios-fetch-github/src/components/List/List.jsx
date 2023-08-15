import React, { Component } from 'react'
import './List.css'

export default class List extends Component {
  render() {
    const { gitList, isFist, isLoading, err } = this.props
    return (
      <div className="row">
        {/* {isFist ? <h1>欢迎使用,输入关键字,点击搜素</h1> : ''} */}
        {/* <h1>欢迎使用,输入关键字,点击搜素</h1>
        <h1>加载中...</h1>
        <h1>错误信息</h1> */}
        {isFist ? (
          <h1>欢迎使用,输入关键字,点击搜素</h1>
        ) : isLoading ? (
          <h1>加载中...</h1>
        ) : gitList.length > 0 ? (
          gitList.map((item) => (
            <div className="card" key={item.login}>
              <a href={item.html_url} rel="noreferrer" target="_blank">
                <img
                  alt="head_portrait"
                  src={item.avatar_url}
                  style={{ width: '100px' }}
                />
              </a>
              <p className="card-text">{item.login}</p>
            </div>
          ))
        ) : (
          <h1>{err}</h1>
        )}
        {/* <div className="card">
          <a href="https://github.com/reactjs" rel="noreferrer" target="_blank">
            <img
              alt="head_portrait"
              src="https://avatars.githubusercontent.com/u/6412038?v=3"
              style={{ width: '100px' }}
            />
          </a>
          <p className="card-text">reactjs</p>
        </div> */}
      </div>
    )
  }
}
