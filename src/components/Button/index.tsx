import { Button } from "./btn"


function Btn() {
  return (
    <div className = 'flex flex-col gap-10 items-center justify-center border border-black p-30 h-screen'>
      <h2 className = 'text-2xl text-emerald-500 font-bold tracking-wider'>
        Button Variants
      </h2>
      <Button>
        Primary 
      </Button>
      <Button variant = "secondary">
        Secondary
      </Button>
      <Button isLoading = {true}>
        Loading
      </Button>
      <Button disabled = {true}>
        Disabled
      </Button>
      <Button variant = "danger">
        Danger
      </Button>
      <Button variant = "info">
        Info
      </Button>
      <Button variant = "warning">
        Warning
      </Button>
    </div>
  )
}

export default Btn
