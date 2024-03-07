import React from 'react'
import Button from './Button/Button'
import { useState } from 'react'

const Navbar = () => {

    const [isMobile,setIsMobile] = useState(false)

    const toggleIsMobile = () => {
        setIsMobile(prev => !prev)
    }

  return (
    <nav className='md:h-[80px] h-[64px] w-full  flex flex-row items-center justify-between md:px-20 px-10 bg-[#FFFFFF]'>
        <div className="logo">
            <img  height={"100px"} width={"100px"} src="data:image/png;base64,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" alt="" />
        </div>
        <div className="navItems md:flex items-center gap-10 hidden">
            <div className='navItem'>
                <ul className='flex gap-8 items-center font-semibold font-inter cursor-pointer'>
                    <li>Crypto Tax</li>
                    <li>Free Tools</li>
                    <li>Resource Center</li>
                </ul>
            </div>
            <div className='get-started-btn'>
                <Button className={"text-white px-4 py-3 bg-gradient-to-r from-[#2870EA] to-[#1B4AEF] rounded-lg font-semibold font-inter "} text={"Get Started"}/>
            </div>
        </div>
        {!isMobile && <div className='md:hidden transition-all' onClick={toggleIsMobile}>
            <button className='md:hidden'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
            </button>
        </div>}
        {isMobile && <div className="mobile-nav-items  md:hidden  transition-all" onClick={toggleIsMobile}>
            <button>
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 50 50">
<path d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z"></path>
</svg>
            </button>
        </div>}
        {isMobile && <div className="navItems  items-center  md:hidden absolute top-[70px] w-[200px] bg-gray-200 py-10 rounded-xl right-[10px]">
            <div className='navItem'>
                <ul className='flex gap-4 items-center flex-col font-semibold font-inter cursor-pointer'>
                    <li>Crypto Tax</li>
                    <li>Free Tools</li>
                    <li>Resource Center</li>
                    <Button className={"text-white px-4 py-3 bg-gradient-to-r from-[#2870EA] to-[#1B4AEF] rounded-lg font-semibold font-inter "} text={"Get Started"}/>
                </ul>
            </div>
        </div>}
    </nav>
  )
}

export default Navbar