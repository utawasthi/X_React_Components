import Accordion from "./components/Accordion"
import Btn from "./components/Button"
import DDMenu from "./components/DropDown"
import Modal from "./components/Modal"
import SearchAutoComplete from "./components/Search-Auto-Complete-With-API/SearchAutoComplete"
import Tabs from "./components/Tabs"
import TooltipPar from "./components/Tooltip"


function App() {
  return (
    <div className = 'bg-black'>
      <Btn/>
      <Modal/>
      <Tabs/>
      <DDMenu/>
      <Accordion/>
      <TooltipPar/>
      <SearchAutoComplete/>
    </div>
  )
}

export default App