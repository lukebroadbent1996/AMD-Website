import React, {useState} from 'react'
import SideBar from '../components/SideBar'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import InfoSection from '../components/InfoSection'
import { homeObjOne, homeObjThree, homeObjTwo } from '../components/InfoSection/data'
import Review from '../components/Review'
import Footer from '../components/Footer'



const Home = () => {
    const [isOpen, setIsOpen]= useState (false)

    const toggle =()=>{
        setIsOpen(!isOpen)
    }

  return (
    <>
        <SideBar isOpen = {isOpen} toggle ={toggle} />
        <Navbar toggle={toggle} />
        <HeroSection />
        <InfoSection {...homeObjOne}/>
        <InfoSection {...homeObjTwo}/>
        <InfoSection {...homeObjThree}/>
        <Review />
        <Footer/>
    </>
  )
}

export default Home