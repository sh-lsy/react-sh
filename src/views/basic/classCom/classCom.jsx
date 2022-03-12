import React from "react";
import './classCom.css'
class ClassCom extends React.Component{
  render() {
    const style = {
      color: 'red',
      fontSize: '30px'
    }
    return (
      <div style={style}>
        类组件
        <div className="active">
          外部css
        </div>
        <label htmlFor="username">用户名：</label>
        <input type="text" id="username"/>
      </div>
    )
  }
}
export default ClassCom