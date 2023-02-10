import styled from 'styled-components'
import { GlobalStyle } from './globalstyles'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'
import './App.css'
import { CV, Main, Portfolio, QandA } from './components'

const StyledApp = styled.div``

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Main />}>
      <Route path='/cv' element={<CV />} />
      <Route path='/q&a' element={<QandA />} />
      <Route path='/portfolio' element={<Portfolio />} />
    </Route>
  )
)

function App() {
  return (
    <>
      <StyledApp>
        <GlobalStyle />
        <RouterProvider router={router} />
      </StyledApp>
    </>
  )
}

export default App
