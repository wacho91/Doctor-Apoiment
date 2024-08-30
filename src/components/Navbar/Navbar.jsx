import { useState } from "react"
import { FaBars } from "react-icons/fa";
import { LiaTimesSolid } from "react-icons/lia";
import { Link } from "react-router-dom";


const Navbar = () => {

    const [open, setOpen] = useState(false);

    const navLink = [
        {href: "/", label: "Home"},
        {href: "/about", label: "About"},
        {href: "/services", label: "Services"},
        {href: "/doctors", label: "Doctors"},
        {href: "/blogs", lable: "Blogs"}
    ]

    const handleClick = () => {
        setOpen(!open);
    }

    const handleClose = () => {
        setOpen(false);
    }

  return (
    <nav className="w-full h-[8ch] bg-neutral-50 flex items-center md:flex-row lg:px-32 md:px-16 sm:px-8 px-4 border-b border-nuetral-200">
      {/*Logo Section*/}
      <Link to="/" className="text-2xl text-blue-500 font-bold mr-16 flex items-center">
        Doctor
      </Link>
      {/*Toggle Button*/}
      <button onClick={handleClick} className="btn flex-1 lg:hidden text-neutral-600 ease-in-out suration-300 flex items-center justity-end">
        {
            open ?
            <LiaTimesSolid  className="text-xl"/>
            :
            <FaBars  className="text-xl"/>
        }
      </button>
      {/*Nav Items And Buttons*/}
    </nav>
  )
}

export default Navbar
