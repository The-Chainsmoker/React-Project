import React, { Component } from 'react'
import './App.css'
import Search from './components/Search/Search'
import List from './components/List/List'

export default class App extends Component {
  state = {
    gitList: [],
    isFist: true,
    isLoading: false,
    err: '',
  }

  updateGitList = (objState) => {
    this.setState(objState)
  }

  render() {
    return (
      <div className="container">
        <Search updateGitList={this.updateGitList} />
        <List {...this.state} />
      </div>
    )
  }
}
