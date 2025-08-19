import React from 'react'
import Navbar from './Navbar'
import Button from './Button'

const Home = () => {
       return (
              <section className="relative w-full h-[90vh] pb-20 lg:h-screen bg-black text-white flex flex-col items-center justify-between px-6 md:px-16">
                     <Navbar />
                     <div className="max-w-4xl text-center pb-20">

                            {/* Headline */}
                            <h1 className="text-5xl md:text-7xl font-extrabold leading-tighter ">
                                   We Design Experiences <br /> That Inspire & Engage
                            </h1>

                            {/* Subtext */}
                            <p className="mt-6 text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
                                   At <span className="text-white font-semibold">Nobilfy</span>, we turn bold ideas into stunning websites.
                                   Let’s build something extraordinary together.
                            </p>

                            <div className="w-full flex justify-center mt-8 ">
                                   <Button text='Book a call' />
                            </div>

                     </div>
              </section>
       )
}

export default Home