import React, { Component, useState } from 'react'
import { Link, Outlet, Route } from 'react-router-dom'
export default function Message() {
  const [messageArr] = useState([
    { id: '1', message: '消息一' },
    { id: '2', message: '消息二' },
    { id: '3', message: '消息三' },
  ])

  // replace = (id, message) => {
  //   this.props.history.replace(`/home/message/detail/${id}/${message}`)
  // }

  // push = (id, message) => {
  //   this.props.history.push(`/home/message/detail/${id}/${message}`)
  // }

  return (
    <ul>
      {/* state 传参 */}
      {messageArr.map((item) => {
        return (
          <li key={item.id}>
            <Link
              /* params
               to={{
                pathname: `/home/message/detail/${item.id}/${item.message}`,
              }}
              */

              /* search
              to={`/home/message/detail?id=${item.id}&message=${item.message}`}
             */

              to={{ pathname: '/home/message/detail' }}
              state={{ id: item.id, message: item.id }}
            >
              {item.message}
            </Link>
            &nbsp;&nbsp;
          </li>
        )
      })}
      <Outlet />
    </ul>
  )
}
