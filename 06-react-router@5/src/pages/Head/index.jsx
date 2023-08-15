import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class Head extends Component {
  goBack = () => {
    this.props.history.goBack()
  }

  goForward = () => {
    this.props.history.goForward()
  }

  go = () => {
    this.props.history.go(-1)
  }

  render() {
    return (
      <div>
        <button onClick={this.goBack}>goBack</button>
        <button onClick={this.goForward}>goForward</button>
        <button onClick={this.go}>go</button>
      </div>
    )
  }
}

export default withRouter(Head)
