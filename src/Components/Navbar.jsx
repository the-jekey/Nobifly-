import React from 'react'
import Button from './Button'

const Navbar = () => {
       return (
              <div className='w-full flex px-4 py-2 font-[font-4] text-black items-center justify-between'>
                     <div className="logo">
                            <a href="/"><h1>NOBIFLY</h1></a>
                     </div>

                     <div className="links  hidden md:flex lg:flex items-center text- justify-center gap-4">
                            <h1 className='cursor-pointer'>Home</h1>
                            <h1 className='cursor-pointer'>About</h1>
                            <h1 className='cursor-pointer'>Work</h1>
                            <h1 className='cursor-pointer'>Contact</h1>
                     </div>
                     <div className="">
                            <a href="https://cal.com/nobifly/30min    ">
                                   <Button bg='bg-black ' textColor='text-white' text='Book a call' px='px-4 ' py='py-2' />
                            </a>

                     </div>
              </div>
       )
}

export default Navbar