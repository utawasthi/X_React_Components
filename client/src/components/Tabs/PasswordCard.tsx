


function PasswordCard() {

  return (
    <div className = 'mt-4 p-5 border-[0.1px] border-gray-500 rounded-xl bg-white/7 flex flex-col gap-3'>
      <h1 className = 'font-semibold'>
        Password
      </h1>
      <p className = 'text-sm font-light text-gray-400'>
        Change your password here. After saving, you'll be logged out.
      </p>

      <h2 className = 'font-semibold'>
       Current Password
      </h2>
      <input 
        type = "password"
        className = 'bg-white/10 rounded-xl pl-2 py-2 focus:outline-none'
      />

      <h2>
        New Password
      </h2>
      <input
        type = 'password' 
        className = 'bg-white/10 rounded-xl pl-2 py-2 focus:outline-none'
      />
      <button className = 'bg-white text-black w-[150px] rounded-xl py-2 mt-3 text-sm cursor-pointer hover:bg-white/80'>
        Save Password
      </button>
    </div>
  )
}

export default PasswordCard
