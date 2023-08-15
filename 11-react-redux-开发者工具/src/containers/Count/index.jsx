import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  incrementAction,
  decrementAction,
  addAsyncAction,
} from '../../redux/action/count'

class CountUI extends Component {
  increment = () => {
    const { value } = this.selectNumber
    this.props.add(value * 1)
  }
  decrement = () => {
    const { value } = this.selectNumber
    this.props.redux(value * 1)
  }
  incrementIfOdd = () => {
    const { value } = this.selectNumber
    if (this.props.count.countReducer % 2 !== 0) {
      this.props.add(value * 1)
    }
  }
  incrementAsync = () => {
    const { value } = this.selectNumber
    this.props.add_async(value * 1, 1000)
  }

  render() {
    // console.log('Count:', this.props)
    return (
      <div>
        <h1>Count组件</h1>
        <h3>下方组件的长度为: {this.props.length}</h3>
        <h1>当前求和为 {this.props.count.countReducer}</h1>
        <select ref={(c) => (this.selectNumber = c)}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        &nbsp;
        <button onClick={this.increment}>+</button>&nbsp;
        <button onClick={this.decrement}>-</button>&nbsp;
        <button onClick={this.incrementIfOdd}>当前求和数为奇数</button>&nbsp;
        <button onClick={this.incrementAsync}>异步加</button>
        <hr />
      </div>
    )
  }
}

export default connect(
  (store) => ({ count: store, length: store.personReducer.length }),
  {
    add: incrementAction,
    redux: decrementAction,
    add_async: addAsyncAction,
  }
)(CountUI)
