import { useEffect } from 'react'
import routes from './router'
import { useRoutes, useLocation, useNavigate } from 'react-router-dom'

function ToHome() {
  const navigateTo = useNavigate()
  useEffect(() => {
    navigateTo('/')
  })

  return <div></div>
}

function ToLogin() {
  const navigateTo = useNavigate()
  useEffect(() => {
    navigateTo('/login')
  })

  return <div></div>
}

function BeforeRouter() {
  const element = useRoutes(routes)
  const location = useLocation()
  const token = localStorage.getItem('token')

  if (location.pathname === '/login' && token) {
    //这里执行组件,相当于在 render 里执行
    return <ToHome />
  }

  if (location.pathname !== '/login' && !token) {
    //这里执行组件,相当于在 render 里执行
    return <ToLogin />
  }

  return <div>{element}</div>
}

function App() {
  /* 因为 render 先执行,再到 componentDidMount 执行, useEffect 执行 navigateTo('/') 会导致先路由到指定页面, 再路由守卫到指定页面
   useEffect(() => {
    if (location.pathname === '/login' && token) {
      navigateTo('/')
    }

    if (location.pathname !== '/login' && !token) {
      navigateTo('/login')
    }
   }, [])
  */
  /*
   const element = useRoutes(routes)
   return <>{element}</>
  */

  return (
    <div>
      <BeforeRouter />
    </div>
  )
}

export default App
