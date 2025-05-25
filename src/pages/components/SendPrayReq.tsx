import React,{useState} from "react"
import { toast } from "react-toastify"


const SendPrayReq = () => {
    const [formData, setFormData] = useState({
        fullname: "",
        email: "",
        number:"",
        message: ""
    })

     const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormData({...formData, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();

      const form = new FormData();
      form.append("form-name", "contact");
      Object.keys(formData).forEach((key) => form.append(key, formData[key as keyof typeof formData]));

      fetch("/", {
        method: "POST",
        body: form
      }).then(() => toast.success("Received, We will contact you shortly", {position: "top-center"})).catch((error) => toast.error(`Submission failed: ${error}`))
    }

  return (
    <div>
        <div className="container">
            <div className="w-full md:w-2/3 py-6 mx-auto">
            <h3 className="font-[Jost] text-2xl font-[500] text-[#452a45]">SEND PRAYER REQUEST</h3>  
          <p>Fill this form to send in your prayer request. We are here to pray with you.
</p>
<p>Fields marked with an * are required</p>
          <div>
            <form name="prayreq" method="POST" data-netlify="true" onSubmit={handleSubmit}>
                <div className="w-full bg-white flex flex-col md:ml-auto md:py-8 mt-8 md:mt-0">
            <div className="relative mb-2">
                <label  className="leading-7 text-sm md:text-lg text-gray-600 font-[600]">Full Name</label>
                <input type="text" id="fullname" name="fullname" className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" onChange={handleChange} />
            </div>
            <div className="relative mb-2">
                <label  className="leading-7 text-sm md:text-lg text-gray-600 font-[600]">Phone Number</label>
                <input type="text" id="number" name="number" className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" onChange={handleChange}/>
            </div>
            <div className="relative mb-2">
                <label  className="leading-7 text-sm md:text-lg text-gray-600 font-[600]">Email Address</label>
                <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" onChange={handleChange}/>
            </div>
            <div className="relative mb-2">
                <label  className="leading-7 text-sm md:text-lg text-gray-600 font-[600]">What's your prayer request</label>
                <textarea id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" onChange={handleChange}></textarea>
            </div>
            <button className="text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg">Send Request</button>
            {/* <p className="text-xs text-gray-500 mt-3">Chicharrones blog helvetica normcore iceland tousled brook viral
                artisan.</p> */}
        </div>
            </form>
          </div>
            </div>
          
        </div>
        
    </div>
  )
}

export default SendPrayReq