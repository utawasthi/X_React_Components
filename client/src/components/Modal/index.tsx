import { useState } from "react"
import { Button } from "../Button/btn";

function Modal() {

  const [isOpen , setIsOpen] = useState(false);

  return (
    <div className = "border-t border-white/50 h-screen flex items-center justify-center bg-black text-white">
      <div className = 'relative mx-20 my-20 bg-black'>
        <div className = 'mt-5 flex justify-center'>
          <Button
            onClick = {() => setIsOpen(true)}
          >
            Open Modal
          </Button>
        </div>
        {
          isOpen && (
            <div
              className = "fixed inset-0 flex items-center justify-center"
            >
              <div
                className = "absolute inset-0 bg-black"
                onClick={() => setIsOpen(false)}
              />
              <div
                className = "relative bg-white text-black p-6 rounded-xl shadow-lg w-100 transform transition-all duration-300 scale-95 animate-fadeIn"
              >
                <h2 className = "text-xl font-semibold mb-4">
                  Dialog Box
                </h2>
                <p className = "mb-8">
                  Day 2 of #buildinpublic
                </p>
                <Button
                  onClick = {() => setIsOpen(false)}
                >
                  Close
                </Button>
              </div>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default Modal
