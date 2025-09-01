
function AccountCard() {

  return (
    <div className = 'mt-4 p-5 border-[0.1px] border-gray-500 rounded-xl bg-white/7 flex flex-col gap-3'>
      <h1 className = 'font-semibold'>
        Account
      </h1>
      <p className = 'text-sm font-light text-gray-400'>
        Make changes to your account here. Click save when you're done.
      </p>

      <h2 className = 'font-semibold'>
        Name
      </h2>
      <input 
        type = "text"
        placeholder = "Utkarsh"
        className = 'bg-white/10 rounded-xl pl-2 py-2 focus:outline-none'
      />

      <h2>
        Username
      </h2>
      <input
        type = 'text' 
        placeholder = "@utawasthi"
        className = 'bg-white/10 rounded-xl pl-2 py-2 focus:outline-none'
      />
      <button className = 'bg-white text-black w-[150px] rounded-xl py-2 mt-3 text-sm cursor-pointer hover:bg-white/80'>
        Save Changes
      </button>
    </div>
  )
}

export default AccountCard
