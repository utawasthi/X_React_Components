import type { toast } from "../../providers/ToastProvider"
import Toast from "./Toast";

interface ToastContainerProps {
  toasts : toast[];
  onRemove : (id : number) => void;
}

function ToastContainer({toasts , onRemove} : ToastContainerProps) {
  return (
    <div className = 'fixed top-4 right-4 z-50'>
      {
        toasts.map((item) => (
          <Toast 
            key = {item.id}
            {...item}
            onClose = {onRemove}
          />
        ))
      }
    </div>
  )
}

export default ToastContainer
