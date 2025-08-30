import Checkbox from "./Checkbox";

export interface option {
  id : string;
  label : string;
  disabled? : boolean;
}

interface CheckBoxGroupProps {
  options : option[];
  selectedValues : string[];
  onChange : (selectedValues : string[]) => void;
  label? : string;
  className? : string;
  disabled? : boolean;
}

function CheckboxGroup({options , selectedValues ,onChange ,label , className = '' , disabled = false} : CheckBoxGroupProps) {
  const handleCheckboxChange = (optionId: string, checked: boolean) => {
    if (checked) {
      onChange([...selectedValues, optionId]);
    } else {
      onChange(selectedValues.filter(id => id !== optionId));
    }
  };

  return (
    <div className={`space-y-3 ${className}`}>
      {label && (
        <div className="text-base font-semibold text-white mb-4">
          {label}
        </div>
      )}
      <div className="space-y-3">
        {options.map((option) => (
          <Checkbox
            key={option.id}
            id={option.id}
            label={option.label}
            checked={selectedValues.includes(option.id)}
            onChange={(checked) => handleCheckboxChange(option.id, checked)}
            disabled={disabled || option.disabled}
          />
        ))}
      </div>
    </div>
  )
}

export default CheckboxGroup
