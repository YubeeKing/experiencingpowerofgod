import { Link, NavLink } from "react-router-dom"
import { homelogo } from "../../assets"
import { FaCaretDown, FaFacebook, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa6"
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi"
import ResponsiveMenu from "./ResponsiveMenu"
import { useState } from "react"



const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu)
    }

    const dropdownLinks = [
        {
            name: "CHURCH GROUPS",
            link: "/groups"
        },
        {
            name: "MUMMY & DADDY EPG",
            link: "/daddy-and-mummy-epg"
        },
        {
            name: "SUBMIT YOUR TESTIMONY",
            link: "share-testimony"
        }
    ]
  return (
    <>
    <div>
        <div className="container">
           <div className="flex flex-row justify-between flex-wrap items-center py-1">
                <p className="text-trdcolor font-[600] text-[13px] font-[Jost] text-center md:text-start">Church Address: 5/7 Abuchi Obi Street Off Pedro Street Transformer Busstop, Bucknor Estate Ejigbo, Lagos State.</p>
                <div className="flex gap-2 md:gap-4 items-center mx-auto md:mx-0">
                    <Link to="https://web.facebook.com/profile.php?id=61567068557049" target="_blank">
                    <FaFacebook size={23} color="#452a45"/>
                    </Link>
                    <Link to="https://www.youtube.com/" target="_blank">
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
        <div className="container py-3 sm:py-0">
          <div className="flex justify-between items-center">
            {/* Logo section */}
            <div>
              <Link to="/" onClick={() => window.scrollTo(0, 0)} className="flex items-center gap-1">
              <img src={homelogo} className="w-12" alt="" />
              <h1 className="font-[500] font-[Jost] text-2xl">EPG</h1></Link>
            </div>
            {/* Desktop Navlinks section */}
            <div className="hidden md:block">
              <ul className="flex items-center gap-6">
                <li className="py-4">
                  <NavLink to="/about" className="font-[500] font-[Jost]"  onClick={() => window.scrollTo(0, 0)}>
                  ABOUT
                  </NavLink>
                </li>
                <li className="py-4">
                  <NavLink to="/ministries" className="font-[500] font-[Jost]"  onClick={() => window.scrollTo(0, 0)}>
                  MINISTRIES
                  </NavLink>
                </li>
                <li className="py-4 font-[500]">
                  <NavLink to="/contact" className="font-[500] font-[Jost]" onClick={() => window.scrollTo(0, 0)}>
                  CONTACT
                  </NavLink>
                </li>
                {/* Dropdown section */}
                <li className="py-4 relative group cursor-pointer">
                  <div className="dropdown group flex items-center">
                    <span>RESOURCES</span>
                    <span>
                      <FaCaretDown className="transition-all duration-200 group-hover:rotate-180"/> 
                    </span>
                  </div>
                  <div className="absolute left-0 top-14 z-[9999] hidden group-hover:block shadow-md text-black w-[180px] bg-white">
                    <ul>
                      {
                        dropdownLinks.map((data) =>(
                          <li key={data.name}>
                            <a href={data.link} className="inline-block w-full font-[500] text-sm p-2 hover:bg-primary/20">{data.name}</a>
                          </li>
                        )) 
                      }
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              {/* Book Now Button */}
              <div className="flex items-center gap-4">
                <Link to="/online-giving">
                <button
                className="bg-gradient-to-r from-[#fe4cde] to-[#fedc4d] hover:bg-amber-50 transition-all duration-500 text-white px-3 py-1 rounded-full"
                >GIVE</button>
                </Link>
                
               {/* Mobile Hamburger meun */}
              <div className="md:hidden block">
                {showMenu ? (
                  <HiMenuAlt1
                  onClick={toggleMenu}
                  className="cursor-pointer transition-all" size={30} />
                ): (
                  <HiMenuAlt3
                  onClick={toggleMenu}
                  className="cursor-pointer transition-all" size={30} />
                )}
              </div> 
              </div>
              
            </div>
          </div>
        </div>
        <ResponsiveMenu setShowMenu={setShowMenu} showMenu={showMenu} />
    </div>
    </>
    
  )
}

export default Navbar