import React, { useState } from 'react'
import col1 from "../assets/col1.png"
import col2 from "../assets/col2.png"
import img2 from "../assets/kostech.png"

import { Link } from 'react-router-dom'

const Navbar = () => {

   const [ open , setopen ] = useState("")




   const handleToggle = () => {
    setopen(!open)
 }


  return (
    <div className='relative'>
    <div className=' fixed top-0 left-0 right-0 w-full z-40 '>
    <div className="navbar relative z-50 md:relative bg-theme-900 ">
        <div className="navbar-start">
            <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden" onClick={handleToggle}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <div
                        className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
                        open ? "block" : "hidden"
                        }`} // Conditional class based on the state
                        id="fixed"
          >
            <ul className="flex flex-col md:hidden  absolute p-7  md:p-0 mt-4 w-60 font-medium border bg-blue-700 blur-0 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">   
                <li>
                   
                   <Link to="/form">add message</Link>
                </li>  
            </ul>
          </div>
            </div>
                <div className="navbar-right hidden md:flex lg:flex">
                  <a className="btn btn-ghost text-xl">Kost Tech</a>
                </div>
                 <img src={img2} alt="" className='w-10'/>
        </div>
        <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                <li><a>Bio</a></li>
                <li><a>Portofolio</a></li>
                <li>  <Link to="/form">add message</Link></li>
                </ul>
        </div>
            <div className="navbar-end gap-4 ">
                <a className="btn-global rounded-full text-sm text-center">add Frieds</a>
                <a className="btn">Sign in </a>
            </div>
            
    </div>
    <div className="flex justify-center ">
            <img src={col1} alt="" className="relative  ml-24 top-[-200px] z-40" />
            <img src={col2} alt="" className="relative mx-[-500px] top-[-250px] z-30" />
      </div>
</div>

    </div>
  )
}

export default Navbar