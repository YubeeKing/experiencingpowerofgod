import { Navbar, SendPrayReq, SubHero } from "./components"


const DeptGroups = () => {
    const deptInfo = [
        {
            id: 1,
            dept: "Soldiers of Christ",
            head: "Bro Chidi Anugum",
            phone: "080"
        },
        {
            id: 2,
            dept: "Daughters of Zion",
            head: "Sis. Judith Okenze",
            phone: "091234567"
        },
        {
            id: 3,
            dept: "Youth on Fire",
            head: "Bro. Samuel",
            phone: "080123457"
        }
    ]
  return (
    <div>
        <Navbar />
        <SubHero />

        <div className="container">
            <div className="py-12">
            <div className="w-full md:w-2/3 mx-auto">
             <div className="grid grid-cols-3 justify-center items-center py-2 bg-opacity-15 bg-primary px-4 rounded-tr-lg rounded-tl-lg">
                <div>
                    <p className="font-[Jost] font-[500] text-lg">DEPARTMENTS</p>
                </div>
                <div>
                    <p className="font-[Jost] font-[500] text-lg">HEAD OF DEPARTMENT</p>
                </div>
                <div>
                    <p className="font-[Jost] font-[500] text-lg">PHONE NUMBER</p>
                </div>
            </div>
            {
                deptInfo.map((item) => (
                 <div className="grid grid-cols-3 justify-center items-center py-2 hover:bg-opacity-5 hover:bg-primary  px-4 border-b-2 border-opacity-5 border-primary" key={item.id}>
                <div>
                    <p>{item.dept}</p>
                </div>
                <div>
                    <p>{item.head}</p>
                </div>
                <div>
                    <p>{item.phone}</p>
                </div>
            </div>      
                ))
            }
            
            </div>    
            </div>
            
            
        </div>
        <SendPrayReq />
    </div>
  )
}

export default DeptGroups