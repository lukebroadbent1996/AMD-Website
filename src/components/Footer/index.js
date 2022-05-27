import React from 'react'
import {
    FooterContainer,
    FooterLink,
    FooterLinkItems,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkTitle,
    FooterWrap,
    FooterLink2,
    WebsiteBuilt,
    WebsiteRights,
    SocialMedia,
    SocialMediaWrap
} from './FooterElements'

const Footer = () => {
  return (
    <FooterContainer>
        <FooterWrap>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                       

                        </FooterLinkItems>
                        <FooterLinkItems>
                        <FooterLinkTitle>AMD</FooterLinkTitle>

                            
                            <FooterLink2><a href='https://goo.gl/maps/Q1Qi37KejA7ezREW7'>Base of operation</a></FooterLink2>
                            <FooterLink to="/about">Contact Us</FooterLink>
                           

                        </FooterLinkItems>
                </FooterLinksWrapper>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>Groundworks</FooterLinkTitle>

                            
                            <FooterLink to="/about">Reviews</FooterLink>
                            <FooterLink to="/about">Testimonials</FooterLink>
                            

                        </FooterLinkItems>
                        <FooterLinkItems>
                    

                        </FooterLinkItems>
                </FooterLinksWrapper>
            </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <WebsiteRights>Copyright © {new Date().getFullYear()} AMD Groundworks - All Rights Reserved.</WebsiteRights>
                        <WebsiteBuilt>Website Built by Luke Broadbent</WebsiteBuilt>
                    </SocialMediaWrap>
                </SocialMedia>
        </FooterWrap>
    </FooterContainer>
  )
}

export default Footer