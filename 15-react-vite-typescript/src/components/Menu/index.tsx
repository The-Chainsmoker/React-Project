import React, { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { MenuProps, Menu } from 'antd'
import {
  UserOutlined,
  PieChartOutlined,
  DesktopOutlined,
  TeamOutlined,
  FileOutlined,
} from '@ant-design/icons'

type MenuItem = Required<MenuProps>['items'][number]

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem
}

const items: MenuItem[] = [
  // getItem('Option 1', '1', <PieChartOutlined />),
  // getItem('Option 2', '2', <DesktopOutlined />),
  // getItem('User', 'sub1', <UserOutlined />, [
  //   getItem('Tom', '3'),
  //   getItem('Bill', '4'),
  //   getItem('Alex', '5'),
  // ]),
  // getItem('Team', 'sub2', <TeamOutlined />, [
  //   getItem('Team 1', '6'),
  //   getItem('Team 2', '8'),
  // ]),
  // getItem('Files', '9', <FileOutlined />),
  {
    label: 'about',
    key: '/about',
    icon: <DesktopOutlined />,
  },
  {
    label: 'user',
    key: '/user',
    icon: <UserOutlined />,
  },
  {
    label: 'page',
    key: '/page',
    icon: <PieChartOutlined />,
    children: [
      { label: 'page1', key: '/page/page1', icon: <FileOutlined /> },
      { label: 'page2', key: '/page/page2', icon: <FileOutlined /> },
    ],
  },
]

/*
   加载路由时页面侧边栏中选中二级菜单的某一项 ===>
   根据初始化路由匹配二级菜单,并取出含二级菜单的一级菜单的key,赋予openKeys,
   配合菜单 defaultSelectedKeys 属性
 */
function getFirstOpenkey() {
  let firstOpenkey: string = ''
  const selectItem = items.find(
    //在ts中 item!['children'] 表示 item 是个对象
    (item) =>
      item!['children'] &&
      item!['children'].length > 0 &&
      item!['children'].find((item1: any) => item1.key === location.pathname)
  )
  firstOpenkey = selectItem ? (selectItem.key as string) : ''
  console.log('firstOpenkey:', firstOpenkey)
  return firstOpenkey
}

const Menus: React.FC = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const [openKeys, setOpenkeys] = useState([getFirstOpenkey()])

  const goNavRouter = (e: { key: string }) => {
    navigate(e.key)
  }

  const onChange = (key: string[]) => {
    console.log('goChange:', key)
    //打开某项菜单,关闭另一项菜单 (默认打开多项菜单)
    setOpenkeys([key[key.length - 1]])
  }

  const onSelect = (e: any) => {
    console.log('goSelect:', e)
  }

  return (
    <Menu
      theme="dark"
      mode="inline"
      defaultSelectedKeys={[location.pathname]}
      onClick={goNavRouter}
      //获取菜单展开的数组(多项)
      onOpenChange={onChange}
      //获取选中的一项,对菜单无效,
      onSelect={onSelect}
      //当前菜单展开的数组,配合onOpenChange事件更新openKeys值,菜单才能展开
      openKeys={openKeys}
      items={items}
    />
  )
}

export default Menus
