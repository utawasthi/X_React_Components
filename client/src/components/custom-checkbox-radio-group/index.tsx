import { useState } from "react";
import type { option } from "./CheckboxGroup";
import CheckboxGroup from "./CheckboxGroup";
import RadioGroup from "./RadioGroup";


function CheckboxAndRadio() {

  const [selectSports, setSelectSports] = useState<string[]>(['Badminton']);
  
  // Radio state
  const [selectCountry, setSelectCountry] = useState<string>('India');

  const sportsOption: option[] = [
    { id: 'cricket', label: 'Cricket' },
    { id: 'football', label: 'Football' },
    { id: 'hockey', label: 'Hockey' },
    { id: 'baseball', label: 'Baseball', disabled: true },
    {id : 'basketball' , label : 'Basketball'}
  ];

  const countryOptions: option[] = [
    { id: 'india', label: 'India' },
    { id: 'usa', label: 'USA' },
    { id: 'switzerland', label: 'Switzerland' },
    {id : 'japan' , label : 'Japan'},
    { id: 'australia', label: 'Australia', disabled: true },
  ];

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-yellow-600 mb-28 text-center">
          Custom Checkbox & Radio Components
        </h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Checkbox Group Demo */}
          <div className="bg-white/15 p-6 rounded-xl shadow-md shadow-yellow-600">
            <CheckboxGroup
              label="Select your favorite sports:"
              options={sportsOption}
              selectedValues={selectSports}
              onChange={setSelectSports}
            />
            
            <div className="mt-6 p-4 bg-white/20 rounded-lg">
              <h3 className="text-sm font-semibold text-white mb-2">
                Selected Sports :
              </h3>
              <div className="text-sm text-white">
                {selectSports.length > 0 
                  ? selectSports.join(', ') 
                  : 'None selected'
                }
              </div>
            </div>
          </div>

          {/* Radio Group Demo */}
          <div className="bg-white/15 p-6 rounded-lg shadow-md shadow-yellow-600">
            <RadioGroup
              label="Choose your favorite country:"
              name="color-preference"
              options={countryOptions}
              selectedValue={selectCountry}
              onChange={setSelectCountry}
            />
            
            <div className="mt-6 p-4 bg-white/20 rounded-lg">
              <h3 className="text-sm font-semibold text-white mb-2">
                Selected Color:
              </h3>
              <div className="text-sm text-white capitalize">
                {selectCountry}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckboxAndRadio
