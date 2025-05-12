import { Link } from "react-router-dom"
import { homelogo } from "../../assets"
import { FaFacebook, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa6"


const Navbar = () => {
  return (
    <>
    <div>
        <div className="container">
           <div className="flex flex-row justify-between items-center py-1">
                <p className="text-trdcolor font-[600] text-[13px] font-[Jost]">Church Address: 5/7 Abuchi Obi Street Off Pedro Street Transformer Busstop, Bucknor Estate Ejigbo, Lagos State.</p>
                <div className="flex gap-2 md:gap-4 items-center float-">
                    <Link to="">
                    <FaFacebook size={23} color="#452a45"/>
                    </Link>
                    <Link to="">
                    <FaYoutube size={23} color="#452a45"/>
                    </Link>
                    <Link to="">
                    <FaInstagram size={23} color="#452a45"/>
                    </Link>
                    <Link to="">
                    <FaTiktok size={23} color="#452a45"/>
                    </Link>
                </div>
            </div> 
        </div>
    </div>
    <div className="bg-[#f3e9f6]">
        <div className="container">
            
            <div className="flex flex-row justify-between items-center py-4 bg-transparent font-[Jost]">
                <Link to="/" className="flex items-center gap-1">
                <img src={homelogo} alt="" className="w-12" />
                <h2 className="font-[600] text-2xl font-[Jost]">EPG</h2>
                </Link>
                <nav className="flex flex-row gap-4  font-[Jost]">
                    {/* <Link to="/">Home</Link>
                    <Link to="/">WHO WE ARE</Link> */}
                    <Link to="/ministries">MINISTRIES</Link>
                    <Link to="/contact">CONTACT</Link>
                    <Link to="/online-giving">GIVE</Link>
                    <Link to="/daddy-and-mummy-epg">DADDY & MUMMY EPG</Link>
                    <Link to="/group">Groups</Link>
                    <Link to="/mission-vision">Mission & Vision</Link>
                    <Link to="/share-testimony">Share Your Testimony</Link>
                    <Link to="/calendar">Calendar</Link>
                    <Link to="/history">History</Link>
                </nav>
                <div>
                    <button className="px-4 py-2 rounded  font-[Jost]">Give</button>
                </div>
            </div>
        </div>
    </div>
    </>
    
  )
}

export default Navbar