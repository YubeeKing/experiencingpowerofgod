import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Slider from "react-slick";
import { Button } from "../ui";

const HomeHero = () => {
    const settings = {
        dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false
    }

  return (
    <div className="h-screen">

        <Navbar />
        <Slider {...settings}>
            <div className="h-[75vh] bg-heroimgone bg-center bg-opacity-50 bg-cover flex justify-center items-center align-middle w-full ">
                <div className="flex justify-center items-center backdrop-brightness-50 border-l-indigo-900 w-full h-full text-white">
                <div className="md:w-3/4 w-full flex flex-col gap-4 justify-center items-center">
                  <h3 className="text-xl md:text-5xl text-center">WELCOME TO THE EXPERIENCING POWER OF GOD PROPHETIC MINISTRY</h3>

                    <p className="text-center md:text-lg text:sm">Navigate the markets with confidence using our advanced trading platform, designed for both beginners and seasoned investors seeking precision, speed, and reliability</p>
                    <Link to="/login">
                     <Button btntext="Get Started"/> 
                    </Link>
                    
                </div>
              </div>
               
            </div>
            <div className="h-[75vh] bg-suhero bg-center bg-cover bg-opacity-80">
              <div className="flex justify-center items-center backdrop-brightness-50 border-l-indigo-900 w-full h-full text-white">
                <div className="md:w-3/4 w-full flex flex-col gap-4 justify-center items-center">
                <h3 className="text-xl md:text-5xl text-center">WELCOME TO THE EXPERIENCING POWER OF GOD PROPHETIC MINISTRY</h3>
                    <p className="text-center md:text-lg" >Our user-friendly interface and powerful tools make trading and investing accessible to everyone. Whether you're a seasoned pro or just starting, we've got you covered.</p>
                    <Link to="/login">
                     <Button btntext="Get Started"/> 
                    </Link>
                </div>
              </div>
                
                
            </div>
            <div className="h-[75vh] bg-heroimgthree bg-center bg-cover">
                <div className="flex justify-center items-center backdrop-brightness-50 border-l-indigo-900 w-full h-full text-white">
                <div className="md:w-3/4 w-full flex flex-col gap-4 justify-center items-center">
                <h3 className="text-xl md:text-5xl text-center">WELCOME TO THE EXPERIENCING POWER OF GOD PROPHETIC MINISTRY</h3>
                    <p className="text-center md:text-lg"> Our platform combines advanced technology and expert insights to revolutionize your trading and investment journey.</p>
                    <Link to="/login">
                     <Button btntext="Get Started"/> 
                    </Link>
                </div>
              </div>
                
            </div>
        </Slider>
    </div>
  )
}

export default HomeHero
