import Accordion from "./components/Accordion"
import Btn from "./components/Button"
import CheckboxAndRadio from "./components/custom-checkbox-radio-group"
import DDMenu from "./components/DropDown"
import Modal from "./components/Modal"
import SearchAutoComplete from "./components/Search-Auto-Complete-With-API/SearchAutoComplete"
import Tabs from "./components/Tabs"
import ToastPar from "./components/Toasts"
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
      <ToastPar/>
      <CheckboxAndRadio/>
    </div>
  )
}

export default App