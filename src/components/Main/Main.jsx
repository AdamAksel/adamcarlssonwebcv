import React from 'react'
import { MainArea, MainContainer } from './Main.elements'
import { Hero, Links, Nav, CV, Portfolio } from '../index'
import { Routes, Route } from 'react-router-dom'

const Main = () => {
  return (
    <>
      <MainContainer>
        <Nav />
        <MainArea>
          <Hero />
          <Links />
        </MainArea>
        <MainArea>
          <Routes>
            <Route index element={<CV />} />
            <Route exact path='/portfolio' element={<Portfolio />} />
          </Routes>
        </MainArea>
      </MainContainer>
    </>
  )
}

export default Main
