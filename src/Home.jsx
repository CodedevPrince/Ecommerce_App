import React from 'react'
import Hero from './Components/Hero';
import Choice from './Components/Choice';
import Featured from './Components/Featured';
import Promotional from './Components/Promotional';
import Facilities from './Components/Facilities';
import Footer from './Components/Footer';
export const Home = () => {
  return (
    <>
    <Hero/>
    <Choice/>
    <Featured/>
    <Promotional/>
    <Facilities/>
    <Footer/>
    </>
  )
}
export default Home;