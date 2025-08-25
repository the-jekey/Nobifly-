import React from 'react'
import Home from './Components/Home'
import Footer from './Components/Footer'
import Work from './Components/Work'
import Service from './Components/services'
import LocomotiveScroll from 'locomotive-scroll';
import LogoLoop from './Components/LogoLoop'
import Marque from './Components/Marque'
import About from './Components/About'


const App = () => {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className='selection:bg-black selection:text-white'>
      <Home />
      <Marque />
      <Service />
      <Work />
      <Footer />
    </div>
  )
}

export default App