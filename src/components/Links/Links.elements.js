import styled from 'styled-components'

export const LinksArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex: 1;
  max-width: 1200px;
  margin-top: 5vh;
  gap: 2vw;
  overflow: visible;
  @media only screen and (max-width: 636px) {
    flex-direction: column;
  }
`

export const LinksItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  min-width: 200px;
  min-height: 100px;
  border-radius: 50%;
  background-color: #141c3a;
  color: whitesmoke;

  cursor: pointer;

  &:hover {
    color: darkgray;
    box-shadow: 3px 0px 2px;
  }
  @media only screen and (max-width: 636px) {
    min-width: 300px;
  }
`
