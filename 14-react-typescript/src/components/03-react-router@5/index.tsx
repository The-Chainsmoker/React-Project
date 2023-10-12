import React from 'react'
import {
  HashRouter,
  Redirect,
  Route,
  Switch,
  RouteComponentProps,
} from 'react-router-dom'

export default function index() {
  return (
    <div>
      <HashRouter>
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/about/:msg" component={About} />
          <Redirect from="/" to="/home" />
        </Switch>
      </HashRouter>
    </div>
  )
}

function Home({ history }: RouteComponentProps) {
  return (
    <div>
      <div>Home</div>
      <button
        onClick={() => {
          history.push('/about/传递的值')
        }}
      >
        跳转到Home
      </button>
    </div>
  )
}
interface myParams {
  msg: string
}

function About({ match }: RouteComponentProps<myParams>) {
  console.log(match)

  return (
    <div>
      <div>About</div>
      <div>接收值:{match.params.msg}</div>
    </div>
  )
}
