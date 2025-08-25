import { Minus, Plus } from "lucide-react";
import { useState } from "react"

type AccordionType = {
  id : number;
  question : string;
  answer : string;
}

const data : AccordionType[] = [
  {
    id : 0,
    question : "What is build in public ?",
    answer : "Build in public is way to share publicly whatever you are building. Rather than keeping it just to your local machine , you share it with the world , so either they can contribute or you can improve from their suggestions.",
  },
  {
    id : 1,
    question : "What is React ? ",
    answer : "React is a Javascript framework for frontend development. It was primarily developed by Facebook team. It is now the most popular framework in the market for frontend development.",
  },
  {
    id : 2,
    question : "What is NodeJs ?",
    answer : "Node.js is an open-source, cross-platform JavaScript runtime environment that allows developers to execute JavaScript code outside of a web browser."
  },
  {
    id : 3,
    question : "What are factory functions in JS ? ",
    answer : "In JavaScript, a factory function is a function that returns an object. It is a way of creating and returning objects in a more controlled and customizable manner. Factory functions are a form of design pattern that enables the creation of objects with specific properties and behaviors."
  },
  {
    id : 4,
    question : "What is event capturing ?",
    answer : "Event capturing in JavaScript is the first phase of the event propagation model within the Document Object Model (DOM) of web browsers, where an event travels from the root of the DOM tree down to the target element."
  }
]

function Accordion() {

  const [active , setActive] = useState<number>(-1);

  const handleOnClick = (id : number) => {
    if(active === id) setActive(-1);
    else setActive(id);
  }

  return (
    <div className = 'bg-black h-screen text-white p-5 border-t border-white/50'>
      <h1 className = 'text-center text-2xl md:text-3xl xl:text-4xl -mb-10 mt-10 text-blue-500 tracking-wide'>
        Accordion
      </h1>
      <div className = 'border-2 border-zinc-600 mt-40 flex flex-col items-center justify-center mx-10 md:mx-20 lg:mx-40 xl:mx-60 rounded-xl'>
       {
        data.map((item , idx) => (
          <div
            key = {idx}
            className = 'border-b-[0.01px] border-zinc-600 w-full rounded-b-sm cursor-pointer'
            onClick = {() => handleOnClick(item.id)}
          >
            <div className = 'flex items-center gap-30 justify-between py-3 px-10'>
              <div className = 'text-cyan-400'>
                {item.question}
              </div>
              <span 
                className = 'cursor-pointer'
                onClick = {() => handleOnClick(item.id)}
              >
                {
                  active === idx ? <Minus className = 'text-cyan-400'/> : <Plus className = 'text-cyan-400'/>
                }
              </span>
            </div>
            {
              active === idx && 
              <div className = 'border-t-[0.1px] border-zinc-600 pl-10 pr-20 py-3 text-gray-400'>
                {item.answer}
              </div>
            }
          </div>
        ))
       }
       
      </div>
    </div>
  )
}

export default Accordion
