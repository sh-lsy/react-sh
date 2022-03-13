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