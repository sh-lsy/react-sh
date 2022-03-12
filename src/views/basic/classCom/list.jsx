import React, { Component } from 'react'

export default class list extends Component {
  state = {
    list: ['111', '222', '333']
  }
  render() {
    return (
      <div style={{padding: '0 20px'}}>
        <h2>列表循环</h2>
        <ul>
          {
            this.state.list.map(item => 
              <li key={item}>{item}</li>
            )
          }
        </ul>
      </div>
    )
  }
}
