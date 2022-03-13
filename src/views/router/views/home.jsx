import React from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'
import HomeDec from './homeSec/homeDec'
import News from './homeSec/news'
export default function home() {
  return (
    <div>
      <p style={{height: '50px', background: 'skyBlue'}}>home</p>
      {/* 嵌套路由 */}
      <Switch>
          <Route path="/home/homeDec" component={HomeDec}/>
          <Route path="/home/news" component={News}/>
          <Redirect from="/home" to="/home/news"/> 
      </Switch>
    </div>
  )
}
