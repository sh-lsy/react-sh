import React from 'react'
import Person from './views/Person'
import Home from './views/home'
import About from './views/about'
import {
  HashRouter,
  Route,
} from "react-router-dom";
export default function index() {
  return (
    <div>
      <HashRouter>
        <Route path="/home" component={Home} />
        <Route path="/person">
          <Person></Person>
        </Route>
        <Route path="/about">
          <About></About>
        </Route>
      </HashRouter>
    </div>
  )
}
