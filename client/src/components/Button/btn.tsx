import { Loader2Icon } from "lucide-react";
import type React from "react";


type ButtonProps = {
  variant? : "primary" | "secondary" | "danger" | "warning" | "info" | "disabled";
  isLoading? : boolean;
  disabled? : boolean;
  children : React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;


export function Button ({
  variant = "primary",
  isLoading = false,
  disabled = false,
  children,
  ...props
} : ButtonProps) {

  const baseClass = "px-10 py-3 rounded-2xl font-medium transition-colors focus:outline-none cursor-pointer";
  
  let variantClass = "";

  switch(variant){
    
    case "secondary" : 
      variantClass = "bg-gray-700 text-gray-200 hover:bg-gray-600";
      break;

    case "danger" : 
     variantClass = "bg-red-600 text-white hover:bg-rose-600";
     break;

    case "warning":
      variantClass = "bg-amber-500 text-black hover:bg-amber-600";
      break;

    case "info":
      variantClass = "bg-sky-500 text-white hover:bg-sky-600";
      break;

    case "disabled":
      variantClass = "bg-gray-800 text-gray-500 opacity-50 cursor-not-allowed";
      break;

    default:
      variantClass = "bg-emerald-500 text-white hover:bg-emerald-600"; 
  }

  return (
    <button 
     className = {`${baseClass} ${variantClass} ${(disabled || isLoading) && "opacity-70 cursor-wait"}`}
     disabled = {variant === "disabled" || isLoading}
     {...props}
    >
      {isLoading ? <Loader2Icon className = 'animate-spin'/> : children}
    </button>
  )
}