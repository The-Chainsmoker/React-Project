import React, { Component } from 'react'
import qs from 'qs'
import {
  useParams,
  useMatch,
  useLocation,
  useSearchParams,
} from 'react-router-dom'
export default function Detail() {
  const arrList = [
    { id: '1', context: '中国', title: '你好' },
    { id: '2', context: '美国', title: '篮球' },
    { id: '3', context: '西班牙', title: '足球' },
  ]

  /** params
   console.log(useMatch('home/message/detail/:id/:message/'))
   console.log('useParams', useParams())
   const { id } = useParams()
  */

  /** search
   console.log(useLocation())
   const [search, setSearch] = useSearchParams()
   const id = search.get('id')
  */

  const {
    state: { id },
  } = useLocation()

  const obj = arrList.find((item) => item.id === id) || {}
  return (
    <ul>
      <li>ID:{obj.id}</li>
      <li>TITLE:{obj.title}</li>
      <li>CONTEXT:{obj.context}</li>

      {/* search
      <button
        onClick={() => {
          setSearch('name=设置名字&age=设置年龄')
        }}
      >
        设置参数
      </button>
      */}
    </ul>
  )
}
