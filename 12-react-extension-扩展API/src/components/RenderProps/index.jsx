import React, { Component } from 'react'
import './index.css'
export default class index extends Component {
  render() {
    return (
      <div className="Root">
        Root
        <A render={(data) => <B {...data} />}></A>
      </div>
    )
  }
}

class A extends Component {
  render() {
    return (
      <div className="A">
        A...{this.props.render({ name: '小明', age: 24 })}
      </div>
    )
  }
}

class B extends Component {
  render() {
    console.log(this.props)
    return <div className="B">B...</div>
  }
}
