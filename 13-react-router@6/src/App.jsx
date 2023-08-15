import React, { Suspense, lazy } from 'react'
import {
  Link,
  NavLink,
  HashRouter,
  Route,
  Routes,
  Navigate,
  useRoutes,
} from 'react-router-dom'
import Head from './pages/Head'
import MyNavLink from './components/MyNavLink'
import Loading from './components/Loading'
import routes from './routes'
import './App.css'
// import Head from './pages/Head'
//懒加载
const About = lazy(() => import('./pages/About'))
const Home = lazy(() => import('./pages/Home'))

export default function App() {
  const element = useRoutes(routes)

  function getMyActiveClass({ isActive }) {
    return isActive ? 'list-group-item myActive' : 'list-group-item'
  }

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
              <NavLink className={getMyActiveClass} to="/home">
                Home
              </NavLink>
              <NavLink className={getMyActiveClass} to="/about">
                About
              </NavLink>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                <Suspense fallback={<Loading />}>
                  {/* Routes 代替了 Switch 组件*/}
                  {/* <Routes>
                    <Route caseSensitive path="/home" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route
                      path="/"
                      element={<Navigate to="/about" element={<About />} />}
                    />
                  </Routes> */}
                  {element}
                </Suspense>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
