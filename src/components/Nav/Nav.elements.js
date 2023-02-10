import styled from 'styled-components'

export const NavContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 100vw;
  min-height: 60px;
  background-color: #141c3a;
  color: whitesmoke;
`

export const NavArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  max-width: 1200px;
  min-height: 60px;
  @media only screen and (max-width: 768px) {
    justify-content: space-between;
  }
`

export const NavSideImgLeft = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  max-height: 60px;
  background-color: whitesmoke;
  flex-shrink: 0;
`

export const NavSideImgRight = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  max-height: 60px;
  flex-shrink: 0;
`

export const NavSideLeft = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  max-width: 25%;
  @media only screen and (max-width: 768px) {
    max-width: 50%;
  }
`

export const NavSideRight = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  max-width: 25%;
  @media only screen and (max-width: 768px) {
    max-width: 50%;
  }
`

export const NavCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  max-width: 50%;

  @media only screen and (max-width: 768px) {
    display: none;
    max-width: 10%;
  }
`
