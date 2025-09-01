import DropDown from "./DropDown"

function DDMenu() {
  return (
    <div className = 'h-screen bg-black flex flex-col justify-center items-center p-10'>
      <h2 className = 'font-light -mt-80 mb-10 text-3xl text-orange-600 tracking-wider'>
        Drop Down Menu
      </h2>
      <DropDown/>
    </div>
  )
}

export default DDMenu
