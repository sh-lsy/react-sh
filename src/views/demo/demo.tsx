import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
  name: string
  age: number
  height?: number
}

const Demo: FC<IProps> = (props) => {
  return (
    <div>
      <div>name: {props.name}</div>
      <div>age: {props.age}</div>
      <div>height: {props.height}</div>
      <div>{props.children}</div>
    </div>
  )
}
Demo.defaultProps = {
  name: 'skye',
  age: 18,
  height: 169
}

export default memo(Demo)
