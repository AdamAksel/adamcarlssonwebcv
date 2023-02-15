import styled from 'styled-components'
import { GlobalStyle } from './globalstyles'
import { HashRouter as Router } from 'react-router-dom'
import './App.css'
import { Main } from './components'

const StyledApp = styled.div``

function App() {
  return (
    <>
      <StyledApp>
        <GlobalStyle />
        <Router>
          <Main />
        </Router>
      </StyledApp>
    </>
  )
}

export default App
