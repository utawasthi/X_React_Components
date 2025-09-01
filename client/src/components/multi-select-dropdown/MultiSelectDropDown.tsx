import { useEffect, useRef, useState } from "react";

type MultiSelectProps = {
  options : string[];
}

function MultiSelectDropDown({options} : MultiSelectProps) {
 
  const [isOpen , setIsOpen] = useState<boolean>(false);
  const [selected , setSelected] = useState<string[]>([]);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e : MouseEvent){
      if(dropdownRef.current && !dropdownRef.current.contains(e.target as Node)){
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown" , handleClickOutside);

    return () => document.removeEventListener("mousedown" , handleClickOutside);
  } , []);


  const toggleOption = (option : string) => {
    setSelected(prev => 
      prev.includes(option) ? prev.filter(item => item !== option) : [...prev , option]
    );
  }

  const clearAllOptions = () => setSelected([]);

  return (
    <div className = 'flex items-center justify-center'>
      <div 
        ref = {dropdownRef}
        className = 'relative w-100 border'
      >
        <div
          onClick={() => setIsOpen(!isOpen)}  
          className = 'w-full border rounded-xl px-4 py-2 bg-white text-left text-gray-500 flex items-center justify-between cursor-pointer'
        >
         <div className = 'flex flex-wrap gap-1 overflow-y-auto'>
          {
            selected.length > 0 ? (
              selected.map(item => (
                <span 
                 key = {item}
                 className = 'bg-gray-300 text-black text-sm px-2 py-1 rounded-full'
                >
                  {item}
                </span>
              ))
            ) : (
             <span className = 'text-gray-500'> 
               Select Options
             </span>
            )
          }
         </div>
         {
          selected.length > 0 && (
            <span
              className = 'text-xs text-red-500 ml-2 cursor-pointer hover:underline'
              onClick = {e => {
                e.stopPropagation();
                clearAllOptions();
              }}
            >
              Clear
            </span>
          )
         }
        </div>

        {
          isOpen && (
            <ul
              className = 'absolute z-10 mt-1 w-full max-h-50 overflow-y-auto border rounded- xl bg-white shadow'
            >
              {
                options.map(option => (
                  <li 
                   key = {option}
                   className = 'flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer'
                   onClick={() => toggleOption(option)}
                  >
                    <input 
                      type = "checkbox"
                      checked = {selected.includes(option)}
                      readOnly
                      className = 'mr-2'
                    />
                    {option}
                  </li>
                ))
              }
            </ul>
          )
        }
      </div>
    </div>
  )
}

export default MultiSelectDropDown
