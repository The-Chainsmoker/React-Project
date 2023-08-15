import React, { Component } from 'react'
import { connect } from 'react-redux'
import { nanoid } from 'nanoid'
import { createAddPersonAction } from '../../redux/action/person'
class Person extends Component {
  change = () => {
    const name = this.nameNode.value
    const age = this.ageNode.value

    const item = { name, age, id: nanoid() }
    this.props.addPerson(item)
  }

  render() {
    console.log('Person:', this.props)
    return (
      <div>
        <h1>Person组件:</h1>
        <h2>上方组件求和为：{this.props.person.countReducer}</h2>
        <input ref={(e) => (this.nameNode = e)} type="text" />
        <input ref={(e) => (this.ageNode = e)} type="text" />
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
  (state) => ({ person: state, length: state.personReducer.length }),
  {
    addPerson: createAddPersonAction,
  }
)(Person)
