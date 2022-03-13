import React, { useState } from 'react'
import UseState from './useState'
import UseEffect from './useEffect'
import UseCallback from './useCallback'
import UseMemo from './useMemo'
import UseRef from './useRef'
import UseContext from './useContext'
import UseReducer from './useReducer'
import SelfHooks from './selfHooks'
export default function Index() {
  const [showEffect, setshowEffect] = useState(true)
  return (
    <div>
      <UseState />
      <button onClick={() => {
        setshowEffect(!showEffect)
      }}>控制UseEffect显示</button>
      {showEffect && <UseEffect />}
      <UseCallback />
      <UseMemo />
      <UseRef />
      <UseContext />
      <UseReducer />
      <SelfHooks />
    </div>
  )
}
