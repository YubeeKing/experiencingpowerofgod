import { heroImg } from "../assets"
import { Navbar, SendPrayReq, SubHero } from "./components"


const AboutPg = () => {
  return (
    <div>
        <Navbar />
        <SubHero />
        {/* About */}
        <div className="container">
            <div className="py-6">
<h2 className="text-center font-[Jost] font-[600]">About Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-4 md:gap-8 py-12">
                <div>
                    <img src={heroImg} alt="" className="rounded-lg w-full"/>
                </div>
                <div>
                    <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores reprehenderit ipsum magni neque qui, alias possimus beatae animi, aspernatur error, esse rem unde dolores ipsam! Consequatur aspernatur ad aut. A?</p>
                </div>
            </div>
            </div>
            {/* vISION */}
            <div className="py-6">
<h2 className="text-center font-[Jost] font-[600]">About Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-4 md:gap-8 py-12">
                <div>
                    <img src={heroImg} alt="" className="rounded-lg w-full"/>
                </div>
                <div>
                    <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores reprehenderit ipsum magni neque qui, alias possimus beatae animi, aspernatur error, esse rem unde dolores ipsam! Consequatur aspernatur ad aut. A?</p>
                </div>
            </div>
            </div>
            {/* MISSION */}
            <div className="py-6">
<h2 className="text-center font-[Jost] font-[600]">About Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-4 md:gap-8 py-12">
                <div>
                    <img src={heroImg} alt="" className="rounded-lg w-full"/>
                </div>
                <div>
                    <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores reprehenderit ipsum magni neque qui, alias possimus beatae animi, aspernatur error, esse rem unde dolores ipsam! Consequatur aspernatur ad aut. A?</p>
                </div>
            </div>
            </div>
            {/* STATEMENT OF FAITH */}
            <div className="py-6">
<h2 className="text-center font-[Jost] font-[600] text-3xl">Statement of Faith</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-4 md:gap-8 py-12">
                <div>
                    <img src={heroImg} alt="" className="rounded-lg w-full"/>
                </div>
                <div>
                    <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores reprehenderit ipsum magni neque qui, alias possimus beatae animi, aspernatur error, esse rem unde dolores ipsam! Consequatur aspernatur ad aut. A?</p>
                </div>
            </div>
            </div>
        </div>
        <SendPrayReq />
    </div>
  )
}

export default AboutPg