import React from 'react'
import Header from '../Components/Navbar/Header'
import SectionOne from '../Components/Sections/SectionOne'
import SectionTwo from '../Components/Sections/SectionTwo'
import SectionThree from '../Components/Sections/SectionThree'
import SectionFour from '../Components/Sections/SectionFour'
import SectionFive from '../Components/Sections/SectionFive'
import Footer from '../Components/Footer/Footer'

const HomePage = () => {
  return (
    <div>
      <Header/>
      <SectionOne/>
      <SectionTwo/>
      <SectionThree/>
      <SectionFour/>
      <SectionFive/>
      <Footer/>
    </div>
  )
}

export default HomePage
