import React, { Component } from 'react'
import './classCom.css'
export default class event extends Component {
  constructor() {
    super()
    this.a = 100
    this.state = {
      list: ['111', '222', '333']
    }
  }
  render() {
    return (
      <div>
        <button onClick={() => {
          console.log('click1', this.a)
        }}>click1</button>
        <button onClick={this.click2.bind(this)}>click2</button>
        <button onClick={this.click3}>click3</button>
        <button onClick={ () => {
          this.click4()
        }}>click4</button>
      </div>
    )
  }
  click2() {
    console.log('click2', this.a)
  }
  click3 = () => {
    console.log('click3', this.a)
  }
  click4 = () => {
    console.log('click4', this.a)
  }
}
