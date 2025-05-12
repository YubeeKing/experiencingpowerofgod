import { FaAngleRight } from "react-icons/fa6"
import { Link } from "react-router-dom"


const SubHero = () => {
  return (
    <div>
        <div className="bg-suhero bg-cover bg-center bg-opacity-20 h-[50vh]">
        <div className="container">
            <div className="flex flex-row gap-2 items-center justify-center ">
                <h3>CONTACT</h3>
                <div className="flex gap-2 items-center">
                    <Link to="/">HOME</Link>
                    <FaAngleRight />
                    <Link to="">CONTACT</Link>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default SubHero