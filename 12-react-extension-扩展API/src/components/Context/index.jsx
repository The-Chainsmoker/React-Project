import React, { Component, createContext } from 'react'
import './index.css'
const myContent = createContext()
export default class index extends Component {
  render() {
    return (
      <div>
        <A />
      </div>
    )
  }
}

class A extends Component {
  state = { name: '小明', age: 12 }

  change = () => {
    this.setState({ age: 19 })
  }

  render() {
    return (
      <div className="A">
        <div>A</div>
        <button onClick={this.change}>点击</button>
        <myContent.Provider value={this.state}>
          <B />
        </myContent.Provider>
      </div>
    )
  }
}
class B extends Component {
  static contextType = myContent

  render() {
    console.log(this.context)
    return (
      <div className="B">
        <div>B</div>
        <div>收到A组件为:{JSON.stringify(this.context)}</div>
        <C />
      </div>
    )
  }
}
function C() {
  return (
    <div className="C">
      <div>c</div>
      <div>
        收到A组件为:
        <myContent.Consumer>
          {(value) => JSON.stringify(value)}
        </myContent.Consumer>
      </div>
    </div>
  )
}
