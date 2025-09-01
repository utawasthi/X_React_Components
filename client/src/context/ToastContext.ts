import { createContext, useContext } from "react";

export interface ToastContextType {
  showSuccess : (message : string) => void;
  showError : (message : string) => void;
  showWarning : (message : string) => void;
  showInfo : (message : string) => void;
}

export const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const useToast = () : ToastContextType => {
  const context = useContext(ToastContext);
  if(context) return context;
  else throw new Error('useToast must be used within ToastProvider');
}