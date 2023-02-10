import React from 'react'
import {
  NavArea,
  NavSideLeft,
  NavSideRight,
  NavCenter,
  NavContainer,
  NavSideImgLeft,
  NavSideImgRight,
} from './Nav.elements'
import Logo from '../images/Logo.png'
import Flag from '../images/LogoFlag.png'

const Nav = () => {
  return (
    <>
      <NavContainer>
        <NavArea>
          <NavSideLeft>
            <NavSideImgLeft src={Logo} alt='logo for Adam Calrsson' />
          </NavSideLeft>
          <NavCenter>
            <h1>Adam Carlsson CV</h1>
          </NavCenter>
          <NavSideRight>
            <NavSideImgRight src={Flag} alt='von Mises flag' />
          </NavSideRight>
        </NavArea>
      </NavContainer>
    </>
  )
}

export default Nav
