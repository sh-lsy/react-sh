import React, { Component } from 'react'

export default class shoukong extends Component {
  myInp = React.createRef()
  state = {
    text: 'input Test'
  }
  render() {
    return (
      <div>
        <h2>非受控</h2>
        <input 
          type="text"
          defaultValue={this.state.text} 
          ref={this.myInp} placeholder="请输入用户名"/>
        <button onClick={this.submit}>登录</button>
        <button onClick={this.reset}>重置</button>
        <h2>受控</h2>
        <input 
          type="text"
          value={this.state.text} 
          placeholder="请输入用户名"
          onChange={(e) => {
            console.log(e.target.value);
            this.setState({
              text: e.target.value
            })
          }}/>
        <button onClick={() => {
          console.log(this.state.text);
        }}>登录</button>
        <button onClick={() => {
          this.setState({
            text: ''
          })
        }}>重置</button>
      </div>
    )
  }
  submit = () => {
    console.log('submit',this.myInp.current.value);
  }
  reset = () => {
    this.myInp.current.value = ''
    console.log('reset');
  }
}
