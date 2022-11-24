import React, { Suspense } from 'react'
import routes from './router'
import { useRoutes } from 'react-router-dom'
import Demo from '../src/views/demo/demo'
function App() {
  return (
    <div className="App">
      <Demo age={18} name={'skye'} />
      <Suspense fallback="">
        <div className="main">{useRoutes(routes)}</div>
      </Suspense>
    </div>
  )
}

export default App
