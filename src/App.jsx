import React from 'react'
import Home from './Components/Home'
import Footer from './Components/Footer'
import Work from './Components/Work'
import Service from './Components/services'
import About from './Components/About'
import LocomotiveScroll from 'locomotive-scroll';


const App = () => {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className=''>
      <Home />
      <Service />
      <About />
      <Work />
      <Footer />
    </div>
  )
}

export default App