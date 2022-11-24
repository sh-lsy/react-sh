import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { useAppSelector, shallowEqual } from '@/store/index'
interface IProps {
  children?: ReactNode
}

const child2: FC<IProps> = () => {
  const { count, message } = useAppSelector(
    (state) => ({
      count: state.counter.count,
      message: state.counter.message
    }),
    shallowEqual
  )
  return (
    <div>
      child2
      <h3>{count}</h3>
      <h3>{message}</h3>
    </div>
  )
}

export default memo(child2)
