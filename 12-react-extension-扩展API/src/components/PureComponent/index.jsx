import React, { Component, PureComponent } from 'react'

export default class index extends PureComponent {
  state = {
    cart: '奔驰',
  }

  change = () => {
    this.setState({ cart: '雪佛兰' })
  }
  render() {
    console.log('index --- 111')
    return (
      <div>
        <div>{this.state.cart}</div>
        <button onClick={this.change}> 换车 </button>
        <Child cart={'123'} />
      </div>
    )
  }
}

class Child extends PureComponent {
  render() {
    console.log('Child -- 111')
    return <div>Child</div>
  }
}
