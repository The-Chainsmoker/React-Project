import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './index.css'

export default class Item extends Component {
  static proTypes = {
    item: PropTypes.object.isRequired,
    updateTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
  }

  state = { show: false }

  handle = (flag) => {
    return () => {
      let { show } = this.state
      show = flag
      this.setState({ show })
    }
  }

  render() {
    const { show } = this.state
    const { item, updateTodo, deleteTodo } = this.props
    return (
      <li
        onMouseEnter={this.handle(true)}
        onMouseLeave={this.handle(false)}
        style={{ backgroundColor: show ? '#ccc' : '#fff' }}
      >
        <label>
          <input
            onChange={updateTodo(item.id)}
            type="checkbox"
            checked={item.done}
          />
          <span>{item.name}</span>
        </label>
        <button
          onClick={() => {
            deleteTodo(item.id)
          }}
          className="btn btn-danger"
          style={{ display: show ? 'block' : 'none' }}
        >
          删除
        </button>
      </li>

      /*
       <li>
         <label>
           <input type="checkbox" />
           <span>xxxxx</span>
         </label>
         <button className="btn btn-danger" style={{ display: 'none' }}>
           删除
         </button>
       </li>
      */
    )
  }
}
