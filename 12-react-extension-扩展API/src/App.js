import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Hook from './components/Hook'
import MyPureComponet from './components/PureComponent'
import Context from './components/Context'
import RenderProps from './components/RenderProps'
import ErrorBoundary from './components/ErrorBoundary'
export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        {/* <Hook /> */}
        {/* <Context /> */}
        {/* <MyPureComponet /> */}
        {/* <RenderProps /> */}
        <ErrorBoundary />
      </React.Fragment>
    )
  }
}
