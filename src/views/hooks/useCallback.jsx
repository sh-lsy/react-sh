import React, { useCallback, useState } from 'react'

export default function UseCallback() {
  const [count, setCount] = useState(0)
  const Add = useCallback(() => {
    setCount(count+1)
  }, [count])
  return (
    <div>
      <h2>UseCallback</h2>
      <button onClick={Add}>+</button>
      {count}
    </div>
  )
}
