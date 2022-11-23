import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const child2: FC<IProps> = () => {
  return <div>child2</div>
}

export default memo(child2)
