import React, { memo, Suspense } from 'react'
import type { FC, ReactNode } from 'react'
import { Outlet, Link } from 'react-router-dom'
interface IProps {
  children?: ReactNode
}

const demo: FC<IProps> = () => {
  return (
    <div>
      demo
      <div className="nav">
        <Link to="/demo/child1">child1</Link>
        <Link to="/demo/child2">child2</Link>
      </div>
      <Suspense fallback="">
        <Outlet />
      </Suspense>
    </div>
  )
}

export default memo(demo)
