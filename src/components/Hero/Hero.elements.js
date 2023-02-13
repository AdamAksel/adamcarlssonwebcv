import styled from 'styled-components'

export const HeroArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  flex-direction: column;
  gap: 3vh;
  margin-bottom: 5vh;
  @media only screen and (max-width: 636px) {
    margin-bottom: 0;
  }
`

export const HeroImg = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 200px;
  max-height: 200px;
  border-radius: 50%;
  cursor: pointer;
`
