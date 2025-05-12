import React,{useState} from "react"
import { toast } from "react-toastify"


const SendPrayReq = () => {
    const [formData, setFormData] = useState({
        fullname: "",
        email: "",
        phonenumber:"",
        prayerrequest: ""
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
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem quia quisquam ipsum ad nobis labore repellat officia ab, nesciunt corrupti.</p>
          <div>
            <form onSubmit={handleSubmit}>
                <div className="flex flex-col gap-1">
                    <label className="font-[500] text-[#452a45] text-lg pt-2">Full Name</label>
                    <input type="text" className="py-1.5 px-3 border-2 border-[#452a45] rounded-lg " name="fullname" onChange={handleChange} />
                </div>
                <div className="flex flex-col gap-1">
                    <label className="font-[500] text-[#452a45] text-lg pt-2">Email Address</label>
                    <input type="text" name="email" className="py-1.5 px-3 border-2 border-[#452a45] rounded-lg " onChange={handleChange} />
                </div>
                <div className="flex flex-col gap-1 pt-2">
                    <label className="font-[500] text-[#452a45] text-lg pt-2">Phone Number</label>
                    <input type="text" name="phonenumber" className="py-1.5 px-3 border-2 border-[#452a45] rounded-lg " onChange={handleChange} />
                </div>
                <div className="flex flex-col gap-1">
                    <label className="font-[500] text-[#452a45] text-lg pt-2">What is your prayer request?</label>
                    <textarea name="prayerrequest" className="border-2 border-[#452a45] rounded-lg font-[500] text-white h-[300px]" id=""></textarea>
                </div>
                <div className="pt-4">
                    <button className="w-full py-2 rounded bg-[#452a45] font-[500] text-white">SEND REQUEST</button>
                </div>
            </form>
          </div>
            </div>
          
        </div>
        
    </div>
  )
}

export default SendPrayReq