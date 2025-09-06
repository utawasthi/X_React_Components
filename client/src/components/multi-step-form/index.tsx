import { useState } from "react";


function StepOne ({formData , setFormData} : any) {
  return (
    <div className = 'space-y-2'>
      <label className = 'block text-sm'>
        Name
      </label>
      <input 
        type = "text"
        value = {formData.name || ""}
        placeholder = "Username"
        onChange = {(e) => setFormData({...formData , name : e.target.value})}
        className = 'w-full p-2 rounded-lg border border-white/20 text-white focus:outline-none'
      />
    </div>
  )
}

function StepTwo({ formData, setFormData }: any) {
  return (
    <div className="space-y-2">
      <label className="block text-sm">Email</label>
      <input
        type="email"
        placeholder = "Email"
        value={formData.email || ""}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        className="w-full p-2 rounded border border-white/20 text-white focus:outline-none"
      />
    </div>
  );
}

function StepThree({ formData, setFormData }: any) {
  return (
    <div className="space-y-2">
      <label className="block text-sm">Password</label>
      <input
        type="password"
        placeholder = "Password"
        value={formData.password || ""}
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        className="w-full p-2 rounded border border-white/20 text-white focus:outline-none"
      />
    </div>
  );
}


function MultiStepForm() {

  const [currentStep , setCurrentStep] = useState<number>(0);
  const [formData , setFormData] = useState({});

  const steps = [
    {
      component : StepOne, 
      title : "Personal Info",
    },
    {
      component : StepTwo,
      title : "Contact Info",
    },
    {
      component : StepThree,
      title : "Security",
    }
  ];

  const CurrentStepComponent = steps[currentStep].component;

  const handleNext = () => {
    if(currentStep < steps.length - 1){
      setCurrentStep((prev) => prev + 1);
    }
    else{
      console.log("Submitting form data" , formData);
      alert("✅ Form Submitted!");
    }
  }

  const handleBack = () => {
    if(currentStep > 0) setCurrentStep(prev => prev - 1);  
  }

  const progress = ((currentStep + 1) / steps.length) * 100;

  return (
    <div className = 'h-screen pt-10'>
      <h2 className = 'text-white text-4xl text-center'>
        MultiStep Form
      </h2>
      <div className = 'max-w-lg mx-auto mt-30 px-8 py-10 rounded-lg text-white space-y-6 border border-white/20'>
        <div className = 'w-full bg-gray-600 rounded-full h-2'>
          <div
            className = 'bg-emerald-500 h-2 rounded-full transition-all'
            style = {{
              width : `${progress}%`
            }}
          >
          </div>
        </div>
        <h2>
          {steps[currentStep].title}
        </h2>
        <CurrentStepComponent 
          formData = {formData} 
          setFormData = {setFormData}
        />
        <div className = 'flex justify-between'>
          <button
            onClick = {handleBack}
            disabled = {currentStep === 0}
            className="px-4 py-2 rounded bg-gray-500 disabled:opacity-50"
          >
            Back
          </button>
          <button
          onClick = {handleNext}
          className="px-4 py-2 rounded bg-emerald-600 hover:bg-emerald-700"
          >
            {
              currentStep === steps.length - 1 ? "Submit" : "Next"
            }
          </button>
        </div>

      </div>
    </div>
  )
}

export default MultiStepForm
