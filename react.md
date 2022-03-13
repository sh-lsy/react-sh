#### setState
- setState处在同步的逻辑中，异步更新状态，更新真实dom
- setState处在异步的逻辑中，同步更新状态，同步更新真实dom
- setState 接受第二个参数，第二个参数是回调函数，状态和dom更新完成后会被触发。
#### 属性（props）
(1) 在组件上通过key=value 写属性,通过this.props获取属性,这样组件的可复用性提高了。
(2) 注意在传参数时候，如果写成isShow="true" 那么这是一个字符串 如果写成isShow={true} 这个是布尔值
(3)当外部class名字与props值相同时 可以使用es6语法 {...obj} 进行props传值

- 属性验证(propTypes)
```jsx
static propTypes = {
    title:propTypes.string,
    isShowSectitle: propTypes.bool
}
// 函数只能使用该形式
*.propTypes = {
    title:propTypes.string,
    isShowSectitle: propTypes.bool
}
```

- 默认属性值（defaultProps）

```jsx
import propTypes from 'prop-types'
static defaultProps = {
    title: '默认props',
    isShowSectitle: true
}
// 函数只能使用该形式
*.defaultProps = {
    title: '默认props',
    isShowSectitle: true
}

```

- 函数式 需要定义参数接受
```
import React from 'react'

export default function props(props) {
  console.log(props)
  let {bg, title} = props
  return (
    <div style={{background:bg }}>
      <h2>函数式props</h2>
      <h3>{title}</h3>
    </div>
  )
}
```
#### 属性vs状态
相似点：都是纯js对象，都会触发render更新，都具有确定性（状态/属性相同，结果相同）
不同点：
1. 属性能从父组件获取，状态不能
2. 属性可以由父组件修改，状态不能
3. 属性能在内部设置默认值，状态也可以，设置方式不一样
4. 属性不在组件内部修改，状态要在组件内部修改
5. 属性能设置子组件初始值，状态不可以
6. 属性可以修改子组件的值，状态不可以
- state 的主要作用是用于组件保存、控制、修改自己的可变状态。 state 在组件内部初始化，可以被组件自身修改，而外部不能访问也不能修改。你可以认为 state 是一个局部的、只能被组件自身控制的数据源。 state 中状态可以通过 this.setState 方法进行更新， setState 会导致组件的重新渲
  染。
- props 的主要作用是让使用该组件的父组件可以传入参数来配置该组件。它是外部传进来的配置参数，组件内部无法控制也无法修改。除非外部组件主动传入新的 props ，否则组件的 props 永远保持
不变。
- 没有 state 的组件叫无状态组件（stateless component），设置了 state 的叫做有状态组件 （stateful component）。因为状态会带来管理的复杂性，我们尽量多地写无状态组件，尽量少地写有 状态的组件。这样会降低代码维护的难度，也会在一定程度上增强组件的可复用性。

#### 插槽

```jsx
import React, { Component } from 'react'

export default class child extends Component {
  render() {
    return (
      <div>
        <h2>插槽</h2>
        {/* 会显示完 */}
        {this.props.children}
        {/* 出入一一对应展示 */}
        {this.props.children[0]}
        {this.props.children[1]}
      </div>
    )
  }
}
```

