import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const child1: FC<IProps> = () => {
  return <div>child1</div>
}

export default memo(child1)
