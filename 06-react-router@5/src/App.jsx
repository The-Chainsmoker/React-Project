import React, { Component, Suspense, lazy } from 'react'
import {
  Link,
  NavLink,
  HashRouter,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'
import MyNavLink from './components/MyNavLink'
import Loading from './components/Loading'
import Head from './pages/Head'
//懒加载
const About = lazy(() => import('./pages/About'))
const Home = lazy(() => import('./pages/Home'))

export default class App extends Component {
  render() {
    return (
      <div id="root">
        <div>
          <div className="row">
            <div className="col-xs-offset-2 col-xs-8">
              <div className="page-header">
                <h2>React Router Demo</h2>
                <Head />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-2 col-xs-offset-2">
              <div className="list-group">
                {/*
                <a className="list-group-item active" href="./about.html">
                  About
                </a>
                <a className="list-group-item" href="./home.html">
                  Home
                </a>
                */}

                {/* 编写路由链接 */}
                {/*
                <Link className="list-group-item" to="/home">
                  Home
                </Link>
                <Link className="list-group-item" to="/about">
                  About
                </Link>
                 */}

                {/*
                <NavLink
                  activeClassName="active"
                  className="list-group-item"
                  to="/home"
                >
                  Home
                </NavLink>
                <NavLink
                  activeClassName="active"
                  className="list-group-item"
                  to="/about"
                >
                  About
                </NavLink>
                */}

                {/* 自定义组件 */}
                <MyNavLink to="/home">Home</MyNavLink>
                <MyNavLink to="/about">About</MyNavLink>
              </div>
            </div>
            <div className="col-xs-6">
              <div className="panel">
                <div className="panel-body">
                  {/* <h3>我是About的内容</h3> */}
                  {/* 注册路由 */}
                  <Suspense fallback={<Loading />}>
                    <Switch>
                      <Route path="/home" component={Home} />
                      <Route path="/about" component={About} />
                      <Redirect to="home"></Redirect>
                    </Switch>
                  </Suspense>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
