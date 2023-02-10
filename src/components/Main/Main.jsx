import React from 'react'
import { MainArea, MainContainer } from './Main.elements'
import { Hero, Links, Nav } from '../index'
import { Outlet } from 'react-router-dom'

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
          <Outlet />
        </MainArea>
      </MainContainer>
    </>
  )
}

export default Main
