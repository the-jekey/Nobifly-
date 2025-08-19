import React from "react";
import Button from "./Button";

const services = [
       {
              id: 1,
              title: "Web Development",
              desc: "Building modern and responsive websites with React & Tailwind.",
              icon: "💻",
       },
       {
              id: 2,
              title: "App Developement",
              desc: "Creating beautiful, user-friendly designs that engage users.",
              icon: "🎨",
       },
       {
              id: 3,
              title: "E-Commrece Development",
              desc: "High-performance mobile and web applications for all platforms.",
              icon: "📱",
       },
       {
              id: 4,
              title: "SEO Optimization",
              desc: "Boosting your site’s ranking and visibility with SEO strategies.",
              icon: "🚀",
       },
];

const Service = () => {
       return (
              <section className="w-full bg-white py-16 px-6 md:px-12 lg:px-20 font-[font-4] spaciing ">
                     {/* Section Title */}
                     <div className="text-center mb-12">
                            <h2 className="text-4xl md:text-6xl font-bold text-gray-900">
                                   Services
                            </h2>
                            <p className="mt-4 text-gray-600 text-base md:text-lg">
                                   Any serivce delevered in next 24 hours
                            </p>
                     </div>

                     {/* Service Grid */}
                     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            {services.map((service) => (
                                   <div
                                          key={service.id}
                                          className="bg-gray-200 rounded-2xl shadow-md hover:bg-black hover:text-white cursor-pointer  p-8 text-center transition-all duration-300"
                                   >
                                          <div className="text-5xl mb-4">{service.icon}</div>
                                          <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                                          <p className="text-sm md:text-base">{service.desc}</p>

                                   </div>
                            ))}
                     </div>
                     <div className=" w-full flex justify-center lg:mx-auto mt-10  ">
                            <Button text='View all ' bg="bg-black" textColor="text-white" />
                     </div>
              </section>
       );
};

export default Service;
