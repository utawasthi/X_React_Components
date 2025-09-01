import { useToast } from '../../context/ToastContext'

function ToastPar() {
 
  const {showSuccess , showError , showWarning , showInfo} = useToast();

  const handleSuccessClick = () => {
    showSuccess('Success! Task completed successfully.');
  }

  const handleErrorClick = () => {
    showError('Error! Something went wrong.');
  };

  const handleWarningClick = () => {
    showWarning('Warning! Please check this carefully.');
  };

  const handleInfoClick = () => {
    showInfo('Info: Here is some useful information.');
  };

  return (
    <div className = "min-h-screen p-8">
      <h1 className = "text-4xl text-cyan-400 font-bold mb-20 tracking-wide">
        Custom Toasts Messages
      </h1>
      <div className = "mt-40 ml-10 flex flex-col gap-10 w-[200px]">
        <button 
          onClick={handleSuccessClick}
          className = "bg-green-500/70 text-white px-4 py-2 rounded-3xl cursor-pointer tracking-wider"
        >
          Success
        </button>
        <button 
          onClick = {handleErrorClick}
          className = "bg-red-500/70 text-white px-4 py-2 rounded-3xl cursor-pointer tracking-wider"
        > 
          Error
        </button>
        <button 
          onClick = {handleWarningClick}
          className = "bg-yellow-500/70 text-white px-4 py-2 rounded-3xl cursor-pointer tracking-wider"
        >
          Warning
        </button>
        <button 
          onClick = {handleInfoClick}
          className = "bg-blue-500/70 text-white px-4 py-2 cursor-pointer rounded-3xl tracking-wider"
        >
          Info
        </button>
      </div>
    </div>
  )
}

export default ToastPar