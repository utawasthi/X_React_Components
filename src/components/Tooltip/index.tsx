import Tooltip from "./Tooltip"


function TooltipPar() {

  return (
    <div className = 'h-screen text-white p-10 border-t border-white/50 flex justify-center items-center'>
      <div className = 'flex flex-col items-center justify-center gap-20'>
        <h2 className = 'text-3xl text-orange-600 font-light tracking-wider'>
          Tooltip Component
        </h2>
        <Tooltip content = {"This is top"} position = "top">
          <button className = 'px-6 py-2 bg-white/30 rounded-2xl'>
            Hover Me
          </button>
        </Tooltip>
        <Tooltip content = {"This is right"} position = "right">
          <button className = 'px-6 py-2 bg-white/30 rounded-2xl'>
            Hover Me
          </button>
        </Tooltip>
        <Tooltip content = {"This is bottom"} position = "bottom">
          <button className = 'px-6 py-2 bg-white/30 rounded-2xl'>
            Hover Me
          </button>
        </Tooltip>
        <Tooltip content = {"This is left"} position = "left">
          <button className = 'px-6 py-2 bg-white/30 rounded-2xl'>
            Hover Me
          </button>
        </Tooltip>
      </div>
    </div>
  )
}

export default TooltipPar
