import { heroImg } from "../assets";
import { Navbar, SubHero } from "./components";
import { Button } from "./ui";

const Ministries = () => {
  return (
    <div>
      <Navbar />
      <SubHero />
      <div className="container py-12">
        {/* Soldiers of Christ */}
        <div className="grid grid-cols-1 md:grid-cols-2 justify-center gap-4 md:gap-12 items-center py-12">
          <div>
            <img src={heroImg} alt="" className="w-full rounded-lg"/>
          </div>
          <div>
            <h3 className="text-3xl font-[500] font-[Jost]">
              Soldier of Christ
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
              quia sunt ullam. Natus, tempora voluptates iusto beatae harum
              assumenda animi, repudiandae inventore ducimus hic molestias ipsa
              enim distinctio. Ipsum, voluptatum!
            </p>
            <div className="grid grid-cols-2 justify-start items-center gap-2 md:gap-4 py-2">
              <div>
                <h4 className="font-[600] text-lg font-[Jost]">Monthly General Meeting Holds: </h4>
                <p>Every 2nd Sunday of the month</p>
                <p><span className="font-[500] font-[Jost]">Time:</span> Immediately After Service</p>
              </div>
              <div>
                <h4 className="font-[600] text-lg font-[Jost]">Monthly Prayer Vigil Holds: </h4>
                <p>Every 2nd Friday of the month</p>
                <p><span className="font-[500] font-[Jost]">Time:</span>11pm to 4am</p>
              </div>
            </div>
            <h2 className="font-[Jost] text-lg md:text-2xl pt-3">Co-Ordinator</h2>
            <div className="flex flex-row gap-4 justify-start items-center ">
              <div>
                <h3 className="text-xl font-[500] font-[Jost]">Name: </h3>
                <p className="text-lg">Mr. Chidi Anogum</p>
              </div>
              <div>
                <h3 className="text-xl font-[500] font-[Jost]">Phone Number:</h3>
                <p className="text-lg">01234567890</p>
              </div>
            </div>
            <div className="pt-2">
              <Button btntext="Join Now" />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 justify-center gap-4 md:gap-8 items-center py-12">
            <div>
            <h3 className="text-3xl font-[500] font-[Jost]">
              Daughter of Zion
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
              quia sunt ullam. Natus, tempora voluptates iusto beatae harum
              assumenda animi, repudiandae inventore ducimus hic molestias ipsa
              enim distinctio. Ipsum, voluptatum!
            </p>
            <div className="grid grid-cols-2 justify-start items-center gap-2 md:gap-4 py-2">
              <div>
                <h4 className="font-[600] text-lg font-[Jost]">Monthly General Meeting Holds: </h4>
                <p>Every 2nd Sunday of the month</p>
                <p><span className="font-[500] font-[Jost]">Time:</span> Immediately After Service</p>
              </div>
              <div>
                <h4 className="font-[600] text-lg font-[Jost]">Monthly Prayer Vigil Holds: </h4>
                <p>Every 1st Friday of the month</p>
                <p><span className="font-[500] font-[Jost]">Time:</span>11pm to 4am</p>
              </div>
            </div>
            <div>
                <h4 className="font-[600] text-lg font-[Jost]">Weekly General Prayer Meeting Holds: </h4>
                <p>Every Monday</p>
                <p><span className="font-[500] font-[Jost]">Time:</span> 9am to 12pm</p>
              </div>
            <h2 className="font-[Jost] text-lg md:text-2xl pt-3">Co-Ordinator</h2>
            <div className="flex flex-row gap-4 justify-start items-center ">
              <div>
                <h3 className="text-xl font-[500] font-[Jost]">Name: </h3>
                <p className="text-lg">Mr. Chidi Anogum</p>
              </div>
              <div>
                <h3 className="text-xl font-[500] font-[Jost]">Phone Number:</h3>
                <p className="text-lg">01234567890</p>
              </div>
            </div>
            <div className="pt-2">
              <Button btntext="Join Now" />
            </div>
          </div>
          
          <div>
            <img src={heroImg} alt="" className="w-full rounded-lg"/>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 justify-center gap-4 md:gap-8 items-center py-12">
          <div>
            <img src={heroImg} alt="" className="rounded-lg w-full"/>
          </div>
          <div>
            <h3 className="text-3xl font-[500] font-[Jost]">
              Youth of Fire
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
              quia sunt ullam. Natus, tempora voluptates iusto beatae harum
              assumenda animi, repudiandae inventore ducimus hic molestias ipsa
              enim distinctio. Ipsum, voluptatum!
            </p>
            <div className="grid grid-cols-2 justify-start items-center gap-2 md:gap-4 py-2">
              <div>
                <h4 className="font-[600] text-lg font-[Jost]">Monthly General Meeting Holds: </h4>
                <p>Every 2nd Sunday of the month</p>
                <p><span className="font-[500] font-[Jost]">Time:</span> Immediately After Service</p>
              </div>
              <div>
                <h4 className="font-[600] text-lg font-[Jost]">Monthly Prayer Vigil Holds: </h4>
                <p>Every 1st Friday of the month</p>
                <p><span className="font-[500] font-[Jost]">Time:</span>11pm to 4am</p>
              </div>
            </div>
            <h2 className="font-[Jost] text-lg md:text-2xl pt-3">Co-Ordinator</h2>
            <div className="flex flex-row gap-4 justify-start items-center ">
              <div>
                <h3 className="text-xl font-[500] font-[Jost]">Name: </h3>
                <p className="text-lg">Bro. Samuel </p>
              </div>
              <div>
                <h3 className="text-xl font-[500] font-[Jost]">Phone Number:</h3>
                <p className="text-lg">01234567890</p>
              </div>
            </div>
            <div className="pt-2">
              <Button btntext="Join Now" />
            </div>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default Ministries;
