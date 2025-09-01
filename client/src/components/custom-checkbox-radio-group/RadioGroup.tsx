import type { option } from "./CheckboxGroup";
import RadioComp from "./Radio";

interface RadioGroupProps {
  options : option[];
  selectedValue : string;
  onChange: (selectedValue: string) => void;
  name: string;
  label : string;
  className?: string;
  disabled?: boolean;
}

function RadioGroup({options , selectedValue , onChange , name ,label , className = '' ,disabled = false} : RadioGroupProps) {
  return (
    <div className={`space-y-3 ${className}`}>
      {label && (
        <div className="text-base font-semibold text-white mb-4">
          {label}
        </div>
      )}
      <div className="space-y-3">
        {options.map((option) => (
          <RadioComp
            key = {option.id}
            id = {option.id}
            name = {name}
            label = {option.label}
            checked = {selectedValue.includes(option.id)}
            onChange = {() => onChange(option.id)}
            disabled = {disabled || option.disabled}
          />
        ))}
      </div>
    </div>
  );
}

export default RadioGroup
