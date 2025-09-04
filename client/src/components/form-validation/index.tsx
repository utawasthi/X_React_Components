import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod"


const signupSchema = z.object({
  name : z.string().min(2 , "Name must be at least 2 characters long"),
  email : z.string().email("Invalid Email"),
  password : z.string().min(8 , "Password must be at least 8 characters long")
});

type SignupFormValues = z.infer<typeof signupSchema>;

function FormValidation() {
  

  const {
    register , 
    handleSubmit , 
    formState : {errors , isSubmitting}
  } = useForm<SignupFormValues>({resolver : zodResolver(signupSchema)});
  
   const onSubmit = (data : SignupFormValues) => {
    console.log("Form submitted" , data);
   }

  return (
    <div className = 'h-screen text-white flex flex-col gap-10 px-20 pt-5 items-center justify-center'>
      <h2 className = 'text-4xl text-violet-500 tracking-wide text-center mb-10'>
        Form Validation Component
      </h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className = 'flex flex-col gap-7 w-[70vw] border border-white/20 rounded-3xl px-5 py-10'
      >
        <div className = 'flex items-center justify-center'>
          <div className = 'w-[80%] flex flex-col gap-2'>
            <label>
              Name
            </label>
            <input 
              type = 'text'
              placeholder = "Username"
              {...register("name")}
              className="px-4 py-3 rounded-3xl bg-gray-700 text-white focus:outline-none"
            />
            {
              errors.name && (
                <p className = 'text-red-400 text-sm'>
                  {errors.name.message}
                </p>
              )
            }
          </div>
        </div>
        <div className = 'flex items-center justify-center'>
         <div className = 'w-[80%] flex flex-col gap-2 justify-center'>
            <label>
              Email
            </label>
            <input
              type="email"
              placeholder = "Email Address"
              {...register("email")}
              className="px-4 py-3 focus:outline-none rounded-3xl bg-gray-700 text-white"
            />
            {errors.email && (
              <p className="text-red-400 text-sm">{errors.email.message}</p>
            )}
          </div>
        </div>

       <div className = 'flex items-center justify-center'>
         <div className = 'w-[80%] flex flex-col gap-2 justify-center'>
            <label className="block text-sm text-white">Password</label>
            <input
              type="password"
              placeholder = "Password"
              {...register("password")}
              className="px-4 py-3 focus:outline-none rounded-3xl bg-gray-700 text-white"
            />
            {errors.password && (
              <p className="text-red-400 text-sm">{errors.password.message}</p>
            )}
          </div>
       </div>
        <div className = 'flex justify-center items-center'>
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-violet-700 text-white px-4 py-2 rounded-3xl hover:bg-violet-600 disabled:opacity-50 w-[50%] cursor-pointer"
          >
            {isSubmitting ? "Submitting..." : "Sign Up"}
          </button>
        </div>
      </form>
    </div>
  )
}

export default FormValidation
