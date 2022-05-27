import React from 'react'
import icon1 from '../../images/svg-1.svg';
import icon2 from '../../images/svg-1.svg';
import icon3 from '../../images/svg-1.svg';
import { 
    ReviewCard,
    ReviewContainer,
    ReviewH1,
    ReviewH2,
    ReviewIcon,
    ReviewP,
    ReviewWrapper  } from './ReviewElements'

const Review = () => {
  return (
    <ReviewContainer id="review">
        <ReviewH1>Reviews</ReviewH1>
        <ReviewWrapper>
            <ReviewCard>
                <ReviewIcon src={icon1}/>
                <ReviewH2>123</ReviewH2>
                <ReviewP>456</ReviewP>
            </ReviewCard>
            <ReviewCard>
                <ReviewIcon src={icon2}/>
                <ReviewH2>123</ReviewH2>
                <ReviewP>456</ReviewP>
            </ReviewCard>
            <ReviewCard>
                <ReviewIcon src={icon3}/>
                <ReviewH2>123</ReviewH2>
                <ReviewP>456</ReviewP>
            </ReviewCard>
        </ReviewWrapper>
    
    </ ReviewContainer>
  )
}

export default Review