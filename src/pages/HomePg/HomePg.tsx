import { heroImg } from "../../assets"
import { HomeHero, SendPrayReq } from "../components"
import { TestyCard } from "../components/TestyCarousel"
import Slider from "react-slick";

interface timtypes {
    timtype: string
}


const HomePg = () => {
    const weeklyActivities = [
        {
            id: 1,
            title: "Sunday Service",
            time: "8am - 11:30am"
        },
        {
            id: 2,
            title: "Tuesday Bible Study",
            time: "6pm - 7:30pm"
        },
        {
            id: 3,
            title: "Thursday Non-Denominational and Prophetic Service",
            time: "9am - 2pm"
        }
    ]
    // const monthlyActivities = [

    // ]
    var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

    const Timbox = ({timtype}: timtypes) => {
        return(
            <div className="w-28 py-1.5 border border-primary text-center rounded">
                <p className="font-[500] text-sm">{timtype}</p>
            </div>
        )
    }
  return (
    <div>
        <HomeHero />
        <div className="container">
                {/* OUR SERVICES */}
            <div >
                <div>
                    <h3 className="text-2xl text-primary font-[600]">OUR SERVICE SCHEDULE</h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-4 md:gap-8">
                        <div>
                         <h3 className="text-2xl font-[600] text-trdcolor font-[Jost] py-4">Weekly Program</h3>
                        <div className="flex flex-col gap-2 py-2">
                        {
                            weeklyActivities.map((item) => (
                              <div className="grid grid-cols-3 justify-center items-center gap-4" key={item.id}>
                            <p className="font-[600] text-lg">{item.title}</p>
                            <hr />
                            <Timbox timtype="8am - 11:30am" />
                        </div>  
                            ))
                        }    
                        </div>   
                        </div>
                        <div>
                            <Slider {...settings}>
      <div className="">
        <img src={heroImg} alt="" className="w-full rounded-lg"/>
      </div>
      <div>
        <img src={heroImg} alt="" className="w-full rounded-lg"/>
      </div>
      <div>
        <img src={heroImg} alt="" className="w-full rounded-lg"/>
      </div>
      <div>
        <img src={heroImg} alt="" className="w-full rounded-lg"/>
      </div>
      <div>
        <img src={heroImg} alt="" className="w-full rounded-lg"/>
      </div>
      <div>
        <img src={heroImg} alt="" className="w-full rounded-lg"/>
      </div>
    </Slider>
                            {/* <img src={heroImg} alt="" className="w-full rounded-lg"/> */}
                        </div>
                        
    
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-4 md:gap-8 py-12">
                        <div className="pe-0 md:pe-20">
                         <h3 className="text-xl font-[600] text-trdcolor font-[Jost]">Monthly Program</h3>
                         <div>
                        <div className="flex flex-row gap-2 py-2 justify-between items-center">
                        <p className="font-[500] text-lg leading-5">A Day with the Lord programme</p>
                        <hr />
                        <Timbox timtype="9am - 3pm" />
                        </div>   
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero molestias ex ipsum alias, debitis, exercitationem quasi quis dolor sunt, praesentium totam optio autem. Unde, dolore.</p>          
                         </div>
                         <div>
                        <div className="flex flex-row gap-2 py-2 justify-between items-center">
                        <p className="font-[500] text-lg leading-5">Counseling Program</p>
                        <hr />
                        <Timbox timtype="9am - 3pm" />
                        </div>   
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero molestias ex ipsum alias, debitis, exercitationem quasi quis dolor sunt, praesentium totam optio autem. Unde, dolore.</p>          
                         </div>
                        <div>
                        <div className="flex flex-row gap-2 py-2 justify-between items-center">
                        <p className="font-[500] text-lg leading-5">Prophetic Sunday Service with Prophetess S.I Ezekwe</p>
                        <hr />
                        <Timbox timtype="9am - 3pm" />
                        </div>   
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero molestias ex ipsum alias, debitis, exercitationem quasi quis dolor sunt, praesentium totam optio autem. Unde, dolore.</p>          
                         </div>
                        </div>
                        <div>
                            <img src={heroImg} alt="" className="w-full rounded-lg" />
                        </div>
                        
    
                    </div>
                    <div>
                        <h3>Annual Program</h3>
                    </div>
                </div>
                <div></div>
            </div>
            {/* TESTIMONIES */}
            <div className="w-full md:w-1/2 flex flex-col items-center gap-4 mx-auto text-center py-4">
            <h3 className="text-2xl text-center font-[600] font-[Jost]">TESTIMONIES</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt dolorem error optio voluptatum ipsa architecto consectetur omnis esse odio totam.</p>
            </div>
            <TestyCard />
            <SendPrayReq />
            <div style={{width: "100%"}}><iframe width="100%" height="600"  src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=5/7%20Abuchi%20Obi%20Street%20Off%20Pedro%20Street%20Transformer%20Busstop,%20Bucknor%20Estate%20Ejigbo,%20Lagos%20State.+(EXPERIENCING%20POWER%20OF%20GOD%20(E.P.G)%20PROPHETIC%20MINISTRY)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/collections/personal-trackers/">Personal GPS</a></iframe></div>
        </div>
    </div>
  )
}

export default HomePg