import Accordion from "./components/Accordion"
import Btn from "./components/Button"
import CheckboxAndRadio from "./components/custom-checkbox-radio-group"
import DatePicker from "./components/date-picker/DatePicker"
import DDMenu from "./components/DropDown"
import FileUpload from "./components/file-upload"
import FormValidation from "./components/form-validation"
import InfiniteScroll from "./components/infinite-scroll"
import Modal from "./components/Modal"
import MultiSelectDropDownPar from "./components/multi-select-dropdown"
import MultiStepForm from "./components/multi-step-form"
import PaginationPar from "./components/pagination"
import Password from "./components/password"
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
      <DatePicker/>
      <MultiSelectDropDownPar/>
      <FileUpload/>
      <Password/>
      <FormValidation/>
      <PaginationPar/>
      <MultiStepForm />
      <InfiniteScroll/>
    </div>
  )
}

export default App