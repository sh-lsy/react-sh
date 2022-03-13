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