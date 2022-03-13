import React, {useState,useEffect} from 'react'
import axios from 'axios'
export default function useEffectDemo() {
  const [list, setList] = useState([11, 22])
  const [text, setText] = useState('text')
  useEffect(() => {
    axios.get('/data.json').then(res => {
      console.log(res.data);
      setList(res.data.list)
    }).catch(err => {
      console.log(err)
    })
  }, []) // 传空数组 只执行一次
  useEffect(() => {
    setText(text.substring(0,3))
  }, [text]) // 传空数组 只执行一次

  // useEffect(() => {
  //   window.onresize = () => {
  //     console.log('resize');
  //   }
  //   const timer = setInterval(() => {
  //     console.log('setInterval');
  //   }, 1000)
  //   return () => {
  //     console.log('组件销毁');
  //     window.onresize = null
  //     clearInterval(timer)
  //   }
  // }, [])

  return (
    <div>
      <h2>useEffect</h2>
      <ul>
        list
        {
          list.map(item =>
            <li key={item}>{item}</li>
          )
        }
        <h3>text</h3>
        text: {text}
        <button onClick={() => {
          setText('newText')
        }}>change</button>
      </ul>
    </div>
  )
}
