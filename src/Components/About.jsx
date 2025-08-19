import React from "react";
import Button from "./Button";

const About = () => {
       return (
              <section
                     id="about"
                     className="w-full bg-white py-16 px-6 md:px-12 lg:px-20"
              >
                     <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center font-[font-4]">
                            {/* Left - Image */}
                            <div className="flex justify-center">
                                   <img
                                          src="https://images.unsplash.com/photo-1453396450673-3fe83d2db2c4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fG1lbnxlbnwwfHwwfHx8MA%3D%3D"
                                          alt="About Me"
                                          className="rounded-2xl shadow-lg w-full max-w-md object-cover"
                                   />
                            </div>

                            {/* Right - Text */}
                            <div>
                                   <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                                          About Me
                                   </h2>
                                   <p className="text-gray-600 text-base md:text-lg mb-6">
                                          Hi, I’m <span className="font-[font-4]">nitin</span>,
                                          a passionate developer specializing in modern web development. I
                                          create clean, responsive, and user-friendly websites & applications
                                          using <span className="font-medium">React</span> and{" "}
                                          <span className="font-medium">Tailwind CSS</span>.
                                   </p>
                                   <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6">
                                          My mission is to deliver digital experiences that not only look
                                          great but also perform flawlessly across all devices. 🚀
                                   </p>
                                   <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6">
                                          My mission is to deliver digital experiences that not only look
                                          great but also perform flawlessly across all devices. 🚀
                                   </p>
                                   <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6">
                                          My mission is to deliver digital experiences that not only look
                                          great but also perform flawlessly across all devices. 🚀
                                   </p>
                                   <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6">
                                          My mission is to deliver digital experiences that not only look
                                          great but also perform flawlessly across all devices. 🚀
                                   </p>
                                   <div className=" w-full ">
                                          <Button text='About Me' bg="bg-black" textColor="text-white" />
                                   </div>
                            </div>
                     </div>
              </section>
       );
};

export default About;
