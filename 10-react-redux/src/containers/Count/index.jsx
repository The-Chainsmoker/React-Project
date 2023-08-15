import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  createIncrementAction,
  createDecrementAction,
  createAsyncIncrementAction,
} from '../../redux/action/count'

class CountUI extends Component {
  increment = () => {
    const { value } = this.selectNumber
    this.props.add(value * 1)
  }
  decrement = () => {
    const { value } = this.selectNumber
    this.props.reduce(value * 1)
  }
  incrementIfOdd = () => {
    const { value } = this.selectNumber
    if (this.props.count.countReducer % 2 !== 0) {
      this.props.add(value * 1)
    }
  }
  incrementAsync = () => {
    const { value } = this.selectNumber
    this.props.asyncAdd(value * 1, 500)
  }

  render() {
    return (
      <div>
        <h1>Count组件</h1>
        <h3>下方组件的长度为: {this.props.count.personReducer.length}</h3>
        <h1>当前求和为：{this.props.count.countReducer}</h1>
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

/**
 * 1.mapStateToProps函数返回是一个对象
 * 2.返回的对象合并到 CountUI 组件的 props 对象中
 * 3.mapStateToProps用于传递状态
 */
function mapStateToProps(state) {
  //state 的参数等同于 store.getState()
  return { count: state }
}

/**
 * 1.mapDispatchToProps函数返回是一个对象
 * 2.返回的对象合并到 CountUI 组件的 props 对象中
 * 3.mapDispatchToProps用于传递操作状态的方法
 */
function mapDispatchToProps(dispatch) {
  // dispatch 参数等同于 store.dispatch(action)
  return {
    add: (value) => {
      dispatch(createIncrementAction(value))
    },
    reduce: (value) => {
      dispatch(createDecrementAction(value))
    },
    asyncAdd: (value, time) => {
      dispatch(createAsyncIncrementAction(value, time))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CountUI)

//一般简写
// export default connect(
//   (state) => ({ count: state }),

//   //mapDispatchToProps的一般写法
//   /* (dispatch) => ({
//     add: (value) => {
//       dispatch(createIncrementAction(value * 1))
//     },
//     reduce: (value) => {
//       dispatch(createDecrementAction(value * 1))
//     },
//     asyncAdd: (value, time) => {
//       dispatch(createAsyncIncrementAction(value * 1, time))
//     },
//   }) */

//   //mapDispatchToProps的简写 , 只需传入包含对象函数体 , 容器组件会自动装配分发给UI组件
//   {
//     add: createIncrementAction,
//     reduce: createDecrementAction,
//     asyncAdd: createAsyncIncrementAction,
//   }
// )(CountUI)
