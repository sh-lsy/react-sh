import React, { useState,useRef } from 'react'

export default function UseRef() {
  let [count, setCount] = useState(0)
  let mycount = useRef(0)
  return (
    <div>
      <h2>UseRef</h2>
      <button onClick={() => {
        setCount(count+1)
        mycount.current++
      }}>+</button>
      {count}--- {mycount.current}
    </div>
  )
}
