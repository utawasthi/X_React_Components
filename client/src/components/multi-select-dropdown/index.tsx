import MultiSelectDropDown from "./MultiSelectDropDown";

const options: string[] = [
  "#buildinpublic",
  "#webdevelopment",
  "#React",
  "#Typescript",
  "#tailwindcss"
];

function MultiSelectDropDownPar() {
  return (
    <div className = 'h-screen flex flex-col items-center justify-center gap-20'>
      <h2 className = 'text-yellow-700 text-4xl -mt-80 mb-30'>
        Multi Select DropDown Component
      </h2>
      <MultiSelectDropDown options = {options}/>
    </div>
  )
}

export default MultiSelectDropDownPar
