import { Component, useState, createRef, useRef } from 'react'

interface iocState {
  name: string
  [selfName: string]: any
}

interface iocProps {
  age: string
}

export default class index extends Component {
  render() {
    return (
      <div>
        <Children age="10" />
      </div>
    )
  }
}

class Children extends Component<iocProps, iocState> {
  state = {
    name: '获取输入框值',
  }

  myref = createRef<HTMLInputElement>()

  render() {
    return (
      <div>
        <div>{this.state.name}</div>
        <input ref={this.myref} />
        <button
          onClick={() => {
            console.log(this.myref)
            this.setState({
              name: (this.myref.current as HTMLInputElement).value,
            })
          }}
        >
          提交
        </button>
      </div>
    )
  }
}
