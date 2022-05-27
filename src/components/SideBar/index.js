import React from 'react'
import { 
    SideBarContainer,
    Icon,
    CloseIcon,
    SideBarWrapper,
    SideBarMenu,
    SideBarLink,
    SideBtnWrap,
    SideBarRoute
} from './SideBarElements'

const SideBar = ({isOpen, toggle}) => {
  return (
    <SideBarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon />
        </Icon>
        <SideBarWrapper>
            <SideBarMenu>
                <SideBarLink to='about' onClick={toggle}>
                    About
                </SideBarLink>
                <SideBarLink to='services' onClick={toggle}>
                    Services
                </SideBarLink>
                <SideBarLink to='projects' onClick={toggle}>
                    Projects
                </SideBarLink>
                <SideBarLink to='reviews' onClick={toggle}>
                    Reviews
                </SideBarLink>
                <SideBarLink to='contact' onClick={toggle}>
                    Contact Us
                </SideBarLink>
            </SideBarMenu>
            <SideBtnWrap>
                <SideBarRoute to='/contact'>
                    Contact Us
                </SideBarRoute>
            </SideBtnWrap>
        </SideBarWrapper>
    </SideBarContainer>
  )
}

export default SideBar