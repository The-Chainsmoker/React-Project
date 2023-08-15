import React from 'react'
import { NavLink, Route, Routes, Outlet } from 'react-router-dom'
import MyNavLink from '../../components/MyNavLink'
import Message from './Message'
import News from './News'
import { useOutlet } from 'react-router-dom'
export default function Home() {
  // console.log('useOutlet', useOutlet())
  return (
    <div>
      <h3>我是Home的内容</h3>
      <div>
        <ul className="nav nav-tabs">
          <li>
            <NavLink to="news" className="list-group-item">
              News
            </NavLink>
          </li>
          <li>
            <NavLink to="/home/message" className="list-group-item">
              Message
            </NavLink>
          </li>
        </ul>
      </div>
      <div>
        {/* <Routes>
          <Route path="/home/message" component={Message}></Route>
          <Route path="/home/news" component={News}></Route>
        </Routes> */}

        <Outlet />
      </div>
    </div>
  )
}
