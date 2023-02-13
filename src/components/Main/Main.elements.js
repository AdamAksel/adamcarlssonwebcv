import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  min-width: 100vw;
  min-height: 100vh;
  flex-direction: column;
`

export const MainArea = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex: 1;

  margin-top: 5vh;
  flex-direction: column;
  @media only screen and (max-width: 636px) {
    margin-top: 2vh;
  }
`
