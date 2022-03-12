import ClassCom from "./classCom/classCom"
import FunCom from "./funCom/funCom"
import Event from './classCom/event'
import List from "./classCom/list"
export default function Basic() {
  return (
    <section>
      <ClassCom />
      <FunCom />
      事件绑定
      <Event />
      <List />
    </section>
  )
}
