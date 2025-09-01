import { type MouseEvent } from "react";

interface SuggestionsProps {
  handleClick: (event: MouseEvent<HTMLLIElement>) => void;
  filteredUsers: string[];
}

function Suggestions ({ handleClick, filteredUsers } : SuggestionsProps) {
  return (
    <ul className = 'bg-white/20 px-5 text-gray-300 w-[250px] rounded-xl'>
      {filteredUsers.map((item, index) => (
        <li 
          key={index} 
          onClick={handleClick} 
          className = 'my-2 cursor-pointer'
        >
          {item}
        </li>
      ))}
    </ul>
  );
};

export default Suggestions;
