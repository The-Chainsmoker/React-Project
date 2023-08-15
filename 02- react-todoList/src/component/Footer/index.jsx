import React, { Component } from 'react'
import './index.css'

export default class Footer extends Component {
  render() {
    const { todos, allCheckTodo, clearSelectCheck } = this.props
    const allSum = todos.reduce((pre, now) => pre + 1, 0)
    const selectSum = todos.reduce((pre, now) => pre + (now.done ? 1 : 0), 0)

    return (
      <div className="todo-footer">
        <label>
          <input
            onChange={allCheckTodo}
            type="checkbox"
            checked={allSum === selectSum && allSum > 0 ? true : false}
          />
        </label>
        <span>
          <span>已完成{selectSum}</span> / 全部{allSum}
        </span>
        <button className="btn btn-danger" onClick={clearSelectCheck}>
          清除已完成任务
        </button>
      </div>
    )
  }
}
