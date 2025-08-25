import Accordion from "./components/Accordion"
import Btn from "./components/Button"
import DDMenu from "./components/DropDown"
import Modal from "./components/Modal"
import Tabs from "./components/Tabs"


function App() {
  return (
    <div className = 'bg-black'>
      <Btn/>
      <Modal/>
      <Tabs/>
      <DDMenu/>
      <Accordion/>
    </div>
  )
}

export default App