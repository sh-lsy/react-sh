import React, {useContext, useEffect, useState} from 'react'
const GlobalContext  = React.createContext() //创建context对象
export default function UseContext() {
  const [list, setList] = useState([])
  const [info, setInfo] = useState('')
  useEffect(() => {
    setTimeout(() => {
      setList([
        {
          id:1,
          title: '111',
          text: 'dec111'
        },
        {
          id:2,
          title: '222',
          text: 'dec222'
        },
        {
          id:3,
          title: '333',
          text: 'dec333'
        }
      ])
    },1000)
  },[])
  return (
    <GlobalContext.Provider value={
      {
        info:info,
        changeInfo: (val) => {
          setInfo(val)
        }
      }
    }>
      <div>
        <h2>UseContext{info}</h2>
        <div>
          <Left list={list}></Left>
          <Right></Right>
        </div>
      </div>
    </GlobalContext.Provider>

  )
}
function Left(props) {
  let {list} = props
  const value = useContext(GlobalContext)
  return (
    <div>
      <h2>Left</h2>
      <ul>
        {
          list.map(item => 
            <li key={item.id} onClick={()=> {
              value.changeInfo(item.text)
            }}>{item.title}</li>
          )
        }
      </ul>
    </div>
  )
}
function Right() {
  const value = useContext(GlobalContext)
  return (
    <div>
      <h2>Detail:</h2>
      <div>
        {value.info}
      </div>
    </div>
  )
}

