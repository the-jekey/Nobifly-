import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Footer = () => {
       return (

              <footer className="w-full bg-black text-white px-6 md:px-16 py-12 font-[font-4] spacing  ">
                     <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

                            {/* Brand Section */}
                            <div>
                                   <h2 className="text-2xl font-bold">Nobilfy</h2>
                                   <p className="mt-3 text-sm text-gray-400 leading-relaxed">
                                          We craft modern, creative, and user-focused digital experiences.
                                          Turning ideas into stunning websites.
                                   </p>
                            </div>

                            {/* Quick Links */}
                            <div>
                                   <h3 className="text-lg font-semibold mb-3">Menu</h3>
                                   <ul className="space-y-1 text-gray-400">
                                          <li><a href="#" className="hover:text-white">Home</a></li>
                                          <li><a href="#" className="hover:text-white">About Us</a></li>
                                          <li><a href="#" className="hover:text-white">Services</a></li>
                                          <li><a href="#" className="hover:text-white">Portfolio</a></li>
                                          <li><a href="#" className="hover:text-white">Contact</a></li>
                                   </ul>
                            </div>

                            {/* Services */}
                            <div>
                                   <h3 className="text-lg font-semibold mb-3">Services</h3>
                                   <ul className="space-y-1 text-gray-400">
                                          <li><a href="" className="hover:text-white">Web Development</a></li>
                                          <li><a href="" className="hover:text-white">App Development</a></li>
                                          <li><a href="" className="hover:text-white">Video Editing </a></li>
                                          <li><a href="" className="hover:text-white">3D & Motion</a></li>
                                          <li><a href="" className="hover:text-white">SEO & Marketing</a></li>
                                   </ul>
                            </div>

                            {/* Social Media */}
                            <div>
                                   <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
                                   <div className="flex gap-4 text-gray-400">
                                          <a href="#" className="hover:text-white"><FaInstagram size={20} /></a>
                                          <a href="#" className="hover:text-white"><FaLinkedin size={20} /></a>
                                          <a href="#" className="hover:text-white"><FaTwitter size={20} /></a>
                                          <a href="#" className="hover:text-white"><FaFacebookF size={20} /></a>
                                   </div>
                            </div>
                     </div>

                     {/* Bottom Copyright */}
                     <div className="mt-10 border-t border-gray-800 pt-2 flex flex-col md:flex-row items-center justify-between text-gray-500 text-sm">
                            <p>© {new Date().getFullYear()} Nobilfy. All rights reserved.</p>
                            <p>Made with ❤️ by JEKEY</p>
                     </div>
              </footer>
       )
}

export default Footer
