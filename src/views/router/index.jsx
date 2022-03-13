import React from 'react'
import Person from './views/Person'
import Home from './views/home'
import About from './views/about'
import {
  HashRouter,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
export default function index() {
  return (
    <div>
      <HashRouter>
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/person">
            <Person></Person>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          {/* 重定向 模糊匹配 */}
          <Redirect from="/" to="/home" />
          {/* 精确匹配  exact*/}
          {/* <Redirect from="/" to="/home" exact/> */}
        </Switch>
      </HashRouter>
    </div>
  )
}
