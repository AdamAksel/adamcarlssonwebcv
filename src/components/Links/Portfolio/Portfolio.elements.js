import styled from 'styled-components'

export const PortfolioContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex: 1;
  max-width: 1200px;
  gap: 4vw;
  flex-direction: column;
  @media only screen and (min-width: 1000px) {
    flex-direction: row;
  }
`
export const PortfolioItem = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex: 1;
  flex-direction: column;
  max-width: 45vw;
  min-height: auto;
  gap: 2vh;
  background-color: #dfdfdf;
  border-radius: 25px;
  border-left: 1px solid black;
  border-right: 1px solid black;
  margin-bottom: 2vh;
  padding-bottom: 2vh;

  @media only screen and (max-width: 1000px) {
    min-width: 95vw;
    min-height: auto;
  }
`

export const PortfolioImage = styled.img`
  max-width: 43vw;
  min-height: auto;

  @media only screen and (max-width: 1000px) {
    max-width: 95vw;
    min-height: auto;
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
