import { useEffect, useState } from "react";
import type { toastType } from "../../providers/ToastProvider";

interface ToastProps {
  id : number;
  type : toastType;
  message : string;
  onClose : (id : number) => void;
}


function Toast({id , type , message , onClose} : ToastProps) {

  const [showToast , setShowToast] = useState<boolean>(false);

  useEffect(() => {
    setShowToast(true);
    const timer = setTimeout(() => {
      handleClose();
    } , 5000);

    return () => clearTimeout(timer);
  } , []);

  const handleClose = () => {
    setShowToast(false);
    setTimeout(() => onClose(id) , 300);
  };

  const getStyles = () => {
    const baseClass = 'p-4 rounded-2xl shadow-xl transition-all duration-300 transform tracking-wider';
    const position = showToast ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0';

    const typeStyles = {
      success : 'bg-green-500/60 text-white',
      error : 'bg-red-500/60 text-white',
      warning : 'bg-yellow-500/60 text-white',
      info : 'bg-blue-500/60 text-white',
    };

    return `${baseClass} ${position} ${typeStyles[type]}`
  }

  return (
    <div 
      className={`${getStyles()} mb-2 flex items-center justify-between min-w-80`}
    >
      <span>{message}</span>
      <button 
        onClick={handleClose}
        className="ml-4 text-white hover:text-gray-200 focus:outline-none"
        aria-label="Close notification"
      >
        ✕
      </button>
    </div>
  )
}

export default Toast
