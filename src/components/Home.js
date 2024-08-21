import React from 'react'
import NavbarMenu from './Navbar'
import CarouselSection from './carsouel'
import BarAndPieCharts from './charts'
import CarouselSection1 from './carss'
import CommunityGrid from '../pages/community'
import CasteList from '../pages/caste'

function Home() {
  return (
    <>
    <NavbarMenu/>
    <CarouselSection/>
    <BarAndPieCharts/>
    <CommunityGrid/>
    <CasteList/>
    <CarouselSection1/>
      
    </>
  )
}

export default Home
