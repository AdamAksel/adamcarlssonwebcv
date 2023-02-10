import styled from 'styled-components'

export const PortfolioContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex: 1;
  max-width: 1200px;
  gap: 1vw;
  flex-direction: column;
  @media only screen and (min-width: 1266px) {
    flex-direction: row;
  }
`
export const PortfolioItem = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex: 1;
  flex-direction: column;
  min-width: 636px;

  min-height: 440px;
  @media only screen and (max-width: 636px) {
    min-width: 360px;
    min-height: 300px;
  }
`

export const PortfolioImage = styled.img`
  max-height: 400px;
  max-width: 636px;

  @media only screen and (max-width: 636px) {
    max-width: 360px;
    max-height: 300px;
  }
`

export const PortfolioLink = styled.a`
  text-decoration: none;
  color: inherit;
  font-size: x-large;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    color: #3589cf;
  }
`
