import styled from 'styled-components'

export const QAArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  min-width: 90vw;
  max-width: 90vw;
  flex: 1;
  gap: 3vw;
  @media only screen and (max-width: 636px) {
    flex-direction: column;
  }
`

export const QASide = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  min-width: 38vw;
  max-width: 38vw;
  flex: 1;
  gap: 2vh;
  flex-direction: column;
  @media only screen and (max-width: 636px) {
    max-width: 89vw;
  }
`

export const QAItem = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex: 1;
  flex-direction: column;
  min-height: fit-content;
  min-width: 40vw;
  border-radius: 20px;
  border-left: 1px solid black;
  padding: 1vh;
  margin-left: 1vh;
  @media only screen and (max-width: 636px) {
    max-width: 87vw;
  }
`

export const QAList = styled.ul`
  text-decoration: none;
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
  flex-direction: column;
  width: 35vw;
  gap: 1vh;
  @media only screen and (max-width: 636px) {
    width: 85vw;
  }
`

export const QALi = styled.li`
  font-size: larger;
  display: flex;
  justify-content: flex-start;
`