#### 组件通信
1. 父子组件通信方式
(1) 传递数据(父传子)与传递方法(子传父)
(2) ref标记 (父组件拿到子组件的引用，从而调用子组件的方法)
在父组件中清除子组件的input输入框的value值。this.refs.form.reset()
2. 非父子组件通信方式
-  状态提升(中间人模式)
React中的状态提升概括来说,就是将多个组件需要共享的状态提升到它们最近的父组件
上.在父组件上改变这个状态然后通过props分发给子组件.
- 发布订阅模式实现
- context状态树传参
```jsx
//a. 先定义全局context对象
import React from 'react'
const GlobalContext = React.createContext()
export default GlobalContext
// 根组件引入GlobalContext，并使用GlobalContext.Provider（生产者）
<GlobalContext.Provider
value={{
name:"kerwin",
age:100,
content:this.state.content,
show:this.show.bind(this),
hide:this.hide.bind(this)
}}
>
<之前的根组件></之前的根组件>
</GlobalContext.Provider>
// c. 任意组件引入GlobalContext并调用context，使用GlobalContext.Consumer（消费者）
<GlobalContext.Consumer>
{
context => {
this.myshow = context.show; //可以在当前组件任意函数触发
this.myhide = context.hide;//可以在当前组件任意函数触发
return (
<div>
{context.name}-{context.age}-{context.content}
</div>
)
}
}
</GlobalContext.Consumer>
//- 注意：GlobalContext.Consumer内必须是回调函数，通过context方法改变根组件状态
//- 优点：跨组件访问数据
//- 缺点：react组件树种某个上级组件shouldComponetUpdate 返回false,当context更新时，不会引起下级组件更新
```
- redux

#### React生命周期

- 初始化阶段
  - componentWillMount: render之前最后一次修改状态的机会
  - render:只能访问this.props和this.state，不允许修改状态和DOM输出
  - componentDidMount:成功render并渲染完成真实DOM之后触发，可以修改DON

- 运行中阶段
  - componentWillReceiveProps:父组件修改属性触发
  - shouldComponentUpdate:返回false会阻止render调用
  - componentWillUpdate:不能修改属性和状态
  - render:只能访问this.props和this.state，不允许修改状态和DOM输出
  - componentDidUpdate:可以修改DOM
- 销毁阶段
  - componentWillUnmount:在删除组件之前进行清理操作，比如计时器和事件监听器

老生命周期的问题

(1) componentWillMount ,在ssr中 这个方法将会被多次调用， 所以会重复触发多遍，同时在这里如果绑定事件， 将无法解绑，导致内存泄漏 ， 变得不够安全高效逐步废弃。
(2) componentWillReceiveProps 外部组件多次频繁更新传入多次不同的 props，会导致不必要的异步请求
(3) componetWillupdate, 更新前记录 DOM 状态, 可能会做一些处理，与componentDidUpdate相隔时间如果过
长， 会导致 状态不太信

新生命周期的替代

(1) getDerivedStateFromProps 第一次的初始化组件以及后续的更新过程中(包括自身状态更新以及父传子) ， 返回一个对象作为新的state，返回null则说明不需要在这里更新state
(2) getSnapshotBeforeUpdate 取代了 componetWillUpdate ,触发时间为update发生的时候，在render之后
dom渲染之前返回一个值，作为componentDidUpdate的第三个参数。

#### react中性能优化的方案

-  shouldComponentUpdate
  - 控制组件自身或者子组件是否需要更新，尤其在子组件非常多的情况下， 需要进行优化。
- PureComponent
  - PureComponent会帮你 比较新props 跟 旧的props， 新的state和老的state（值相等,或者 对象含有相同的属性、且属性值相等 ），决定shouldcomponentUpdate 返回true 或者 false， 从而决定要不要呼叫 render function。
  - 如果你的 state 或 props 『永远都会变』，那 PureComponent 并不会比较快，因为 shallowEqual 也需要花时间。

#### React Hooks

使用hooks理由

1. 高阶组件为了复用，导致代码层级复杂
2. 生命周期的复杂 
3. 写成functional组件,无状态组件 ，因为需要状态，又改成了class,成本高

##### useState (保存组件状态)

const [state, setstate] = useState(initialState)

```jsx
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
```
##### useEffect(处理副作用)和useLayoutEffect (同步执行副作用)

Function Component 不存在生命周期，所以不要把 Class Component 的生命周期概念搬过来试图对号入座。

- useEffect

```jsx
useEffect(() => {
    //effect
    return () => {
    //cleanup(销毁处理)
    };
}, [依赖的状态;空数组,表示不依赖])
```

