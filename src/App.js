import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/HeroSection/Hero'
import About from './components/About/About'
import Developer from './components/Developer/Developer'
import Subscribe from './components/Subscribe/Subscribe'
import Footer from './components/Footer/Footer'


const App = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <About/>
    <Developer/>
    <Subscribe/>
    <Footer/> 
    </>
  )
}

export default App