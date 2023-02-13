import styled from 'styled-components'

export const CVArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 90vw;
  flex: 1;
  gap: 3vw;
  @media only screen and (max-width: 636px) {
    flex-direction: column;
  }
`

export const CVSide = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  min-width: 40vw;
  max-width: 40vw;
  flex: 1;
  flex-direction: column;
  @media only screen and (max-width: 636px) {
    max-width: 89vw;
  }
`

export const CVItem = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex: 1;
  flex-direction: column;
  min-height: 200px;
  min-width: 40vw;
  max-width: 40vw;

  @media only screen and (max-width: 636px) {
    max-width: 89vw;
  }
`
export const CVTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  background-color: #141c3a;
  width: 38vw;
  min-height: 50px;
  max-height: 50px;
  color: whitesmoke;
  font-size: auto;
  border-radius: 15px;
  padding: 1vh;
  overflow: hidden;
  @media only screen and (max-width: 636px) {
    width: 89vw;
  }
`

export const CVText = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex: 1;
  background-color: #ffffff;
  width: 40vw;
  min-height: 150px;
  color: #141c3a;
  padding: 2vh;
  border-radius: 20px;
  border-left: 1px solid black;
  @media only screen and (max-width: 636px) {
    width: 89vw;
  }
`
