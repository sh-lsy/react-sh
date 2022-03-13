import ClassCom from "./classCom/classCom"
import FunCom from "./funCom/funCom"
import Event from './classCom/event'
import List from "./classCom/list"
import Props from './classCom/props'
import FProps from './funCom/props'
import Shoukong from "./classCom/shoukong.jsx"
import Child from "./classCom/child"
export default function Basic() {
  return (
    <section>
      <ClassCom />
      <FunCom />
      事件绑定
      <Event />
      <List />
      <Props title="props传值" isShowSectitle={false}/>
      <Props title="props传值" isShowSectitle={true}/>
      <Props/>
      <FProps bg="skyblue" title="函数式组件props使用"/>
      <Shoukong />
      <Child>
        <div>
          向插槽写入的内容1
        </div>
        <div>
          向插槽写入的内容2
        </div>
      </Child>
    </section>
  )
}
