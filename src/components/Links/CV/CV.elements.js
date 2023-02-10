import styled from 'styled-components'

export const CVArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1200px;
  min-width: 360px;
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
  min-width: 300px;
  flex: 1;
  flex-direction: column;
  @media only screen and (max-width: 636px) {
    min-width: 360px;
  }
`

export const CVItem = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex: 1;
  flex-direction: column;
  min-height: 200px;
  min-width: 300px;
`
export const CVTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  background-color: #141c3a;
  min-width: 300px;
  min-height: 50px;
  max-height: 50px;
  color: whitesmoke;
`
