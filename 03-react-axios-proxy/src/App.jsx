import React, { Component } from 'react'
import axios from 'axios'

export default class App extends Component {
  request = () => {
    // axios.get('http://localhost:3000/students').then((res) => console.log(res))
    axios
      .get('http://localhost:3000/api1/students')
      .then((res) => console.log(res))
  }

  request1 = () => {
    // axios.get('http://localhost:3000/students').then((res) => console.log(res))
    axios.get('/api2/cars').then((res) => console.log(res))
  }

  render() {
    return (
      <div>
        <button onClick={this.request} className="btn">
          请求学生
        </button>
        <button onClick={this.request1} className="btn">
          请求汽车
        </button>
      </div>
    )
  }
}
