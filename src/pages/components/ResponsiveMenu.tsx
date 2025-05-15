import { Link } from "react-router-dom"


const ResponsiveMenu = ({setShowMenu, showMenu}: any) => {
    
    const navbarLinks = [
        {
            name: "ABOUT",
            link: "/about"
        },
        {
            name: "MINISTRIES",
            link: "/ministries"
        },
        {
            name: "CONTACT",
            link: "/contact"
        },
        {
            name: "CHURCH GROUPS"
        }
    ]
  return (
    <div><div className={`${showMenu ? 'left-0' : '-left-[100%]'} fixed bottom-0 top-0 z-20 flex h-screen w-[75%] flex-col justify-between bg-white dark:bg-gray-900 dark:text-white px-8 pb-6 pt-16 text-black transition-all duration-200 md:hidden rounded-r-xl shadow-md`}>

        {/* Navlinks section */}
                <div>
                    <ul className="space-y-4 text-xl" >
                        {navbarLinks.map(({name, link}: any) => (
                            <li >
                                <Link to={link}
                                onClick={() => setShowMenu(false)}
                                className="mb-5 inline-block"
                                >{name}</Link>
                            </li>
                        ))}
                        <li></li>
                    </ul>
                </div>
        </div>
    </div>
  )
}

export default ResponsiveMenu