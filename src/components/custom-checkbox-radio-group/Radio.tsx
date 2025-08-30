
interface RadioProps {
  id : string;
  name : string;
  label : string;
  checked : boolean;
  onChange? : () => void;
  disabled? : boolean;
}

function RadioComp({id ,name ,label , checked , onChange , disabled = false} : RadioProps) {
  return (
    <div className="flex items-center space-x-3 group">
      <div className="relative">
        <input
          type="radio"
          id={id}
          name={name}
          checked={checked}
          onChange={onChange}
          disabled={disabled}
          className="sr-only"
        />
        <label
          htmlFor={id}
          className={`
            flex items-center justify-center w-5 h-5 border-2 rounded-full cursor-pointer
            transition-all duration-200 ease-in-out
            ${checked 
              ? 'bg-blue-600 border-blue-600' 
              : 'bg-white border-gray-300 hover:border-blue-400'
            }
            ${disabled 
              ? 'opacity-50 cursor-not-allowed' 
              : 'group-hover:border-blue-400'
            }
          `}
        >
          {checked && (
            <div className="w-2 h-2 bg-white rounded-full"></div>
          )}
        </label>
      </div>
      <label
        htmlFor={id}
        className={`
          text-sm font-medium select-none
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

export default RadioComp
