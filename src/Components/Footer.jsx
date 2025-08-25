import React, { useEffect, useRef, useState } from 'react'
import { LiaGlobeSolid } from "react-icons/lia";
import gsap from 'gsap'

const Footer = () => {
       const globeRef = useRef(null);
       const [time, setTime] = useState('');

       // animate globe
       useEffect(() => {
              gsap.to(globeRef.current, {
                     rotation: 360,
                     repeat: -1,
                     ease: "linear",
                     duration: 7,
                     transformOrigin: "50% 50%"
              });
       }, []);

       // update local time
       useEffect(() => {
              const updateTime = () => {
                     const now = new Date();
                     const options = {
                            timeZone: 'Asia/Kolkata',
                            hour: 'numeric',
                            minute: 'numeric',
                            second: 'numeric',
                            hour12: true
                     };
                     let indianTime = now.toLocaleTimeString('en-IN', options);
                     indianTime = indianTime.replace('am', 'AM').replace('pm', 'PM');
                     setTime(indianTime);
              };

              updateTime();
              const interval = setInterval(updateTime, 1000);
              return () => clearInterval(interval);
       }, []);

       // smooth scroll handler
       const handleScroll = (id) => {
              const section = document.getElementById(id);
              if (section) {
                     section.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
       };

       return (
              <div id='contact' className='max-w-screen px-6 md:px-6 lg:px-8 font-[font-4] spacing lg:py-1 h-screen relative overflow-hidden bg-red-5 bg-[#f2] text-black/50'>
                     <div className="w-full flex justify-between gap-2">
                            <div className="link w-1/2">
                                   <h1 className='border-b-1 font-semibold'>Menu</h1>
                                   <h1 onClick={() => handleScroll('home')} className='Home select-none hover:underline w-fit cursor-pointer'>Home!</h1>
                                   <h1 onClick={() => handleScroll('work')} className='Work select-none hover:underline w-fit cursor-pointer'>Work!</h1>
                                   <h1 onClick={() => handleScroll('about')} className='About select-none hover:underline w-fit cursor-pointer'>About!</h1>
                                   <h1 onClick={() => handleScroll('services')} className='Services select-none hover:underline w-fit cursor-pointer'>Service!</h1>
                                   <h1 onClick={() => handleScroll('contact')} className='Contact select-none hover:underline w-fit cursor-pointer'>Contact!</h1>
                            </div>
                            <div className="Social w-1/2">
                                   <h1 className='border-b-1 font-semibold'>Social</h1>
                                   <a target='_blank' href=""> <h1 className='select-none hover:underline w-fit cursor-pointer'>Instagram</h1>   </a>
                                   <a target='_blank' href=""> <h1 className='select-none hover:underline w-fit cursor-pointer'>Linkedin</h1>    </a>
                                   <a target='_blank' href=""> <h1 className='select-none hover:underline w-fit cursor-pointer'>YouTube</h1>     </a>
                                   <a target='_blank' href=""> <h1 className='select-none hover:underline w-fit cursor-pointer'>Github</h1>      </a>
                                   <a target='_blank' href=""> <h1 className='select-none hover:underline w-fit cursor-pointer'>X</h1>           </a>
                            </div>
                     </div>

                     <div className="mt-10">
                            <div className="Social">
                                   <h1 className='border-b-1 font-semibold'>Resource</h1>
                                   <a target='_blank' href=""> <h1 className='select-none hover:underline w-fit cursor-pointer'>Dribble</h1>   </a>
                                   <a target='_blank' href=""> <h1 className='select-none hover:underline w-fit cursor-pointer'>Behance</h1>   </a>
                                   <a target='_blank' href=""> <h1 className='select-none hover:underline w-fit cursor-pointer'>Figma</h1>     </a>
                                   <a target='_blank' href=""> <h1 className='select-none hover:underline w-fit cursor-pointer'>Newslatter</h1></a>

                            </div>
                     </div>

                     <div className="w-full h-[57vh] lg:h-[48vh] relative flex flex-col items-center justify-center">
                            <div className="txt w-full spacing-2 uppercase font-[font-3] text-black leading-[76%] text-[9vh] tracking-tighter lg:flex lg:gap-0.5 lg:text-[20vh]">
                                   <h1>NOBIFLY<span className='leading-0'>&copy;</span></h1>
                            </div>
                     </div>

                     {/* Footer bottom */}
                     <div className="bottom uppercase leading-[50%] spacingg font-[font-3] flex justify-between items-end">
                            <div>
                                   <h1>&copy;2025</h1>
                                   <h1 className='text-3xl'>NOBIFLY&copy;</h1>
                                   <h1 className='text-[15px] tracking-tight'>All Rights reserved!</h1>
                            </div>

                            <div className="local-time flex flex-col items-center gap-1">
                                   <div className="w-full flex items-center gap-1">
                                          <h1 className='font-semibold text-[12px]'>Local Time</h1>
                                          <span ref={globeRef} className='globe text-sm'><LiaGlobeSolid /></span>
                                   </div>
                                   <span className='font-["font-2"] text-sm'>{time} IND.</span>
                            </div>
                     </div>
              </div>
       )
}

export default Footer
