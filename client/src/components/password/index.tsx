import { useState } from "react";


type strength = "Weak" | "Medium" | "Strong" | "";

const getStrength = (password : string) : strength => {
  if(!password) return "";
  const hasLower = /[a-z]/.test(password);
  const hasUpper = /[A-Z]/.test(password);
  const hasNumber = /\d/.test(password);
  const hasSpecial = /[^a-zA-Z0-9]/.test(password);

  if(password.length >= 8 && hasLower && hasUpper && hasSpecial && hasNumber) return "Strong";
  else if(password.length >= 6 && (hasLower || hasUpper) && hasNumber) return "Medium";
  else return "Weak";
}

const getColor = (strength : strength) : string => {
  switch (strength) {
    case "Weak" : 
     return "bg-red-500";
    case "Medium" :
      return "bg-yellow-500";
    case "Strong" : 
      return "bg-green-500";
    default : 
      return "bg-gray-300";
  }
}

function Password() {
 
  const [password , setPassword] = useState<string>('');
  const [visible , setVisible] = useState<boolean> (false);

  const strength = getStrength(password);

  return (
    <div className = 'h-screen flex flex-col gap-8 justify-center items-center'>
      <h2 className = 'text-blue-500 text-4xl mb-40 -mt-50'>
        Password Strength Checker
      </h2>
      <div className = 'relative w-80'>
        <input 
          type = {visible ? "text" : "password"}
          value = {password}
          onChange = {(e) => setPassword(e.target.value)}
          placeholder = "Enter Password"
          className = 'bg-white text-black/70 px-6 py-3 rounded-lg focus:outline-0 w-full'
        />
        <button
          onClick = {() => setVisible(!visible)}
          className = 'absolute top-3 right-5 text-black cursor-pointer'
        >
          {visible ? <EyeSlash/> : <EyeOpen/>}
        </button>
      </div>
      {
        strength && (
          <div className = 'border px-5 py-3 w-80'>
            <div 
              className = 'h-2 w-full bg-gray-200 rounded'
            >
              <div
                className = {`h-2 rounded ${getColor(strength)}`}
                style = {{
                  width : strength === "Weak" ? "33%" : strength === "Medium" ? "66%" : "100%",
                }}
              />
            </div>
            <p className = 'text-sm mt-1'>
              <span className = {getColor(strength).replace("bg" , "text")}>
                {strength} Password
              </span>
            </p>
          </div>
        )
      }
    </div>
  )
}

export default Password

function EyeOpen () {
  return (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
  </svg>
)}

function EyeSlash () {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
    </svg>
  )
}
