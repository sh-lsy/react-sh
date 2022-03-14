import React from 'react'
import style from './news.module.css'
export default function news(props) {
  console.log(props);
  return (
    <div>news
      <button onClick={()=> {
        props.history.push({pathname: '/home/homeDec', state: { test: 'dashboard' }})
      }}>
        go
      </button>
      <span className={style.mBlue}>css导入</span>
    </div>
  )
}
