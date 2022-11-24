import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

import { useAppDispatch, useAppSelector, shallowEqual } from '@/store/index'
import { changeCount } from '@/store/modules/counter'
interface IProps {
  children?: ReactNode
}

const child1: FC<IProps> = () => {
  const { count, message } = useAppSelector(
    (state) => ({
      count: state.counter.count,
      message: state.counter.message
    }),
    shallowEqual
  )
  /** 事件处理函数 */
  const dispatch = useAppDispatch()
  const handleClick = (num: number) => {
    dispatch(changeCount(num))
  }

  return (
    <div style={{ margin: '50px' }}>
      <div>couter: {count}</div>
      <div>message: {message}</div>
      <button style={{ marginRight: '30px' }} onClick={() => handleClick(1)}>
        +1
      </button>
      <button onClick={() => handleClick(-1)}>-1</button>
    </div>
  )
}

export default memo(child1)
