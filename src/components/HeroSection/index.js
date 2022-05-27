import React, {useState} from 'react'
import Video from '../../videos/video.mp4'
import { Button } from '../ButtonElements'
import {
    HeroContainer,
    HeroBg, 
    VideoBg,
    HeroContent,
    HeroH1,
    HeroH2,
    HeroP,
    HeroBtnWrapper,
    ArrowForward,
    ArrowRight
 } from './HeroElements'

const HeroSection = () => {
    const [hover, sethover] = useState(false)

    const onHover = ()=>{
        sethover(!hover)
    } 

  return (
    <HeroContainer>
        <HeroBg>
            <VideoBg autoPlay loop muted src={Video} type='video/mp4' />

        </HeroBg>
            <HeroContent>
                <HeroH1>WELCOME TO AMD GROUNDWORKS</HeroH1>
                <HeroH2>Providing professional ground services to the UK</HeroH2>
                <HeroP>
                    01457 835948
                </HeroP>
                    <HeroBtnWrapper>
                     <Button to='contactus' onMouseEnter={onHover} onMouseLeave={onHover} primary="True" dark="True">
                          Contact Us {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                     </HeroBtnWrapper>
        </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection