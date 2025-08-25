import React, { useEffect, useRef } from "react";
import SpotlightCard from "./SpotlightCard";
import { IoGlobeSharp } from "react-icons/io5";
import gsap from "gsap";

const servicesData = [
       {
              title: "Web Development",
              description:
                     "Complete Website Development Services within 24hr. Any kind of website you want, we will develop it for you.",
              icon: <IoGlobeSharp />,
       },
       {
              title: "App Development",
              description:
                     "Complete App Development Services within 24hr. Any kind of app you want, we will develop it for you.",
              icon: <IoGlobeSharp />,
       },
       {
              title: "UI/UX Design",
              description:
                     "Modern and user-friendly UI/UX design tailored to your brand and audience.",
              icon: <IoGlobeSharp />,
       },
       {
              title: "E-Commerce Solutions",
              description:
                     "Robust and scalable e-commerce websites to grow your online business.",
              icon: <IoGlobeSharp />,
       },
];

const Services = () => {
       const iconRefs = useRef([]);

       useEffect(() => {
              iconRefs.current.forEach((icon) => {
                     if (icon) {
                            gsap.to(icon, {
                                   rotation: 360,
                                   repeat: -1,
                                   ease: "linear",
                                   duration: 6,
                                   transformOrigin: "center center",
                            });
                     }
              });
       }, []);

       return (
              <section className="relative w-full bg-[#f1f1f1] py-16 px-6 md:px-12 lg:px-20 font-[font-2]">
                     {/* Section Title */}
                     <div className="text-center mb-12">
                            <h1 className="text-4xl lg:text-6xl font-bold">Our Services</h1>
                     </div>

                     {/* Service Grid */}
                     <div className="grid grid-cols-1 md:grid-cols-2 lg:px-52 gap-8 lg:gap-6 justify-items-center">
                            {servicesData.map((service, index) => (
                                   <SpotlightCard
                                          key={index}
                                          className="w-full max-w-md p-6 bg-[#1a1a1a] rounded-xl text-white"
                                   >
                                          {/* Icon with GSAP Rotation */}
                                          <div
                                                 ref={(el) => (iconRefs.current[index] = el)}
                                                 className="text-4xl mb-3 inline-block"
                                          >
                                                 {service.icon}
                                          </div>

                                          {/* Content */}
                                          <h2 className="text-xl font-bold mb-2">{service.title}</h2>
                                          <p className="text-sm text-neutral-400">{service.description}</p>
                                   </SpotlightCard>
                            ))}
                     </div>
              </section>
       );
};

export default Services;
