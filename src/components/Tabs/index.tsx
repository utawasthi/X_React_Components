import { useState } from "react";
import AccountCard from "./AccountCard";
import PasswordCard from "./PasswordCard";


function Tabs() {

  const [active , setActive] = useState<number>(0);

  return (
    <div 
      className = 'border-t border-white/50 h-screen text-white flex flex-col justify-center items-center'
    >
     <h1 className = 'text-3xl'>
      Tabs 
     </h1>
     <div 
       className = 'w-[400px] sm:w-[500px] md:w-[700px] border-[0.1px] border-gray-500 mt-10 flex flex-col p-10 rounded-xl'
      >
        <div 
          className = 'flex justify-start items-center w-[179px] rounded-xl bg-white/15'
        >
          <div 
            className = {active == 0 ? 'border border-gray-500 px-3 cursor-pointer rounded-xl py-1' : 'px-3 cursor-pointer rounded-xl py-1'}
            onClick = {() => setActive(0)}
          >
            Account
          </div>
          <div 
            className = {active == 1 ? 'border border-gray-500 px-3 cursor-pointer rounded-xl py-1' : 'px-3 cursor-pointer rounded-xl py-1'}
            onClick = {() => setActive(1)}
          >
            Password
          </div>
        </div>
        <div>
          {
            active == 0 
            ? 
              <AccountCard/>
            :
              <PasswordCard/>
          }
        </div>
     </div>
    </div>
  )
}

export default Tabs
