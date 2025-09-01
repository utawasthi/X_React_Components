import { Check } from "lucide-react";

interface CheckboxProps {
  id : string;
  label : string;
  checked : boolean;
  onChange : (checked : boolean) => void;
  disabled? : boolean;
}

function Checkbox({id , label , checked , onChange , disabled} : CheckboxProps) {

  return (
    <div className = 'flex items-center space-x-3 group'>
      <div className = 'relative'>
        <input 
          type = "checkbox"
          id = {id}
          checked = {checked}
          onChange = {(e) => onChange(e.target.checked)}
          disabled = {disabled}
          className = "sr-only"
        />
        <label
          htmlFor = {id}
          className = {
            `flex items-center justify-center w-5 h-5 border-2 rounded cursor-pointer transition-all duration-200 ease-in-out 
              ${checked 
                ? 'bg-blue-600 border-blue-600 text-white' 
                : 'bg-white border-gray-300 hover:border-blue-400'
              }
              ${
                disabled 
                ? 'opacity-50 cursor-not-allowed'
                : 'group-hover:border-blue-400'
              }
            `
          }
        >
          {checked && <Check  className = 'w-3 h-3'/>}
        </label>
      </div>
      <label
        htmlFor = {id}
        className = {`text-sm font-medium select-none
           ${disabled 
            ? 'text-white/50 cursor-not-allowed'
            : 'text-white cursor-pointer group-hover:text-blue-600'
           }
           transition-colors duration-200
        `}
      >
       {label}
      </label>
    </div>
  )
}

export default Checkbox
