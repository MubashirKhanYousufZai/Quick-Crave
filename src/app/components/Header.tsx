import React from 'react'
import { CiSearch } from 'react-icons/ci'
import { FaCartShopping } from 'react-icons/fa6'
import { IoFastFoodOutline } from 'react-icons/io5'
import { MdOutlineAccountCircle } from 'react-icons/md'

const Header = () => {
  return (
    <div>
      <header className="text-gray-900 bg-blue-200 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0" href='/'>
            <IoFastFoodOutline className='text-3xl'/>
            <span className="ml-3 text-xl">Quick Crave</span>
            </a>
            <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <a className="mr-5 hover:text-gray-900" href='/'>Home</a>
            <a className="mr-5 hover:text-gray-900" href='/components/menu'>Menu</a>
            <a className="mr-5 hover:text-gray-900" href='/components/about'>About-us</a>
            <a className="mr-5 hover:text-gray-900" href='/components/contact'>Contact-us</a>
            </nav>
            <div className="hidden lg:flex items-center bg-gray-100 rounded-md px-3 py-1">
                <input
                type="text"
                className="bg-gray-100 outline-none text-sm text-blue-900 placeholder-gray-900"
                placeholder="Search..."
                />
                <a href="/"><CiSearch className="text-xl bg-blue-700 cursor-pointer" /></a>
           </div>
            <a href="/components/menu">
            <FaCartShopping className='text-3xl ml-2 mr-2'/>
            </a>
            <a href="/components/auth/login">
            <MdOutlineAccountCircle className='text-3xl'/>
            </a>
        </div>
      </header>

    </div>
  )
}

export default Header
