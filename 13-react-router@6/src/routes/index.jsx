import { lazy } from 'react'
import { Navigate } from 'react-router-dom'
import Message from '../pages/Home/Message'
import News from '../pages/Home/News'
import Detail from '../pages/Home/Message/Detail'
const About = lazy(() => import('../pages/About'))
const Home = lazy(() => import('../pages/Home'))
//根据路由表生成对应的路由规则
export default [
  {
    path: '/home',
    element: <Home />,
    children: [
      {
        //不允许 path:'/???'
        path: 'message',
        element: <Message />,
        children: [
          {
            // path: 'detail/:id/:message/',
            path: 'detail/',
            element: <Detail />,
          },
        ],
      },
      {
        path: 'news',
        element: <News />,
      },
    ],
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/',
    element: <Navigate to="/about" element={<About />} />,
  },
]
