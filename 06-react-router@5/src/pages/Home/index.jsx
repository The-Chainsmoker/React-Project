import React, { Component } from 'react'
import { NavLink, Switch, Route } from 'react-router-dom'
import MyNavLink from '../../components/MyNavLink'
import Message from './Message'
import News from './News'

export default class Home extends Component {
  render() {
    return (
      <div>
        <h3>我是Home的内容</h3>
        <div>
          <ul className="nav nav-tabs">
            <li>
              {/* <a className="list-group-item active">News</a> */}
              <MyNavLink to="/home/news" className="list-group-item">
                News
              </MyNavLink>
            </li>
            <li>
              <MyNavLink to="/home/message" className="list-group-item">
                Message
              </MyNavLink>
            </li>
          </ul>
        </div>
        <div>
          <Switch>
            <Route path="/home/message" component={Message}></Route>
            <Route path="/home/news" component={News}></Route>
          </Switch>
        </div>
      </div>
    )
  }
}
