import React from 'react'
import Button from './Button'
import CardNav from './CardNav'

const Home = () => {

       const items = [
              {
                     label: "About",
                     bgColor: "#0D0716",
                     textColor: "#fff",
                     links: [
                            { label: "About Company", ariaLabel: "About Company" },
                            { label: "About Founder", ariaLabel: "About Careers" }
                     ]
              },
              {
                     label: "Projects",
                     bgColor: "#170D27",
                     textColor: "#fff",
                     links: [
                            { label: "Featured", ariaLabel: "Featured Projects" },
                            { label: "Case Studies", ariaLabel: "Project Case Studies" }
                     ]
              },
              {
                     label: "Contact",
                     bgColor: "#271E37",
                     textColor: "#fff",
                     links: [
                            { label: "Email", href: "mailto:nobifly@gmail.com", ariaLabel: "Email Us" },
                            { label: "Twitter", href: "https://twitter.com/yourhandle", ariaLabel: "Twitter Profile" },
                            { label: "LinkedIn", href: "https://linkedin.com/in/yourprofile", ariaLabel: "LinkedIn Profile" }

                     ]
              }
       ];
       return (
              <section id='home' className="relative w-full h-[90vh] pb-20 lg:h-screen bg-[#f1f1f1]  text-black flex flex-col items-center justify-between px-6 md:px-16">
                     <div className="">
                            <CardNav
                                   logo={"./BG-Black.png"}
                                   logoAlt="Company Logo"
                                   items={items}
                                   baseColor="#f5f5f5"
                                   menuColor="#000"
                                   buttonBgColor="#111"
                                   buttonTextColor="#fff"
                                   ease="power3.out"
                            />
                     </div>
                     <div className="max-w-4xl text-center pb-20">

                            {/* Headline */}
                            <h1 className="text-5xl md:text-7xl font-extrabold spacing tracking-tighter ">
                                   We Design Experiences <br /> That Inspire & Engage
                            </h1>

                            {/* Subtext */}
                            <p className="mt-6 text-lg md:text-xl text-black max-w-2xl mx-auto">
                                   At <span className=" ">Nobilfy</span>, we turn bold ideas into stunning websites.
                                   Let’s build something extraordinary together.
                            </p>

                            <div className="w-full flex justify-center mt-8 ">
                                   <a href="https://cal.com/nobifly/30min">
                                          <Button
                                                 bg='bg-black '
                                                 textColor='text-white'
                                                 text='Book a call'
                                                 px='px-8 '
                                                 py='py-4'
                                                 textSize='text-lg'
                                          />
                                   </a>
                            </div>

                     </div>
              </section>
       )
}

export default Home