import { useState } from "react"
import { ToastContext, type ToastContextType } from "../context/ToastContext";
import ToastContainer from "../components/Toasts/ToastContainer";

export type toastType = 'success' | 'error' | 'warning' | 'info'; 

export interface toast {
  id : number;
  message : string;
  type : toastType;
}

export const ToastProvider = ({children} : any) => {
  const [toasts , setToasts] = useState<toast[]>([]);

  const addToast = (message : string , type : toastType = 'info') => {
    const id = Date.now();
    setToasts(prev => [...prev , {id , message , type}]);
  };

  const removeToast = (id : number) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  const showSuccess = (message: string): void => addToast(message, 'success');
  const showError = (message: string): void => addToast(message, 'error');
  const showWarning = (message: string): void => addToast(message, 'warning');
  const showInfo = (message: string): void => addToast(message, 'info');

  const contextValue: ToastContextType = {
    showSuccess,
    showError,
    showWarning,
    showInfo
  };

  return (
    <ToastContext.Provider value = {contextValue}>
      {children}
      <ToastContainer toasts = {toasts} onRemove = {removeToast}/>
    </ToastContext.Provider>
  )
}