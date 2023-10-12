import { lazy, Suspense } from 'react'
import { Navigate } from 'react-router-dom'
import Error from '@/components/Error'
import Login from '@/view/Login'
const Home = lazy(() => import('@/view/Home'))
const About = lazy(() => import('@/view/About'))
const User = lazy(() => import('@/view/Home/User'))
const Page1 = lazy(() => import('@/view/Home/Page/Page1'))
const Page2 = lazy(() => import('@/view/Home/Page/Page2'))

const withLoadingComponent = (element: JSX.Element) => (
  <Suspense fallback={<div>加载中...</div>}>{element}</Suspense>
)

const routers = [
  {
    path: '/',
    element: <Home />,
    children: [
      /* {
        path: '/',
        element: <Navigate to="about" />,
      }, */

      {
        path: 'about',
        element: withLoadingComponent(<About />),
      },
      {
        path: 'user',
        element: withLoadingComponent(<User />),
      },
      //二级菜单
      {
        path: '/page/page1',
        element: withLoadingComponent(<Page1 />),
      },
      {
        path: '/page/page2',
        element: withLoadingComponent(<Page2 />),
      },
    ],
  },
  {
    path: '/login',
    element: withLoadingComponent(<Login />),
  },
  {
    path: '*',
    element: <Error />,
  },
]

export default routers
