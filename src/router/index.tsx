import React, { lazy } from 'react'
import { Navigate } from 'react-router-dom'
import type { RouteObject } from 'react-router-dom'

const Demo = lazy(() => import('@/views/demo'))
const Child1 = lazy(() => import('@/views/demo/cViews/child1'))
const Child2 = lazy(() => import('@/views/demo/cViews/child2'))

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to="/demo" />
  },
  {
    path: '/demo',
    element: <Demo />,
    children: [
      {
        path: '/demo',
        element: <Navigate to="/demo/child1" />
      },
      {
        path: '/demo/child1',
        element: <Child1 />
      },
      {
        path: '/demo/child2',
        element: <Child2 />
      }
    ]
  }
]

export default routes