- useEffect和useLayoutEffect有什么区别？

  简单来说就是调用时机不同， useLayoutEffect 和原来 componentDidMount & componentDidUpdate 一致，在 react完成DOM更新后马上同步调用的代码，会阻塞页面渲染。而 useEffect 是会在整个页面渲染完才会调用的 代码。

  官方建议优先使用 useEffect

- 在实际使用时如果想避免页面抖动（在 useEffect 里修改DOM很有可能出现）的话，可以把需要操作DOM的代码 放在 useLayoutEffect 里。在这里做点dom操作，这些dom修改会和 react 做出的更改一起被一次性渲染到屏幕 上，只有一次回流、重绘的代价。

##### useCallback(记忆函数)

防止因为组件重新渲染，导致方法被重新创建 ，起到缓存作用; 只有第二个参数 变化了，才重新声明一次

```jsx
const handleClick = useCallback(()=>{
console.log(name)
},[name])
<button onClick={()=>handleClick()}>hello</button>
//只有name改变后， 这个函数才会重新声明一次，
//如果传入空数组， 那么就是第一次创建后就被缓存， 如果name后期改变了,拿到的还是老的name。
//如果不传第二个参数，每次都会重新声明一次，拿到的就是最新的name.
```

##### useMemo 记忆组件

useCallback 的功能完全可以由 useMemo 所取代，如果你想通过使用 useMemo 返回一个记忆函数也是完全可以 的。

useCallback 不会执行第一个参数函数，而是将它返回给你，而 useMemo 会执行第一个函数并 且将函数执行结果返回给你。所以在前面的例子中，可以返回 handleClick 来达到存储函数的目的。 所以 useCallback 常用记忆事件函数，生成记忆后的事件函数并传递给子组件使用。而 useMemo 更适合经过函数 计算得到一个确定的值，比如记忆组件。

- 相当于vue中的计算属性

```jsx
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

```

##### useRef(保存引用值)

```jsx
const myswiper = useRef(null);
<Swiper ref={myswiper}/>
```

也可以保存变量

```jsx
let count = useRef(0)
// 修改
count.current++
```
##### useContext
```jsx
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


```

##### useReducer

```jsx
import React,{useReducer,useContext} from 'react'

const initailState = {
    a:"11111",
    b:"11111"
}

const reducer = (prevState,action)=>{
    let newstate = {...prevState}
    switch(action.type){
        case "change-a":
            newstate.a = action.value
            return newstate
        case "change-b":
            newstate.b = action.value
            return newstate
        default:
            return prevState
    }
    // return prevState
}

const GlobalContext = React.createContext()
export default function App() {
    const [state, dispatch] = useReducer(reducer, initailState)
    
    return (
        <GlobalContext.Provider value={
            {
                state,
                dispatch
            }
        }>
            <div>
                <Child1/>
                <Child2/>
                <Child3/>
            </div>
        </GlobalContext.Provider>
    )
}

function Child1(){
    const {dispatch} = useContext(GlobalContext)
    return <div style={{background:"red"}}>
        <button onClick={()=>{
            dispatch({
                type:"change-a",
                value:"2222222"
            })
        }}>改变a</button>
        <button onClick={()=>{
            dispatch({
                type:"change-b",
                value:"333333"
            })
        }}>改变b</button>
    </div>
}

function Child2(){
    const {state} = useContext(GlobalContext)
    return <div style={{background:"yellow"}}>
        child2-{state.a}
    </div>
}

function Child3(){
    const {state} = useContext(GlobalContext)
    return <div style={{background:"gray"}}>
        child3-{state.b}
    </div>
}
```

##### 自定义hooks

**必须以“use”开头**。这个约定非常重要。不遵循的话，由于无法判断某个函数是否包含对其内部 Hook 的调用，React 将无法自动检查你的 Hook 是否违反了 Hook 的规则

#### React 路由

