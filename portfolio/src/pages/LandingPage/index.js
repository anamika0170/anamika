import React from 'react'
import Navbar from '../../components/Navbar'
import About from '../../components/About'
import Projects from '../../components/Projects'
import Contact from '../../components/Contact'
import Footer from '../../components/Footer'
import Home from '../../components/Home'

const LandingPage = () => {
  return (
    <>
        <Navbar/>
        <Home/>
        <About/>
        <Projects/>
        <Contact/>
        <Footer/>
    </>
  )
}

export default LandingPage