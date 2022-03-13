import React, {useState} from 'react'

export default function useStateDemo() {
  const [name, setName] = useState('skye')
  const [age] = useState(18)
  return (
    <div>
      <h2>useState</h2>
      <div>
        <button onClick={() => {
          setName('skye' + Math.random().toFixed(2))
        }}>change</button>
        name: {name} &nbsp;
        age: {age}
      </div>
    </div>
  )
}
