import React, { useEffect, useMemo, useState } from 'react'
import axios from 'axios'
export default function UseMemo() {
  const [val, setVal] = useState('')
  const [list, setList] = useState([])
  useEffect(() => {
    axios.get('/data.json').then(res => {
      if(JSON.stringify(res.data.list) === JSON.stringify(list)) {
        return
      }
      setList(res.data.list)
    }).catch(err => {
      console.log(err)
    })
  }, [list])
  const filterList = useMemo(() => 
    list.filter(item => 
      item.includes(val)
    , [val, list])
  )
  return (
    <div>
      <h2>UseMemo{val}</h2>
      <input type="text" value={val}  onChange={(e) => {
        setVal(e.target.value)
      }}/>
      <ul>
        {
          filterList.map((item) => 
          <li key={item}>{item}</li>
          )
        }
      </ul>
    </div>
  )
}
