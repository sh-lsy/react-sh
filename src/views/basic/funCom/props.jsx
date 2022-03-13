import React from 'react'

export default function props(props) {
  console.log(props)
  let {bg, title} = props
  return (
    <div style={{background:bg }}>
      <h2>函数式props</h2>
      <h3>{title}</h3>
    </div>
  )
}
