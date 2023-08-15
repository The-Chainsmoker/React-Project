import React from 'react'
import Header from './component/Header'
import Footer from './component/Footer'
import List from './component/List'
import './App.css'

class App extends React.Component {
  state = {
    todos: [
      { id: '001', name: '吃饭', done: true },
      { id: '002', name: '睡觉', done: true },
      { id: '003', name: '上学', done: true },
    ],
  }
  addTodo = (todoItem) => {
    const { todos } = this.state
    let newTodo = [todoItem, ...todos]
    this.setState({ todos: newTodo })
  }
  updateTodo = (id) => {
    return (event) => {
      const { todos } = this.state
      // done 会覆盖掉 findItem 里面的 done
      let newTodos = todos.map((item) => {
        if (item.id === id) {
          return { ...item, done: event.target.checked }
        } else {
          return item
        }
      })

      this.setState({ todos: newTodos })
    }
  }
  deleteTodo = (id) => {
    const { todos } = this.state
    // todos.splice(
    //   todos.findIndex((item) => item.id === id),
    //   1
    // )

    let newTodos = todos.filter((item) => item.id !== id)

    this.setState({ todos: newTodos })
  }

  allCheckTodo = (event) => {
    const { todos } = this.state
    let newTodos = todos.map((item) => ({
      ...item,
      done: event.target.checked,
    }))
    this.setState({ todos: newTodos })
  }

  clearSelectCheck = (event) => {
    const { todos } = this.state
    let newTodos = todos.filter((item) => !item.done)
    this.setState({ todos: newTodos })
  }

  render() {
    return (
      <div id="root">
        <div className="todo-container">
          <div className="todo-wrap">
            <Header addTodo={this.addTodo} />
            <List
              {...this.state}
              updateTodo={this.updateTodo}
              deleteTodo={this.deleteTodo}
            />
            <Footer
              {...this.state}
              allCheckTodo={this.allCheckTodo}
              clearSelectCheck={this.clearSelectCheck}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default App
