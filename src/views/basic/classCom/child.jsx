import React, { Component } from 'react'

export default class child extends Component {
  render() {
    return (
      <div>
        <h2>插槽</h2>
        {/* 会显示完 */}
        {this.props.children}
        {/* 出入一一对应展示 */}
        {this.props.children[0]}
        {this.props.children[1]}
      </div>
    )
  }
}
