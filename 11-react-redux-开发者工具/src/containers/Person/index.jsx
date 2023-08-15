import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addAction } from '../../redux/action/person'
import { nanoid } from 'nanoid'

class PersonUI extends Component {
  change = () => {
    const name = this.nameNode.value
    const age = this.ageNode.value

    const item = { name, age, id: nanoid() }
    this.props.add_person(item, 1000)
  }

  render() {
    // console.log('Person:', this.props)
    return (
      <div>
        <h1>Person组件:</h1>
        <h2>上方组件求和为:{this.props.num}</h2>
        <input
          ref={(e) => (this.nameNode = e)}
          type="text"
          placeholder="name"
        />
        <input ref={(e) => (this.ageNode = e)} type="text" placeholder="age" />
        <button onClick={this.change}>确定</button>
        {this.props.person.personReducer.map((item) => (
          <div key={item.id}>
            {item.name} -- {item.age}
          </div>
        ))}
      </div>
    )
  }
}
export default connect(
  (store) => ({
    person: store,
    num: store.countReducer,
  }),
  {
    add_person: addAction,
  }
)(PersonUI)
