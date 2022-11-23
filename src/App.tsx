import React, { Suspense } from 'react'
import routes from './router'
import { useRoutes } from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Suspense fallback="">
        <div className="main">{useRoutes(routes)}</div>
      </Suspense>
    </div>
  )
}

export default App
