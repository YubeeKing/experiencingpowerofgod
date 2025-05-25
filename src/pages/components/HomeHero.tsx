import Navbar from "./Navbar";
import Slider from "react-slick";
import { homepayment, homepaymobile, homethurs, homethursmob, homewelcome, homewelmobile } from "../../assets";

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
    <div className="">

        <Navbar />
        {/* <div className="pt-12"> */}
        <Slider {...settings}>
            <div className="h-[90vh]">
               <img src={window.innerWidth > 767 ? homewelcome : homewelmobile} alt="" className="h-full w-full object-cover" />
               
            </div>
            <div 
            className="h-[90vh]"
            // className="h-[100vh] bg-herotwo bg-center bg-cover bg-opacity-80"
            >
                <img src={window.innerWidth > 767 ? homethurs: homethursmob} alt="" className="h-full w-full" />
                
            </div>
            <div className="h-[90vh]">
                <img src={window.innerWidth > 767 ? homepayment: homepaymobile} alt="" className="h-full w-full object-cover"/>
                
            </div>
        </Slider>  
        {/* </div> */}
        
    </div>
  )
}

export default HomeHero
