import React from 'react'

const Navbar = () => {
       return (
              <div className='w-full flex px-4 py-2 font-[font-4] justify-between'>
                     <div className="logo text-white">
                            <a href="/"><h1>NOBIFLY</h1></a>
                     </div>
                     <div className="menu flex items-center justify-center gap-1 flex-col md:hidden lg:hidden">
                            <div className="h-[2px] bg-white w-[17px] rounded-2xl"></div>
                            <div className="h-[2px] bg-white w-[17px] rounded-2xl"></div>
                     </div>
                     <div className="links  hidden md:flex lg:flex items-center text-white justify-center gap-4">
                            <h1 className='cursor-pointer'>Home</h1>
                            <h1 className='cursor-pointer'>About</h1>
                            <h1 className='cursor-pointer'>Work</h1>
                            <h1 className='cursor-pointer'>Contact</h1>
                     </div>
              </div>
       )
}

export default Navbar