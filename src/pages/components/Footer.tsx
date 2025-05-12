import { Link } from "react-router-dom"
import { homelogo } from "../../assets"
import { BiCopyright } from "react-icons/bi"
import { FaHome, FaUserAlt } from "react-icons/fa"
import { FaFacebook, FaInstagram, FaPhone, FaTiktok, FaYoutube } from "react-icons/fa6"


const Footer = () => {
  return (
    <div className="bg-black text-white py-12">
        <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-start items-start">
                <div className="flex flex-col gap-2 py-2">
                    <Link to="/" className="flex flex-row gap-1 items-center">
                        <img src={homelogo} className="w-12" alt="" />
                        <h2 className="font-[Jost] text-2xl font-[600]">EPG</h2>
                    </Link>
                    <p className="leading-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. A repudiandae odit possimus maiores voluptatem ullam velit quia, tempora perferendis quos iste rerum blanditiis laudantium et.</p>
                    <div className="flex gap-2 md:gap-4 items-center py-2">
                                        <Link to="" target="_blank">
                                        <FaFacebook size={23} color="#fff"/>
                                        </Link >
                                        <Link to="" target="_blank">
                                        <FaYoutube size={23} color="#fff"/>
                                        </Link>
                                        <Link to="" target="_blank">
                                        <FaInstagram size={23} color="#fff"/>
                                        </Link>
                                        <Link to="" target="_blank">
                                        <FaTiktok size={23} color="#fff"/>
                                        </Link>
                                    </div>
                </div>
                <div>
                    <h3>Quick Link</h3>
                    <ul>
                        <li></li>
                    </ul>
                </div>
                <div>
                    <h3>Resources</h3>
                    <ul>
                        <li></li>
                    </ul>
                </div>
                <div className="flex flex-col gap-4 items-start">
                <div className="flex flex-row items-start justify-start gap-4">
                        <div className="rounded-full border border-white p-1 mt-1">
                           <FaUserAlt /> 
                        </div>
                    
                    <p className="font-[Jost] text-lg leading-5">Experiencing Power of God Prophetic Ministry</p>
                    </div>
                    <div className="flex flex-row items-start justify-start gap-4">
                        <div>
                           <FaHome size={26} /> 
                        </div>
                    
                    <p className="text-sm font-[Jost]">5/7 Abuchi Obi Street Off Pedro Street Transformer Busstop, Bucknor Estate Ejigbo, Lagos State.</p>
                    </div>
                    <div className="flex flex-row items-start justify-start gap-4">
                        <div>
                           <FaPhone size={26}/> 
                        </div>
                    
                    <p className="text-sm ">09123456789</p>
                    </div>
                </div>
            </div>
            <hr />
            <p className="text-center flex items-center gap-1">CopyRight<BiCopyright />2025</p>
        </div>
    </div>
  )
}

export default Footer