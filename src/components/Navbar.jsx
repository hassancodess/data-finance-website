import { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
function Navbar() {
  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav((prev) => {
      return !prev
    })
  }
  return (
    <>
      {/* Navbar Container */}
      <nav className='container p-4 mx-auto text-white'>
        {/* Flex Container for Items */}
        <div className='flex items-center justify-between '>
          {/* Logo */}
          <h1 className='text-3xl font-bold uppercase text-cyanGreen'>
            React.
          </h1>
          {/* Menu Items */}
          <div className='hidden space-x-10 md:flex'>
            <a href='#' className='duration-300 hover:text-cyanGreen'>
              Home
            </a>
            <a href='#' className='duration-300 hover:text-cyanGreen'>
              Company
            </a>
            <a href='#' className='duration-300 hover:text-cyanGreen'>
              Resources
            </a>
            <a href='#' className='duration-300 hover:text-cyanGreen'>
              About
            </a>
            <a href='#' className='duration-300 hover:text-cyanGreen'>
              Contact
            </a>
          </div>
          {/* Hamburger Menu */}
          <div className='md:hidden ' onClick={handleNav}>
            {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
          </div>
        </div>
        {/* Mobile Menu */}
        {nav && (
          <div className='container top-0 left-0 flex flex-col items-center py-6 mx-auto mt-6 space-y-8 uppercase bg-cyanGreen rounded-xl'>
            <a href='#' className='duration-300 hover:text-cyanGreen'>
              Home
            </a>
            <a href='#' className='duration-300 hover:text-cyanGreen'>
              Company
            </a>
            <a href='#' className='duration-300 hover:text-cyanGreen'>
              Resources
            </a>
            <a href='#' className='duration-300 hover:text-cyanGreen'>
              About
            </a>
            <a href='#' className='duration-300 hover:text-cyanGreen'>
              Contact
            </a>
          </div>
        )}
      </nav>
    </>
  )
}

export default Navbar
